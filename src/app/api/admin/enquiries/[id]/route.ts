import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getCurrentAdmin } from '@/lib/auth';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
    }

    const { id } = params;
    const body = await req.json();
    const updated = db.updateEnquiry(id, body);

    if (!updated) {
      return NextResponse.json({ error: 'Enquiry not found.' }, { status: 404 });
    }

    return NextResponse.json({ success: true, enquiry: updated });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to update enquiry.' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
    }

    const { id } = params;
    const deleted = db.deleteEnquiry(id);

    if (!deleted) {
      return NextResponse.json({ error: 'Enquiry not found.' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Enquiry deleted successfully.' });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to delete enquiry.' }, { status: 500 });
  }
}

