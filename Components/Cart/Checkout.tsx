
"use client";
import CheckOutProduct from "@/Components/Cart/CheckOutProduct";
import { selectItems, selectTotal } from "@/basketSlice";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useSession } from "next-auth/react";
import React, { Key } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import getSession from "@/app/actions/getSession";



const stripe_public_key="pk_test_51NNGilSCNlaf5syuzpbpoARvtBksPFMjwH26GI9QJlxi9aQ3R1utYbv9k71PVGejyoOOtFLyoRAHmpsfGeMR6SBG00I39wVQyY"
const stripePromise = loadStripe('pk_test_51NNGilSCNlaf5syuzpbpoARvtBksPFMjwH26GI9QJlxi9aQ3R1utYbv9k71PVGejyoOOtFLyoRAHmpsfGeMR6SBG00I39wVQyY');

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();

const createCheckoutSession = async () => {
  const stripe = await stripePromise;
  const checkoutSession= await axios.post('/api/payment',
  {
    items:items,
    email:session?.user?.email
  }
  );

  const result =await stripe?.redirectToCheckout({
    sessionId:checkoutSession.data.id,
  });
  if(result?.error) alert(result.error.message);
};






  return (
    <div className="bg-gray-100 text-gray-800  ">
     <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            alt="ads"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your EShop Basket is empty."
                : "Shopping Basket"}
            </h1>
            {items.map((item: any, i: Key) => (
              <CheckOutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                description={item.description}
                category={item.category}
                image={item.image}
                hashPlus={item.hashPlus}
              />
            ))}
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          <div className="">
            {items.length > 0 && (
              <>
                <h2 className="whitespace-nowrap">
                  Subtotal ({items.length} items):{" "}
                  <span className="font-bold">{total}</span>
                </h2>
                <button
                  role="link"
                  disabled={!session}
                  onClick={createCheckoutSession}
                  className={`button mt-20 ${
                    !session &&
                    "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                  }`}>
                  {!session ? "Sign in to Checkout" : "process to checkout"}
                </button>

                
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Checkout;
