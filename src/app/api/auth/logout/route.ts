import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ message: 'Logout realizado com sucesso' });

  // Apaga o cookie do token
  response.cookies.set({
    name: 'token',
    value: '',
    path: '/',
    maxAge: 0, // expira imediatamente
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
  });

  return response;
}
