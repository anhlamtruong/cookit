import type { NextApiRequest, NextApiResponse } from "next";
import prismaMySQL from "@/lib/service/prisma_mysql";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { storeId } = req.query;
    console.log(storeId);
    const store = await prismaMySQL.store.findUnique({
      where: { id: storeId as string },
    });

    if (store) {
      res.json(store);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
