import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getCurrentAdmin } from '@/lib/auth';

export async function GET() {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  }
  return NextResponse.json({ items: db.getKB() });
}

export async function POST(req: NextRequest) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
    }

    const body = await req.json();
    const { category, question, keywords, answerEn, answerHi } = body;

    if (!question || !answerEn) {
      return NextResponse.json({ error: 'Question and English answer required.' }, { status: 400 });
    }

    const saved = db.addKBItem({
      category: category || 'General',
      question,
      keywords: Array.isArray(keywords) ? keywords : (keywords || '').split(',').map((k: string) => k.trim()),
      answerEn,
      answerHi: answerHi || answerEn
    });

    return NextResponse.json({ success: true, item: saved });
  } catch (e: any) {
    return NextResponse.json({ error: 'Failed to add KB item.' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID required.' }, { status: 400 });

    const deleted = db.deleteKBItem(id);
    return NextResponse.json({ success: deleted });
  } catch (e: any) {
    return NextResponse.json({ error: 'Failed to delete.' }, { status: 500 });
  }
}

