import React from "react";
import Image from "next/image";
import Cards from "./cards";

export default function ContainerCards() {
  return (
    <div className="flex flex-col w-full max-w-[950px]">
      <div className="text-white mb-5">Lista de sites disponíveis</div>
      <div className="flex justify-start gap-x-4 gap-y-8  flex-wrap">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}
