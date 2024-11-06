import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (request: Request) => {
  try {
    const data = await prisma.favorite.findMany();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch favorites" });
  }
};

export const POST = async (request: Request) => {
  const body = await request.json();
  const {
    movieName,
    poster,
    movieID,
    releaseDate,
    voteAverage,
    mediaType,
    userId,
  } = body;

  try {
    const data = await prisma.favorite.create({
      data: {
        movieName,
        poster,
        movieID,
        releaseDate,
        voteAverage: String(voteAverage),
        mediaType,
        userId,
      },
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create favorite" });
  }
};
