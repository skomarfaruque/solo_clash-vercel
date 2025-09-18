"use client";

import { useState } from "react";
import Image from "next/image";

export default function FaqPageFaq() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqData = [
    {
      question: "How do I get started with the platform?",
      answer:
        "Getting started is easy! Simply sign up for an account, complete your profile, and you'll have access to all our features including daily spins, tournaments, and trading tools.",
    },
    {
      question: "What are Clash Coins and how do I earn them?",
      answer:
        "Clash Coins are our platform currency that you can earn through daily spins, completing challenges, and participating in tournaments. Use them to enter premium tournaments or exchange for rewards.",
    },
    {
      question: "How often can I spin the wheel?",
      answer:
        "You get one free spin every 24 hours! Premium members get additional spins and better reward chances. Check your account dashboard to see when your next spin is available.",
    },
    {
      question: "What kind of rewards can I win?",
      answer:
        "You can win Clash Coins, free tournament entries, discount codes, exclusive access to events, and even funded trading accounts. Rewards vary based on your membership level.",
    },
    {
      question: "How do I contact support?",
      answer:
        "Our support team is available 24/7 through the in-app chat, email at support@platform.com, or through our community Discord server. We typically respond within 2-4 hours.",
    },
    {
      question: "Is my account information secure?",
      answer:
        "Absolutely! We use industry-standard encryption and security measures to protect your data. All transactions are secured and we never store sensitive payment information on our servers.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };
  return (
    <section
      className="justify-center text-center px-6 lg:px-20 py-20 flex items-center"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="flex flex-col justify-center items-center gap-6 w-[1009px]">
        {/* FAQ Accordion */}
        <div className="w-full">
          {faqData.map((faq, index) => (
            <div key={`faq-${index}-${faq.question.slice(0, 20)}`}>
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-0 py-4 text-left flex justify-between items-center cursor-pointer"
              >
                <h3 className="font-semibold text-lg text-white">
                  {faq.question}
                </h3>
                <Image
                  src={
                    openItem === index
                      ? "/up_filled_icon.png"
                      : "/down_filled_icon.png"
                  }
                  alt={openItem === index ? "Collapse" : "Expand"}
                  width={20}
                  height={20}
                  className="transition-all duration-200"
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItem === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-4 pt-0">
                  <p
                    className="text-gray-300 text-left"
                    style={{ fontSize: "16px", lineHeight: "150%" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
              {index < faqData.length - 1 && (
                <div
                  className="w-full h-px my-0"
                  style={{ border: "1px solid #181819" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
