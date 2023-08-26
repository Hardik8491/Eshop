import getSession from "@/app/actions/getSession";
import { useSession } from "next-auth/react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import React from "react";
import { AiOutlineZoomOut } from "react-icons/ai";
import moment from "moment";

import { timeStamp } from "console";
import { database } from "../../firebase.js";

import OrderItem from "./OrderItem";

export default async function OrderCard() {
  const session:any = await getSession();

  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  // const stripeOrder = await database
  //   .collection("users")
  //   .doc(session.user.email)
  //   .collection("order")
  //   .orderBy("timestamp", "desc")
  //   .get();
  // console.log(stripeOrder.docs);

  // const order = await Promise.all(
  //   stripeOrder.docs.map(async (order: any) => ({
  //     id: order.id,
  //     amount: order.data.amount,
  //     amountShipping: order.date().amountShipping,
  //     images: order.date().images,
  //     timestamp: moment(order.date().timestamp.toData()).unix(),
  //     items: (
  //       await stripe.checkout.session.listLineItems(order.id, {
  //         limit: 100,
  //       })
  //     ).date,
  //   }))

  // );

  
  return (
    <div>
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-blue-400">
          Your Orders
        </h1>
        {session ? (
          <h2>x Order</h2>
        ) : (
          <h2> Please sign in to see your orders</h2>
        )}

        {/* <div className="mt-5 space-y-4">
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
         </div> */}
      </main>
    </div>
  );
}

// export async function GetServerSideProps(context: any) {
//   return {
//     props: {
//       order,
//     },
//   };
// }
