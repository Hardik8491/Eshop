// pages/api/webhooks.ts
// import { NextApiRequest, NextApiResponse } from "next";
import { Stripe } from "stripe";
import { headers } from "next/headers";


// import getRawBody from 'raw-body'
import { buffer } from "micro";

import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

const fulfillOrder = async (session: any) => {
  console.log(session);
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

export async function POST(request: any) {
  const signature = headers().get("Stripe-Signature") ?? "";
  // const rawBody= await getRawBody(request);
  const body = await request.text();
  

  // const stripePayload = (request as any).rawBody || request.body;

  

  const STRIPE_SIGNING_SECRET =
    "whsec_00eff49e647740b929bca4751d8712ad08d6285bf6f123b24c48e0fd6c2cca66";
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      STRIPE_SIGNING_SECRET
    );
    console.log(event);
    return NextResponse.json({ message: "This Worked",success:true });
  } catch (err: any) {
    // return new NextResponse(err, { status: 500 });
    return NextResponse.json({ message: "This not working", success: false });
  }
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    console.log("session",session)
  }
}
// export const config={
//   api:{
//     bodyParser:false,
//     externalResolver:true
//   },
// }

// import { NextApiRequest, NextApiResponse } from 'next';
// import { NextRequest, NextResponse } from 'next/server';
// import { Stripe } from 'stripe';

// const stripe = new Stripe(process.env.STRIPE_SIGNING_SECRET!, {
//   apiVersion: "2022-11-15",
// });

// export  async function POST(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const rawBody = await buffer(req);

//     const sig = req.headers['stripe-signature'] as string;
//     const event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_SECRET_KEY!);

//     // Handle the event here...

//   } catch (error) {
//     console.error(error);

//   }
// }

// // Buffer the raw request body
// const buffer = async (req: NextApiRequest) => {
//   const chunks = [];
//   for await (const chunk of req) {
//     chunks.push(chunk);
//   }
//   return Buffer.concat(chunks);
// };
