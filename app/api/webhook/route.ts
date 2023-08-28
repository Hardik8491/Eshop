import { Stripe } from "stripe";
import { headers } from "next/headers";
import * as admin from "firebase-admin";

import { buffer } from "micro";

import { NextRequest, NextResponse } from "next/server";
import { request } from "http";
//Secure a connection firebase from backend app
// admin.initializeApp();
const serviceAccount = require("../../../permissions.json");


const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

// Establish connection to Stripe

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

const fulfillOrder = async (session: any) => {
  console.log(session);
  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      // console.log()
      console.log(
        `Success: ORder ${session.id} has been added to the DATABASE`
      );
    });
};

export async function POST(request: any, response: any) {
  // if(request===POST){

  const signature = headers().get("Stripe-Signature") ?? "";

  const body = await request.text();

  // const stripePayload = (request as any).rawBody || request.body;

  const STRIPE_SIGNING_SECRET = process.env.STRIPE_SIGNING_SECRET!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      STRIPE_SIGNING_SECRET
    );

    // return NextResponse.json({ message: "This Worked", success: true });
  } catch (err: any) {
    return new NextResponse(err, { status: 500 }), console.log(err);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    return fulfillOrder(session)
      .then(() => { NextResponse.json({  status:201, message: "This Worked", success: true });})
      .catch ((err)=> {
        return new NextResponse(err, { status: 500 }), console.log(err);
      })
      
  }
}
