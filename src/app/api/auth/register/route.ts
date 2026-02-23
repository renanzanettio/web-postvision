import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongoose";
import User from "@/lib/models/User";

export async function POST(req: Request) {
  try {
    await connectDB();

    const {
      firstName,
      lastName,
      email,
      password,
      gender,
      cpf,
      phone,
      birthDate,
    } = await req.json();

    const usuarioExistente = await User.findOne({ email });

    if (usuarioExistente) {
      return NextResponse.json({ error: "E-mail já cadastrado!" }, { status: 400 });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const novoUsuario = await User.create({
      firstName,
      lastName,
      email,
      password : hashPassword,
      gender,
      cpf,
      phone,
      birthDate: birthDate,
    });

    return NextResponse.json({
      message: "Usuário criado com sucesso!",
      usuario: {
        id_usuario: novoUsuario._id.toString(),
        nome_usuario: novoUsuario.firstName,
        sobrenome_usuario: novoUsuario.lastName,
        email_usuario: novoUsuario.email,
        data_nascimento_usuario: novoUsuario.birthDate,
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erro no servidor" }, { status: 500 });
  }
}