import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const SECRET = process.env.JWT_SECRET || "segredo";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email_usuario, senha_usuario } = body;

    if (!email_usuario || !senha_usuario) {
      return NextResponse.json({ error: "Campos obrigatórios" }, { status: 400 });
    }

    const usuario = await prisma.usuarios.findUnique({
      where: { email_usuario },
    });

    if (!usuario) {
      return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 });
    }

    const senhaCorreta = await bcrypt.compare(senha_usuario, usuario.senha_usuario);
    if (!senhaCorreta) {
      return NextResponse.json({ error: "Senha incorreta" }, { status: 401 });
    }

    const token = jwt.sign(
      { id: usuario.id_usuario, email: usuario.email_usuario },
      SECRET,
      { expiresIn: "7d" }
    );

    // Criar resposta JSON
    const response = NextResponse.json({
      message: "Login bem-sucedido",
      usuario: {
        id_usuario: usuario.id_usuario,
        nome_usuario: usuario.nome_usuario,
        email_usuario: usuario.email_usuario,
      },
    });

    // Adicionar cookie ao response
    response.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,        // impede acesso via JS
      path: "/",             // cookie disponível em todo site
      maxAge: 60 * 60 * 24 * 7, // 7 dias
      sameSite: "strict",    // segurança
      secure: process.env.NODE_ENV === "production", // só HTTPS em produção
    });

    return response;
  } catch (err) {
    console.error("Erro no login:", err);
    return NextResponse.json({ error: "Erro no servidor" }, { status: 500 });
  }
}
