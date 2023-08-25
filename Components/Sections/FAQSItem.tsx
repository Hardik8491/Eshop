import React from 'react';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    return (
        <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-lg font-semibold mb-2">{question}</h3>
            <p className="text-gray-700">{answer}</p>
        </div>
    );
};

export default FAQItem;
