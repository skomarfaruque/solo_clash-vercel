// components/LanguageSupport.tsx
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
            className="px-4 py-2 border border-white/60 rounded-full text-white text-sm hover:bg-white hover:text-black transition"
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
}
