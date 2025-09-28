import { ReactNode } from "react";

type HeadingProps = {
  readonly children: ReactNode;
  readonly className?: string;
};

export default function Heading({ children, className = "" }: HeadingProps) {
  return (
    <h2
      className={`font-playfair font-bold
  text-[32px] sm:text-[40px] md:text-[48px] lg:text-[55px]
  leading-[110%]
  text-center
  tracking-[0.005em]
  text-white ${className}`}
    >
      {children}
    </h2>
  );
}
