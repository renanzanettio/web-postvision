import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { nome_usuario, email_usuario, senha_usuario } = await req.json();

    if (!email_usuario || !senha_usuario) {
      return NextResponse.json({ error: "Campos obrigatórios!" }, { status: 400 });
    }

    const usuarioExistente = await prisma.usuarios.findUnique({
      where: { email_usuario },
    });

    if (usuarioExistente) {
      return NextResponse.json({ error: "E-mail já cadastrado!" }, { status: 400 });
    }

    const senhaHash = await bcrypt.hash(senha_usuario, 10);

    const novoUsuario = await prisma.usuarios.create({
      data: { nome_usuario, email_usuario, senha_usuario: senhaHash },
    });

    return NextResponse.json({ message: "Usuário criado com sucesso!", usuario: novoUsuario });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erro no servidor" }, { status: 500 });
  }
}
