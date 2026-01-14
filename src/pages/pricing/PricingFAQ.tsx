import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is MAU (Monthly Active Users)?",
    answer:
      "MAU stands for Monthly Active Users — the number of unique users who interact with your app each month. This includes users who send or receive messages, join channels, or use any PubNub features.",
  },
  {
    question: "How much does Platform Starter cost per MAU?",
    answer:
      "Platform Starter pricing is based on Monthly Active Users. You pay a flat monthly rate for the MAU tier you select, with no additional hidden fees.",
  },
  {
    question: "What are the Free plan limitations?",
    answer:
      "The Free plan includes limited MAU, data retention, and storage. It is ideal for testing, prototypes, and small projects.",
  },
  {
    question: "How much do messages cost?",
    answer:
      "Messages are included in your MAU pricing. There are no additional message-based fees.",
  },
  {
    question: "Are there any subscription fees for storing chats?",
    answer:
      "Chat storage is included based on your plan’s data retention limits. No extra subscription fees apply.",
  },
  {
    question: "Can I estimate costs for 100,000 MAU?",
    answer:
      "Yes. For high MAU usage, we recommend contacting sales to receive volume discounts and a custom pricing estimate.",
  },
  {
    question: "Do I need a credit card to start?",
    answer:
      "No credit card is required to start on the Free plan or to begin a trial.",
  },
  {
    question: "How do overages work?",
    answer:
      "If you exceed your plan’s MAU limits, overages are billed at a predictable rate. You can also upgrade plans to avoid overage charges.",
  },
];

const PricingFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Pricing Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-xl border transition ${
                  isOpen ? "bg-gray-50" : "bg-white"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <span className="text-xl text-gray-600">
                    {isOpen ? "⌃" : "⌄"}
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
