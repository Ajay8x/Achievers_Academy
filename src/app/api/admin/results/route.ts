import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getCurrentAdmin } from '@/lib/auth';

export async function GET() {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const results = db.getResults();
  const testimonials = db.getTestimonials();

  return NextResponse.json({ results, testimonials });
}

export async function POST(req: NextRequest) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const type = body.type || 'result'; // 'result' | 'testimonial'

    if (type === 'result') {
      const { exam, studentName, score, rankOrPercentile, stream, campus, year, image } = body;
      if (!exam || !studentName || !score || !campus) {
        return NextResponse.json({ error: 'Exam, Student Name, Score and Campus are required' }, { status: 400 });
      }

      const item = db.addResult({
        exam,
        studentName,
        score,
        rankOrPercentile: rankOrPercentile || '',
        stream: stream || 'General',
        campus,
        year: year || '2024-25',
        image: image || '/images/static_result_student1.jpg'
      });

      return NextResponse.json({ success: true, item });
    } else {
      const { name, role, campus, quote, scoreOrYear, rating } = body;
      if (!name || !quote || !campus) {
        return NextResponse.json({ error: 'Name, Quote and Campus are required' }, { status: 400 });
      }

      const item = db.addTestimonial({
        name,
        role: role || 'Student / Alumni',
        campus,
        quote,
        scoreOrYear: scoreOrYear || 'Batch 2024',
        rating: rating || 5,
        featured: true
      });

      return NextResponse.json({ success: true, item });
    }
  } catch (err: any) {
    console.error('Error in results POST:', err);
    return NextResponse.json({ error: err.message || 'Failed to save' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  const type = searchParams.get('type') || 'result';

  if (!id) {
    return NextResponse.json({ error: 'ID required' }, { status: 400 });
  }

  let ok = false;
  if (type === 'result') {
    ok = db.deleteResult(id);
  } else {
    ok = db.deleteTestimonial(id);
  }

  if (ok) {
    return NextResponse.json({ success: true, message: 'Deleted' });
  }
  return NextResponse.json({ error: 'Item not found' }, { status: 404 });
}
