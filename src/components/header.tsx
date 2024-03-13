import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center mx-auto justify-between w-full bg-var-blue border-b-[1px] border-var-gray">
      <div className="flex items-center mx-auto p-4 justify-between w-full max-w-7xl">
        <div className="text-white">WorkHub</div>
        <div className="hidden md:block">
          <Image src="/icons/star.svg" width={26} height={26} alt="star" />
        </div>
        <div>
          <Image
            src="/icons/github.png"
            width={32}
            height={32}
            alt="github icon"
          />
        </div>
      </div>
    </header>
  );
}
