import prismaMySQL from "@/lib/service/prisma_mysql";
import prismaMongoDb from "@/lib/service/prisma_mongodb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/actions/getCurrentUser";
import { User } from "@prisma-client-mongo";
export async function GET(req: Request) {
  try {
    const user = await getCurrentUser();
    const { id: userId } = user as User;
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const stores = await prismaMySQL.store.findMany({
      where: {
        userId,
      },
    });

    return NextResponse.json(stores);
  } catch (error) {
    return new NextResponse("API ERROR", {
      status: 500,
      statusText: "Internal Server Error : GET STORES",
    } as ResponseInit);
  }
}
