import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { signAdminToken, getCurrentAdmin, TOKEN_NAME, hashPassword } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password required.' }, { status: 400 });
    }

    const hashed = hashPassword(password);
    const isValid = db.verifyAdmin(username, password) || db.verifyAdmin(username, hashed);

    if (!isValid) {
      return NextResponse.json({ error: 'Invalid admin credentials.' }, { status: 401 });
    }

    const token = signAdminToken({
      username: username.toLowerCase(),
      role: 'admin',
      name: 'Academy Administrator'
    });

    const res = NextResponse.json({
      success: true,
      message: 'Login successful'
    });

    res.cookies.set(TOKEN_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60 // 7 days
    });

    return res;
  } catch (error: any) {
    console.error('Auth POST error:', error);
    return NextResponse.json({ error: 'Authentication failed.' }, { status: 500 });
  }
}

export async function GET() {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
  return NextResponse.json({ authenticated: true, user: admin });
}

export async function DELETE() {
  const res = NextResponse.json({ success: true, message: 'Logged out.' });
  res.cookies.delete(TOKEN_NAME);
  return res;
}

