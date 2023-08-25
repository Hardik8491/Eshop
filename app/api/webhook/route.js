import { Buffer } from "micro";
import * as admin from "firebase-admin";
import { buffer } from "stream/consumers";
import { error } from "console";
const serviceAccount = require("../../../permissions.json");
const app = !admin.app.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;
const fulfillOrder = async (session) => {
  console.log("web hook working");
  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("order")
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`SUCCESS: Order ${session.id} had been added to the  DB`);
    });
};
export default async (req, res) => {
  if (req.method === "POST") {

    let sig = req.headers["stripe-signature"];

    let event;
    // const requestBuffer = await buffer(req);

    //  const payload = req.rawBody;
    // const sig = req.headers["stripe-signature"];

    // const event = await stripe.webhooks.constructEvent(
    //   req.rawBody.toString(),
    //   sig,
    //   endpointSecret
    // );

    try {
      event =  stripe.webhooks.constructEvent(
        req.rawBody.toString(),
        sig,
        endpointSecret);
        let paymentIntent = null;
    switch (event.type) {
      case "payment_intent.created":
        paymentIntent = event.data.object;
        functions.logger.log("Payment Intent Created", paymentIntent.id);
        break;
      case "payment_intent.succeeded":
        paymentIntent = event.data.object;
        functions.logger.log("Payment Intent Succeeded", paymentIntent.id);
        break;
      case "payment_intent.canceled":
        paymentIntent = event.data.object;
        functions.logger.log("Payment Intent Cancelled", paymentIntent.id);
        break;
      default:
        functions.logger.log("Unhandled event type", event.type);
        break;
    }
      

      // 
    } catch (error) {
      console.log("ERROR", err.message);
      return res.status(400).send(`Webhook error: ${err.message}`);
    }
    //handle checkout
    if (event.type === "checkout.session.completed") {
      const session = event.date.object;
      //Fulfill the order
      return fulfillOrder(session)
        .then(() => res.status(200))
        .catch((err) => res.status(400).send(`Webhook Error: ${err.message}`));
    }
  }
};
export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
