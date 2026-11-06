import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import crypto from 'crypto';

const JWT_SECRET = process.env.JWT_SECRET || 'achievers-super-secure-token-2025-edu-group';
const TOKEN_NAME = 'achievers_admin_session';

export interface AdminPayload {
  username: string;
  role: 'admin';
  name: string;
}

export function hashPassword(plain: string): string {
  return crypto.createHash('sha256').update(plain).digest('hex');
}

export function signAdminToken(payload: AdminPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyAdminToken(token: string): AdminPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as AdminPayload;
  } catch {
    return null;
  }
}

export async function getCurrentAdmin(): Promise<AdminPayload | null> {
  const cookieStore = cookies();
  const token = cookieStore.get(TOKEN_NAME)?.value;
  if (!token) return null;
  return verifyAdminToken(token);
}

export { TOKEN_NAME };

