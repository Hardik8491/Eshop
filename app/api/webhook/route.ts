import Stripe from "stripe";
import {buffer } from 'micro'
import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest } from "next";


const stripe = new Stripe("sk_test_51NNGilSCNlaf5syugoxtZReJSAEYU1JIHZhAbQA8dtQfwXGENlz1vZSj7jZoTzlyWC7aaANOmfpxc9SkNDSDxm0s003tghmVjJ", {
  apiVersion: "2022-11-15",
});

const webhookSecret = process.env.STRIPE_SIGNING_SECRET;

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export async function POST(req:any) {
  const buf =  await buffer(req);
  const payload = buf.toString();
  const sig = req.headers["stripe-signature"];
  let event;
  
  console.log(req, buf);

  // req=await req.json()
  // const buf = await buffer(req);



  try {
    event = stripe.webhooks.constructEvent(buf, sig,webhookSecret!);
  } catch (err: any) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    // return res
    //   .status(400)
    //   .send(`Webhook signature verification failed: ${err.message}`);
    return new NextResponse("WEBhook signature failsed", { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object;

      // Handle post-payment actions here
      break;

    // Add other event types to handle as needed

    default:
      console.warn(`Unhandled event type: ${event.type}`);
  }

  return new NextResponse("OK", { status: 200 });
}
