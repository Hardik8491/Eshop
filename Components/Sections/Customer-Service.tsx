// pages/customer-service.tsx
import React from 'react';

import FAQSection from './FAQSection';
import ContactForm from './ContactForm';

const CustomerServicePage: React.FC = () => {
  return (
    
      <main className="container mx-auto py-8 ">
        <h1 className="text-2xl font-bold mb-4">Customer Service</h1>
        <p className="text-gray-700 mb-4 font-semibold">
          We are here to assist you with any questions or concerns you may have.
        </p>

        <FAQSection />
        <ContactForm />
      </main>
    
  );
};

export default CustomerServicePage;
