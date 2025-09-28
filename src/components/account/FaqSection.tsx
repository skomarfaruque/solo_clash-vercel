"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Heading from "../common/Heading";

export default function FaqSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const t = useTranslations("accountPage.faqSection");
  const faqData = t.raw("faqs");

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };
  return (
    <section
      className="justify-center text-center px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-16 lg:py-20 flex items-center"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="flex flex-col justify-center items-center gap-6 w-full max-w-4xl mx-auto">
        {/* Heading */}
        <Heading>{t("heading")}</Heading>

        {/* Description */}
        <p
          className="font-normal text-base sm:text-lg leading-6 text-center mb-8 max-w-xl mx-auto"
          style={{ color: "#B7B7B7" }}
        >
          {t("description")}
        </p>

        {/* FAQ Accordion */}
        <div className="w-full">
          {Array.isArray(faqData) &&
            faqData.map((faq, index) => (
              <div key={`faq-${index}-${faq.question.slice(0, 20)}`}>
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-0 py-3 sm:py-4 text-left flex justify-between items-center cursor-pointer"
                >
                  <h3 className="font-semibold text-base sm:text-lg text-white">
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
                    <p className="text-gray-300 text-left text-sm sm:text-base leading-relaxed">
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
