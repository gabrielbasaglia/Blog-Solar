import Image from "next/image";
import { Button } from "../ui/button";

export const Featured = () => {
  return (
    <div className="mt-6">
      <h1 className="text-4xl lg:text-5xl xl:text-7xl text-center font-medium">
        <b>Tudo</b> Sobre Energia Renovável
      </h1>
      <div className=" flex mt-10 lg:mt-14 items-center gap-12">
        <div className="hidden lg:flex relative flex-1 h-96 ">
          <Image
            src="/p1.jpg"
            alt="imagem de predios"
            fill
            className="object-cover "
          ></Image>
        </div>
        <div className="flex flex-col flex-1 gap-5">
          <h2 className="sm:text-4xl text-3xl">
            Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis,
            per gatis num morreus
          </h2>
          <p className="sm:text-xl text-lg font-light text-softTextColor ">
            Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed
            non consequat odio. Nec orci ornare consequat. Praesent lacinia
            ultrices consectetur. Sed non ipsum felis. Leite de capivaris, leite
            de mula manquis sem cabeça. Nulla id gravida magna, ut semper
            sapien.
          </p>
          <Button className="max-w-max">Leia Mais</Button>
        </div>
      </div>
    </div>
  );
};
