"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function FaqPageFaq() {
  const t = useTranslations("faqPageFaq");
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqData = [
    {
      question: t("faq1.question"),
      answer: t("faq1.answer"),
    },
    {
      question: t("faq2.question"),
      answer: t("faq2.answer"),
    },
    {
      question: t("faq3.question"),
      answer: t("faq3.answer"),
    },
    {
      question: t("faq4.question"),
      answer: t("faq4.answer"),
    },
    {
      question: t("faq5.question"),
      answer: t("faq5.answer"),
    },
    {
      question: t("faq6.question"),
      answer: t("faq6.answer"),
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
