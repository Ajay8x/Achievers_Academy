import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getCurrentAdmin } from '@/lib/auth';

// Rate limiting in-memory store
const rateLimit = new Map<string, { count: number; timestamp: number }>();

// XSS Prevention: Sanitize string inputs
function sanitizeInput(str: string): string {
  if (!str || typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const now = Date.now();
    const clientLimit = rateLimit.get(ip);

    if (clientLimit && now - clientLimit.timestamp < 60000 && clientLimit.count > 10) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again after a minute.' },
        { status: 429 }
      );
    }

    if (!clientLimit || now - clientLimit.timestamp >= 60000) {
      rateLimit.set(ip, { count: 1, timestamp: now });
    } else {
      clientLimit.count += 1;
    }

    const body = await req.json();
    const studentName = body.studentName || body.name;
    const parentName = body.parentName || '';
    const phone = body.phone || body.mobile || body.contact;
    const email = body.email || '';
    const campus = body.campus;
    const program = body.program || body.grade || body.course;
    const batch = body.batch || '';
    const hostelRequired = !!body.hostelRequired;
    const transportRequired = !!body.transportRequired;
    const message = body.message || body.notes || '';
    const relationship = body.relationship || 'Parent';
    const preferredMedium = body.preferredMedium || 'English';
    const source = body.source || 'Website Admission Form';

    // Validation
    if (!studentName || !phone || !campus || !program) {
      return NextResponse.json(
        { error: 'Please provide Student Name, Phone Number, Campus, and Program.' },
        { status: 400 }
      );
    }

    // Phone format check (must be at least 10 digits)
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { error: 'Please provide a valid 10-digit mobile number.' },
        { status: 400 }
      );
    }

    const saved = db.addEnquiry({
      studentName: sanitizeInput(studentName),
      parentName: sanitizeInput(parentName || 'Parent / Guardian'),
      phone: cleanPhone,
      email: email ? sanitizeInput(email) : undefined,
      campus: sanitizeInput(campus),
      program: sanitizeInput(program),
      batch: sanitizeInput(batch || 'Regular Batch'),
      hostelRequired: Boolean(hostelRequired),
      transportRequired: Boolean(transportRequired),
      message: message ? sanitizeInput(message) : '',
      relationship: sanitizeInput(relationship || 'Parent'),
      preferredMedium: sanitizeInput(preferredMedium || 'English'),
      source: sanitizeInput(source || 'Website Enquiry Form')
    });

    return NextResponse.json({
      success: true,
      message: 'Admission enquiry submitted successfully! Our counseling team will contact you shortly.',
      enquiryId: saved.id
    });
  } catch (error: any) {
    console.error('Admission API Error:', error);
    return NextResponse.json({ error: 'Server error processing enquiry.' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized access.' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const campus = searchParams.get('campus') || 'all';
    const status = searchParams.get('status') || 'all';
    const search = searchParams.get('search') || '';
    const format = searchParams.get('format');

    const enquiries = db.getEnquiries({ campus, status, search });

    // Handle CSV export
    if (format === 'csv') {
      const headers = ['ID', 'Date', 'Student Name', 'Parent Name', 'Phone', 'Email', 'Campus', 'Program', 'Hostel', 'Transport', 'Status', 'Notes'];
      const rows = enquiries.map(e => [
        `"${e.id}"`,
        `"${new Date(e.createdAt).toLocaleDateString('en-IN')}"`,
        `"${e.studentName.replace(/"/g, '""')}"`,
        `"${e.parentName.replace(/"/g, '""')}"`,
        `"${e.phone}"`,
        `"${(e.email || '').replace(/"/g, '""')}"`,
        `"${e.campus.replace(/"/g, '""')}"`,
        `"${e.program.replace(/"/g, '""')}"`,
        `"${e.hostelRequired ? 'Yes' : 'No'}"`,
        `"${e.transportRequired ? 'Yes' : 'No'}"`,
        `"${e.status}"`,
        `"${(e.notes || '').replace(/"/g, '""')}"`
      ]);

      const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
      return new NextResponse(csvContent, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="achievers_enquiries_${new Date().toISOString().split('T')[0]}.csv"`
        }
      });
    }

    return NextResponse.json({
      success: true,
      count: enquiries.length,
      enquiries
    });
  } catch (error: any) {
    console.error('Admission GET Error:', error);
    return NextResponse.json({ error: 'Error fetching enquiries.' }, { status: 500 });
  }
}

