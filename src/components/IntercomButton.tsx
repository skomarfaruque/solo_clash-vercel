"use client";

export default function IntercomButton() {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.Intercom) {
      window.Intercom("show");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="intercom-launcher fixed bottom-6 right-6 z-40 bg-[#FB782D] hover:bg-[#E66B1F] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center cursor-pointer"
      title="Chat with us"
      aria-label="Open chat"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
      </svg>
    </button>
  );
}
