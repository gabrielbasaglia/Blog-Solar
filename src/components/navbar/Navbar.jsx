import Image from "next/image";
import Link from "next/link";
import { AuthLinks } from "../authLinks/AuthLinks";
import { ThemeToggle } from "../themeToggle/ThemeToggle";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-24 ">
      <div className="flex gap-2 flex-1">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className="flex-1 text-center text-3xl font-bold ">Solar Eficaz</div>
      <div className="flex gap-5 flex-1 ">
        <ThemeToggle />
        <Link href="/">Início</Link>
        <Link href="/">Contato</Link>
        <Link href="/">Sobre</Link>
        <AuthLinks />
      </div>
    </div>
  );
};
