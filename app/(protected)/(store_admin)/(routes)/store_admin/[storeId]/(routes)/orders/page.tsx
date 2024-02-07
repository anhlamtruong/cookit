import prismaMySQL from "@/lib/service/prisma_mysql";
import { format } from "date-fns";
import { formatter } from "@/lib/utils";
import { OrderColumn } from "./_components/columns";
import { OrderClient } from "./_components/orders_client";
const OrdersPage = async ({ params }: { params: { storeId: string } }) => {
  const orders = await prismaMySQL.order.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      orderItems: {
        include: {
          menu: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedOrders: OrderColumn[] = orders.map((item) => ({
    id: item.id,
    phone: item.phone,
    address: item.address,
    menus: item.orderItems.map((orderItem) => orderItem.menu.name).join(", "),
    totalPrice: formatter.format(
      item.orderItems.reduce((total, item) => {
        return total + Number(item.menu.price);
      }, 0)
    ),
    isPaid: item.isPaid,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <OrderClient data={formattedOrders}></OrderClient>
      </div>
    </div>
  );
};

export default OrdersPage;
