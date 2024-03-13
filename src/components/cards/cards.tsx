import React from "react";
import Image from "next/image";

export default function Cards() {
  return (
    <div className="flex flex-grow  sm:h-28 border-white border rounded-md cursor-pointer p-2 sm:max-w-[300px]">
      <div className="sm:hidden">
        <Image src="/thumb/indeed.png" width={70} height={70} alt="__" />
      </div>
      <div className="hidden sm:flex">
        <Image src="/thumb/indeed.png" width={100} height={100} alt="__" />
      </div>

      <div className="p-2">
        <div className="text-white ">
          <div className="flex items-center justify-start gap-2">
            <div className="w-4 h-4 bg-white rounded-full"></div>
            <span>Status</span>
          </div>
          <p>Trabalha Brasil</p>
        </div>
      </div>
    </div>
  );
}
