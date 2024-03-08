import Image from "next/image";
import Link from "next/link";

export const Card = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 mb-12 items-center gap-10 max-h-80 overflow-hidden ">
      <div className="h-full relative hidden lg:block">
        <Image src="/p2.webp" alt="" fill objectFit="cover" />
      </div>
      <div className="flex flex-col gap-2 h-full">
        <div>
          <span className="text-slate-400 font-medium">05.03.2024 - </span>
          <span className="uppercase text-amber-700 font-semibold">
            Notícias
          </span>
        </div>
        <h1 className="font-bold text-2xl font-mr">
          Mussum Ipsum, cacilds vidis litro abertis
        </h1>
        <p className=" font-mt font-light text-softTextColor ">
          Atirei o pau no gatis, per gatis num morreus. Leite de capivaris,
          leite de mula manquis sem cabeça. Tá deprimidis, eu conheço uma
          cachacis que pode alegrar sua vidis. Todo mundo vê os porris que eu
          tomo, mas ninguém vê os tombis que eu levo!
        </p>
        <Link
          href="/"
          className="text-amber-700 hover:opacity-95 hover:scale-95 duration-300 ease-in-out border-b-2 w-fit"
        >
          Leia mais
        </Link>
      </div>
    </div>
  );
};
