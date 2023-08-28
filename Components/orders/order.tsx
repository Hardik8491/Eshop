import { useSession } from "next-auth/react";
import getSession from "@/app/actions/getSession";
import OrderItem from "./OrderItem";
import moment from "moment";
import db from "@/firebase";

export default async function Order(items: any) {
  const session: any = await getSession();

  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  const stripeOrders = await db
    .collection("users")
    .doc(session.user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  const orders = await Promise.all(
    stripeOrders.docs.map(async (order: any) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().image,
      timestamp: moment(order.data().timestamp.toDate()).unix(),

      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
        // cs_xxxx
    }))
  );

  return (
    <div className="bg-gray-100 text-gray-800">
      <main className="max-w-screen-lg mx-auto p-10 ">
        <h1 className="text-3xl border-b mb-2 pb-1 border-blue-500 ">
          Your Orders
        </h1>
        {session ? (
          <h2> {orders.length} Orders</h2>
        ) : (
          <h2>Please Sign in to she your order</h2>
        )}
        <div className="mt-5 space-y-4">
          {orders?.map(
            ({
              id,
              amount,
              amountShipping,
              items,
              timestamp,
              images,
            }: {
              id: string;
              amount: string;
              amountShipping: string;
              items: string;
              timestamp: number;
              images: string;
            }) => (
              <OrderItem
                key={id}
                id={id}
                amount={amount}
                amountShipping={amountShipping}
                items={items}
                timestamp={timestamp}
                images={images}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
}
