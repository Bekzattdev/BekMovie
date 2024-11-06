import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (request: Request) => {
  const body = await request.json();
  const { email, name } = body;
  try {
    const newUser = {
      email,
      name,
    };
    const data = await prisma.user.create({
      data: newUser,
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
};

export const GET = async () => {
  try {
    const data = await prisma.user.findMany();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
};
