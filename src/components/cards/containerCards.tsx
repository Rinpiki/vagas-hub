import React from "react";
import Cards from "./cards";

export default function ContainerCards() {
  return (
    <div className="flex flex-col w-full max-w-[950px]">
      <div className="text-white mb-5">Lista de sites disponíveis</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Cards />
      </div>
    </div>
  );
}
