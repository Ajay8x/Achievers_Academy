import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { signAdminToken, getCurrentAdmin, TOKEN_NAME, hashPassword } from '@/lib/auth';

// Brute-force protection: IP failed attempts store
const failedLoginAttempts = new Map<string, { count: number; lockedUntil: number }>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const now = Date.now();
    const attempts = failedLoginAttempts.get(ip);

    // Check if IP is currently locked out
    if (attempts && attempts.lockedUntil > now) {
      const waitMinutes = Math.ceil((attempts.lockedUntil - now) / 60000);
      return NextResponse.json(
        { error: `Too many failed login attempts. Account access is locked for ${waitMinutes} minute(s) for security.` },
        { status: 429 }
      );
    }

    const body = await req.json();
    const username = body.username || body.email;
    const password = body.password;

    if (!username || !password) {
      return NextResponse.json({ error: 'Username/Email and password required.' }, { status: 400 });
    }

    const hashed = hashPassword(password);
    const isValid = db.verifyAdmin(username, password) || db.verifyAdmin(username, hashed);

    if (!isValid) {
      const current = failedLoginAttempts.get(ip) || { count: 0, lockedUntil: 0 };
      current.count += 1;
      if (current.count >= 5) {
        // Lock out for 15 minutes after 5 consecutive failures
        current.lockedUntil = now + 15 * 60 * 1000;
        failedLoginAttempts.set(ip, current);
        return NextResponse.json(
          { error: 'Maximum login attempts exceeded. Account access is temporarily locked for 15 minutes.' },
          { status: 429 }
        );
      }
      failedLoginAttempts.set(ip, current);
      return NextResponse.json(
        { error: `Invalid admin credentials. (${5 - current.count} attempt(s) remaining)` },
        { status: 401 }
      );
    }

    // Reset failed attempts on successful authentication
    failedLoginAttempts.delete(ip);

    const token = signAdminToken({
      username: username.toLowerCase(),
      role: 'admin',
      name: 'Academy Administrator'
    });

    const res = NextResponse.json({
      success: true,
      token,
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

