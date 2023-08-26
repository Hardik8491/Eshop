import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(
  "sk_test_51NNGilSCNlaf5syugoxtZReJSAEYU1JIHZhAbQA8dtQfwXGENlz1vZSj7jZoTzlyWC7aaANOmfpxc9SkNDSDxm0s003tghmVjJ"
);

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
   ;
    const { items, email } = body;
    const lineItems = items.map((item) => ({
      quantity: 1,
      price_data: {
          currency: "gbp",
          unit_amount: item.price * 100,
          product_data: {
              name: item.title,
              description: item.description, //description here
              images: [item.image],
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
      success_url: `http://localhost:3000/success`,
      cancel_url:`http://localhost:3000/failure`,
      metadata: {
        email,
        images: JSON.stringify(items.map((item) => item.image)),
      },
    });

   
    return NextResponse.json({ id: session.id }, { status: 201 });
  } catch (error) {
    console.log("ERROR_PAYMENT", error);
  
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
