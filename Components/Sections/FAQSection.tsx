import React from "react";
import FAQItem from "../ProductCatgory/FAQSItem";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "To place an order, simply browse our products, add items to your cart, and proceed to checkout.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit/debit cards and PayPal for payment.",
  },
  // Add more FAQ items as needed
];

const CustomerServicePage: React.FC = () => {
  return (
    <div className="bg-white font-sans">
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-xl font-bold mx-4">
            EShop
          </a>

          <nav>
            <ul className="flex space-x-4 mx-4 ">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:underline">
                  Products
                </a>
              </li>

              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:underline">
                  Customer Service
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Customer Service</h1>
        <p className="text-gray-700 mb-4">
          We are here to assist you with any questions or concerns you may have.
        </p>

        <section className="mb-8  text-gray-700">
          <h2 className="text-xl font-semibold mb-2">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            Fill out the form below to get in touch with our customer service
            team.
          </p>

          <form className="bg-gray-100  text-gray-700 p-4 rounded shadow">
            <label className="block mb-2" htmlFor="name">
              Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              className="w-full border rounded p-2 mb-4"
            />

            <label className="block mb-2" htmlFor="email">
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              className="w-full border rounded p-2 mb-4"
            />

            <label className="block mb-2" htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              className="w-full border rounded p-2 h-32 mb-4"
            />

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Submit
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-200 py-4 text-center  text-gray-700">
        <p>&copy; {new Date().getFullYear()} EShop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CustomerServicePage;
