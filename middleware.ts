import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/Status', '/Profile', '/Settings'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  console.log("rodou aqui");

  const testesoma = 2;

  // Verifica se a rota é protegida
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    const token = request.cookies.get('token');
    // Se não estiver logado, redireciona para /login
    if (!token) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = '/Entrar';
      return NextResponse.redirect(loginUrl);
    }
  }

  // Permite acesso normalmente
  return NextResponse.next();
}

// Opcional: define quais rotas o middleware deve monitorar
export const config = {
  matcher: ['/Status', '/Profile', '/Settings'],
};