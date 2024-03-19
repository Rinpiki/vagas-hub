"use client";

import React from "react";
import Image from "next/image";

export default function Cards() {
  const sites = [
    {
      name: "Indeed",
      link: "https://www.indeed.com/",
      image: "/thumb/indeed.png",
      status: true,
    },
    {
      name: "ProgramaThor",
      link: "https://www.programathor.com.br/",
      image: "/thumb/pgthor.png",
      status: true,
    },
    {
      name: "Solid Jobs",
      link: "https://www.solidjobs.com/",
      image: "/thumb/solids.png",
      status: true,
    },
    {
      name: "NetVagas",
      link: "https://www.netvagas.com.br/",
      image: "/thumb/netvagas.png",
      status: true,
    },
    {
      name: "GeekHunter",
      link: "https://www.geekhunter.com.br/",
      image: "/thumb/geekhunter.png",
      status: true,
    },
    {
      name: "Catho",
      link: "https://www.catho.com.br/",
      image: "/thumb/catho.png",
      status: true,
    },
    {
      name: "Gupy",
      link: "https://www.gupy.io/",
      image: "/thumb/gupy.png",
      status: true,
    },
    {
      name: "Glassdoor",
      link: "https://www.glassdoor.com/",
      image: "/thumb/glassdoor.png",
      status: true,
    },
    {
      name: "Bebee",
      link: "https://www.bebee.com/",
      image: "/thumb/bebee.png",
      status: true,
    },
    {
      name: "InfoJobs",
      link: "https://www.infojobs.com.br/",
      image: "/thumb/infojobs.png",
      status: true,
    },
    {
      name: "bne",
      link: "https://www.bne.com.br/",
      image: "/thumb/bne.png",
      status: true,
    },
    {
      name: "Trabalha Brasil",
      link: "https://www.trabalhabrasil.com.br/",
      image: "/thumb/tb.png",
      status: true,
    },
  ];

  const moster = () => {
    alert("A função foi chamada!");
  };

  return (
    <>
      {sites.map((item) => (
        <div
          key={item.name}
          className="flex sm:h-28 border-white border rounded-md cursor-pointer p-2 hover:animate-accordion-up
          "
        >
          <div className="sm:hidden">
            <Image src={item.image} width={70} height={70} alt="img thumb" />
          </div>
          <div className="hidden sm:flex">
            <Image src={item.image} width={100} height={100} alt="img thumb" />
          </div>

          <div className="p-2">
            <div className="text-white ">
              <div className="flex items-center justify-start gap-2">
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <span>Status</span>
              </div>
              <p>{item.name}teste</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
