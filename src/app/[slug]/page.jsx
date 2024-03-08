import { Menu } from "@/src/components/menu/Menu";
import Image from "next/image";

export default function SinglePage() {
  return (
    <div className="">
      <div className="flex items-center gap-12">
        <div className="flex flex-1">
          <h1 className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </h1>
          <div className="">
            <div className=" flex flex-1 h-80 relative">
              <Image
                src="/p3.jpeg"
                alt=""
                fill
                objectFit="cover"
                className=""
              />
            </div>

            <div className="">
              <span className="">Gabriel Coutinho</span>
              <span className="">01.01.2024</span>
            </div>
          </div>
        </div>

        <div className="">
          <Image src="/p1.jpeg" alt="" fill className="" />
        </div>
      </div>
      <div className="">
        <div className="">
          <div className=""></div>
        </div>
        <Menu />
      </div>
    </div>
  );
}
