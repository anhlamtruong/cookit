import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { reenie_beanie } from "../font";

const font = Poppins({ subsets: ["latin"], weight: ["100"] });

interface FooterProps {
  label: string;
}

export const Footer = ({ label }: FooterProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-start justify-center h-full">
      <h1 className={(cn(" text-6xl font-semibold"), reenie_beanie.className)}>
        <span className={cn(" text-xs", font.className)}>Power by {"  "}</span>
        Sassy Authy
      </h1>
    </div>
  );
};