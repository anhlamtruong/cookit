import getCurrentUser from "@/actions/getCurrentUser";
import prismaMySQL from "@/lib/service/prisma_mysql";
import { NextResponse } from "next/server";
import { UserRole } from "@/generated/@prisma-client-authenticate";
import { currentRole } from "@/authentication/lib/auth";

export async function GET() {
  try {
    const role = await currentRole();

    if (role === UserRole.ADMIN) {
      return new NextResponse(null, { status: 200 });
    }

    return new NextResponse(null, { status: 403 });
  } catch (error) {
    console.log(error, "ADMIN ERROR");
    return new NextResponse("API ERROR", {
      status: 500,
      statusText: "Internal Server Error",
    } as ResponseInit);
  }
}
