// pages/api/webhooks.ts
import { NextApiRequest, NextApiResponse } from "next";
import { Stripe } from "stripe";
import { headers } from "next/headers";
import { buffer } from "micro";
import getRawBody from "raw-body";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

const fulfillOrder = async (session:any)=>{
  console.log(session);

}

export async function POST(request: any) {
  const signature = headers().get("Stripe-Signature") ?? "";
   const body= await request.json();
  // const buf = await buffer(request);
  const payload = JSON.stringify(body);
console.log(payload)

  const STRIPE_SIGNING_SECRET =
    "whsec_00eff49e647740b929bca4751d8712ad08d6285bf6f123b24c48e0fd6c2cca66";
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      request,
      signature,
      STRIPE_SIGNING_SECRET
    );
  } catch (err: any) {
    return new NextResponse(err, { status: 500 });
  }
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
  }
}
