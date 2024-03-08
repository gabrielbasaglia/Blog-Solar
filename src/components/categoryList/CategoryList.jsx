import Image from "next/image";
import Link from "next/link";

export const CategoryList = () => {
  return (
    <div className="mt-10 w-full">
      <h1 className="font-bold text-2xl">Mais Populares</h1>

      <div className="flex flex-wrap gap-5 mt-6 w-full">
        <div className="flex justify-between gap-5 bg-cyan-200 w-40 h-14 flex-grow rounded-md hover:scale-110 duration-300 ease-in-out">
          <div className="w-1/2 xs:w-full flex items-center justify-start xs:justify-center mx-auto">
            <Link
              href="blog?cat=style"
              className="flex items-center gap-2 capitalize text-textblack font-semibold"
            >
              <Image
                src="/style.png"
                alt=""
                width={32}
                height={32}
                className="rounded-full w-8 h-8 mr-4 xs:mr-0"
              />
              Notícias
            </Link>
          </div>
        </div>

        <div className="flex justify-between gap-5 bg-purple-200 w-40 h-14 flex-grow rounded-md hover:scale-110 duration-300 ease-in-out">
          <div className="w-1/2 xs:w-full flex items-center justify-start xs:justify-center mx-auto">
            <Link
              href="blog?cat=style"
              className="flex items-center gap-2 capitalize text-textblack font-semibold"
            >
              <Image
                src="/style.png"
                alt=""
                width={32}
                height={32}
                className="rounded-full w-8 h-8 mr-4 xs:mr-0"
              />
              Tecnologias
            </Link>
          </div>
        </div>
        <div className="flex justify-between gap-5 bg-amber-100 w-40 h-14 flex-grow rounded-md hover:scale-110 duration-300 ease-in-out">
          <div className="w-1/2 xs:w-full flex items-center justify-start xs:justify-center mx-auto">
            <Link
              href="blog?cat=style"
              className="flex items-center gap-2 capitalize text-textblack font-semibold"
            >
              <Image
                src="/style.png"
                alt=""
                width={32}
                height={32}
                className="rounded-full w-8 h-8 mr-4 xs:mr-0"
              />
              Pesquisa
            </Link>
          </div>
        </div>
        <div className="flex justify-between gap-5 bg-red-100 w-40 h-14 flex-grow rounded-md hover:scale-110 duration-300 ease-in-out">
          <div className="w-1/2 xs:w-full flex items-center justify-start xs:justify-center mx-auto">
            <Link
              href="blog?cat=style"
              className="flex items-center gap-2 capitalize text-textblack font-semibold"
            >
              <Image
                src="/style.png"
                alt=""
                width={32}
                height={32}
                className="rounded-full w-8 h-8 mr-4 xs:mr-0"
              />
              Projetos
            </Link>
          </div>
        </div>
        <div className="flex justify-between gap-5 bg-orange-200 w-40 h-14 flex-grow rounded-md hover:scale-110 duration-300 ease-in-out">
          <div className="w-1/2 xs:w-full flex items-center justify-start xs:justify-center mx-auto">
            <Link
              href="blog?cat=style"
              className="flex items-center gap-2 capitalize text-textblack font-semibold"
            >
              <Image
                src="/style.png"
                alt=""
                width={32}
                height={32}
                className="rounded-full w-8 h-8 mr-4 xs:mr-0"
              />
              Economia
            </Link>
          </div>
        </div>
        <div className="flex justify-between gap-5 bg-green-200 w-40 h-14  flex-grow rounded-md hover:scale-110 duration-300 ease-in-out">
          <div className="w-1/2 xs:w-full flex items-center justify-start xs:justify-center mx-auto">
            <Link
              href="blog?cat=style"
              className="flex items-center gap-2 capitalize text-textblack font-semibold"
            >
              <Image
                src="/style.png"
                alt=""
                width={32}
                height={32}
                className="rounded-full w-8 h-8 mr-4 xs:mr-0"
              />
              Dicas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
