import { NextResponse } from "next/server";
import prismaMySQL from "@/lib/service/prisma_mysql";
import getCurrentUser from "@/actions/getCurrentUser";
import prismaMongoDb from "@/lib/service/prisma_mongodb";
export async function GET(request: Request, context: any) {
  try {
    const { params } = context;
    if (!params) {
      return new NextResponse("API ERROR", {
        status: 400,
        statusText: "Can't get params from context",
      } as ResponseInit);
    }
    const storeId = params.storeId;

    const store = await prismaMySQL.store.findUnique({
      where: { id: storeId as string },
    });

    if (store) {
      return NextResponse.json(store);
    } else {
      return new NextResponse("API ERROR", {
        status: 402,
        statusText: "No store found",
      } as ResponseInit);
    }
  } catch (error) {
    console.error("[STORE_GET]", error);
    return new NextResponse("API ERROR", {
      status: 500,
      statusText: "Internal Server Error",
    } as ResponseInit);
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const user = await getCurrentUser();
    if (!user?.id) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }
    const userId = user.id;
    const body = await request.json();
    const { name } = body;
    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }
    if (!params.storeId) {
      return new NextResponse("Store id is required", { status: 400 });
    }
    const store = await prismaMySQL.store.updateMany({
      where: {
        id: params.storeId,
        userId,
      },
      data: {
        name,
      },
    });
    return NextResponse.json(store);
  } catch (error) {
    console.error("[STORE_PATCH]", error);
    return new NextResponse("API ERROR", {
      status: 500,
      statusText: "Internal Server Error",
    } as ResponseInit);
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const user = await getCurrentUser();
    if (!user?.id) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }
    const userId = user.id;

    if (!params.storeId) {
      return new NextResponse("Store id is required", { status: 400 });
    }
    const store = await prismaMySQL.store.deleteMany({
      where: {
        id: params.storeId,
        userId,
      },
    });
    const userMongo = await prismaMongoDb.user.findUnique({
      where: {
        email: user?.email as string,
        id: user?.id,
      },
    });

    if (userMongo && userMongo.storeIds.includes(params.storeId)) {
      const updatedStoreIds = userMongo.storeIds.filter(
        (id) => id !== params.storeId
      );
      await prismaMongoDb.user.update({
        where: { id: userMongo.id },
        data: {
          storeIds: updatedStoreIds,
        },
      });
    } else {
      return new NextResponse("Could not find user to assign store", {
        status: 402,
      });
    }

    return NextResponse.json(store);
  } catch (error) {
    console.error("[STORE_DELETE]", error);
    return new NextResponse("API ERROR", {
      status: 500,
      statusText: "Internal Server Error",
    } as ResponseInit);
  }
}
