import Image from "next/image";
export default function WhiteButton({
  text,
  iconPath,
}: {
  text: string;
  iconPath: string;
}) {
  return (
    <button
      className="
 flex items-center justify-center
        px-7 py-3.5 gap-2
        bg-white border border-white/10
        rounded-full text-black
        cursor-pointer
  "
    >
      {text}
      <Image src={iconPath} alt="Icon" width={16} height={16} />
    </button>
  );
}
