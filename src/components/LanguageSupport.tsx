// components/LanguageSupport.tsx
import "./LanguageSupport.css";

export default function LanguageSupport() {
  const languages = [
    "English",
    "Arabic",
    "Turkish",
    "Portuguese",
    "French",
    "Spanish",
  ];

  return (
    <div className="flex flex-col items-center justify-center pt-10">
      {/* Title */}
      <div className="flex items-center space-x-2 mb-6">
        <span className="text-white text-lg">🌐</span>
        <h2 className="text-white text-xl font-semibold">
          Multi-Language Support
        </h2>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3">
        {languages.map((lang) => (
          <button
            key={lang}
            className="language-button px-4 py-2 text-sm hover:cursor-pointer transition"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: "62px",
              color: "#B7B7B7",
              background: "transparent",
            }}
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
}
