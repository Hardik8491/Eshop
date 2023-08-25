// components/ContactForm.tsx
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section>
    <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
    <p className="text-gray-500 mb-4">Fill out the form below to get in touch with our customer service team.</p>
    <form className="bg-gray-100 text-gray-700 p-4 rounded shadow">
        <label className="block mb-2 " htmlFor="name">
            Name
        </label>
        <input
            type="text"
            id="name"
            name="name"
            className="w-full border rounded p-2 mb-4 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Your Name"
            required
        />

        <label className="block mb-2" htmlFor="email">
            Email
        </label>
        <input
            type="email"
            id="email"
            name="email"
            className="w-full border rounded p-2 mb-4 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Your Email"
            required
        />

        <label className="block mb-2" htmlFor="message">
            Message
        </label>
        <textarea
            id="message"
            name="message"
            className="w-full border rounded p-2 h-32 mb-4 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Your Message"
            required
        ></textarea>

        <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
        >
            Submit
        </button>
    </form>
</section>

  );
};

export default ContactForm;
