import Image from "next/image";
export default function BlackButton({
  text,
  iconPath,
  onClick,
}: {
  readonly text: string;
  readonly iconPath?: string;
  readonly onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center justify-center
        px-7 py-3.5 gap-2 w-full
        rounded-full text-white cursor-pointer
        border focus:outline-none transition-transform duration-200 hover:scale-105"
      style={{
        background: "rgba(255, 255, 255, 0.11)",
        border: "1px solid rgba(255, 255, 255, 0.06)",
        backdropFilter: "blur(11.2993px)",
      }}
    >
      {text}
      {iconPath && <Image src={iconPath} alt="Icon" width={16} height={16} />}
    </button>
  );
}
