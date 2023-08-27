import { NextRequest, NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

var getRawBody = require("raw-body");
const endpointSecret =
  "whsec_00eff49e647740b929bca4751d8712ad08d6285bf6f123b24c48e0fd6c2cca66";

  

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(request:any) {
  try {
    const body = await request.json();
   ;
    const { items, email } = body;
    const lineItems = items.map((item:any) => ({
      quantity: 1,
      price_data: {
          currency: "gbp",
          unit_amount: item.price * 100,
          product_data: {
              name: item.title,
              description: item.description, //description here
              images: [item.image],
              metadata: { productId: item.product },
          },
      },
  }));
  

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items:lineItems,
     

      shipping_address_collection: {
        allowed_countries: ["GB", "US", "IN"],
      },

      

      mode: "payment",
      success_url: `${process.env.HOST}/success`,
      cancel_url:`${process.env.HOST}/failure`,
      metadata: {
        email,
        images: JSON.stringify(items.map((item:any) => item.image)),
      },
    });

   
    return NextResponse.json({ id: session.id }, { status: 201 });
  } catch (error) {
    console.log("ERROR_PAYMENT", error);
  
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
