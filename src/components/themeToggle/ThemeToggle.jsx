"use client";
import { ThemeContext } from "@/src/context/ThemeContext";
import Image from "next/image";
import { useContext } from "react";

export const ThemeToggle = () => {
  const { theme } = useContext(ThemeContext);

  console.log(theme);
  return (
    <div className="relative w-10 h-5 border rounded-full flex bg-black items-center justify-between">
      <Image src="/moon.png" alt="moon" width={14} height={14} />
      <div className="absolute w-4 h-4 rounded-full bg-white "></div>
      <Image src="/sun.png" alt="sun" width={14} height={14} />
    </div>
  );
};
