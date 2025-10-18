import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

// Transformamos a SECRET em formato compatível com jose
const SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'segredo');

const protectedRoutes = ['/Status', '/Profile', '/Settings'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Verifica se a rota é protegida
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    const tokenCookie = request.cookies.get('token');
    const token = tokenCookie?.value;

    // Se não houver token, redireciona para /Entrar
    if (!token) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = '/Entrar';
      return NextResponse.redirect(loginUrl);
    }

    try {
      // Verifica se o token é válido usando jose
      await jwtVerify(token, SECRET);
    } catch (err) {
      console.log('Token inválido:', err);
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = '/Entrar';
      return NextResponse.redirect(loginUrl);
    }
  }

  // Permite acesso normalmente
  return NextResponse.next();
}

// Configura as rotas que o middleware vai monitorar
export const config = {
  matcher: ['/Status', '/Profile', '/Settings'],
};
