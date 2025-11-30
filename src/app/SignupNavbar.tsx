"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

import Image from "next/image";
import Link from "next/link";
import LanguageSelector from "../components/LanguageSelector";

export default function SignupNavbar() {
  const [selectedLang, setSelectedLang] = useState("en");
  const [step1Valid, setStep1Valid] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const searchParams = useSearchParams();
  const t = useTranslations("signupNavbar");

  // Listen for validation status from localStorage
  useEffect(() => {
    const checkValidation = () => {
      const step1Status = localStorage.getItem("step1Valid");
      const regComplete = localStorage.getItem("registrationComplete");
      setStep1Valid(step1Status === "true");
      setRegistrationComplete(regComplete === "true");
    };

    checkValidation();
    // Check every 500ms for updates
    const interval = setInterval(checkValidation, 500);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { id: 1, label: t("welcome") },
    { id: 2, label: t("info") },
    { id: 3, label: t("verification") },
  ];

  const isStepAccessible = (stepId: number) => {
    // If registration is complete, only Step 3 is accessible
    if (registrationComplete) {
      return stepId === 3;
    }
    // Otherwise, normal flow
    if (stepId === 1) return true;
    if (stepId === 2) return step1Valid;
    if (stepId === 3) return false; // Step 3 only accessible after registration
    return false;
  };

  return (
    <nav className="flex items-center justify-between bg-transparent text-white absolute left-1/2 transform -translate-x-1/2 max-w-screen-xl w-full h-[52px]">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.svg" alt="SOLO CLASH" width={65} height={52} />
      </Link>

      <div className="flex items-center space-x-2">
        {steps.map((step, idx) => {
          const active =
            searchParams.get("step") === String(step.id) ||
            (!searchParams.get("step") && step.id === 1);
          const accessible = isStepAccessible(step.id);

          return (
            <div key={step.id} className="flex items-center">
              {accessible ? (
                <Link
                  href={`/signup?step=${step.id}`}
                  className={`px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors duration-200 ${
                    active
                      ? "text-black"
                      : "text-neutral-300 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.06)] backdrop-blur-[11.2993px] hover:text-black hover:bg-[linear-gradient(94.79deg,#F37E2C_0.24%,#FFA362_100.24%)] hover:border-[rgba(225,225,225,0.3)]"
                  }`}
                  style={
                    active
                      ? {
                          background:
                            "linear-gradient(94.79deg, #F37E2C 0.24%, #FFA362 100.24%)",
                          border: "1px solid rgba(225, 225, 225, 0.3)",
                        }
                      : undefined
                  }
                >
                  {step.id}. {step.label}
                </Link>
              ) : (
                <button
                  disabled
                  className="px-5 py-2 rounded-full text-sm font-medium cursor-not-allowed opacity-40 text-neutral-500 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.03)] backdrop-blur-[11.2993px]"
                >
                  {step.id}. {step.label}
                </button>
              )}
              {idx < steps.length - 1 && (
                <div className={`mx-2 ${isStepAccessible(steps[idx + 1].id) ? "text-white" : "text-neutral-500 opacity-40"}`}>{">"}</div>
              )}
            </div>
          );
        })}
      </div>

      {/* Language Selector */}
      <LanguageSelector
        selectedLang={selectedLang}
        onLanguageChange={(lang) => {
          document.cookie = `locale=${lang}; path=/; max-age=31536000`;
          setSelectedLang(lang);
          window.location.reload();
        }}
      />
    </nav>
  );
}
