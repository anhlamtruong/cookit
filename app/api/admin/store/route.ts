import { currentUser } from "@/lib/auth";
import prismaMySQL from "@/lib/service/prisma_mysql";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const user = await currentUser();
    const body = await req.json();

    const { name } = body;
    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!name) {
      return new NextResponse("Name of the Store is required", { status: 400 });
    }
    // const duplicateStore = await prismaMySQL.store.findFirst({
    //   where: {
    //     name: name,
    //     userId: user.id,
    //   },
    // });
    // if (duplicateStore) {
    //   return new NextResponse(" Store Already Created ", {
    //     status: 406,
    //   });
    // }
    const store = await prismaMySQL.store.create({
      data: {
        name: name,
        userId: user.id,
      },
    });
    if (!store) {
      return new NextResponse("Could not create store", {
        status: 403,
      });
    }

    return NextResponse.json(store);
  } catch (error) {
    console.log("[STORES_POST]", error);
    return new NextResponse("API ERROR", {
      status: 500,
      statusText: "Internal Server Error",
    } as ResponseInit);
  }
}
export async function GET(request: Request) {
  try {
    const user = await currentUser();
    if (!user?.id) {
      return NextResponse.redirect(new URL("/sign-in"));
    }

    const store = await prismaMySQL.store.findFirst({
      where: { userId: user.id },
    });

    if (store) {
      return NextResponse.json(store);
    } else {
      return NextResponse.redirect(
        new URL("http://localhost:3000/store_admin")
      );
    }
  } catch (error) {
    console.log(error, "ADMIN ERROR");
    return new NextResponse("API ERROR", {
      status: 500,
      statusText: "Internal Server Error",
    } as ResponseInit);
  }
}
