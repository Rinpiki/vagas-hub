"use client";
import { MouseEvent } from "react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dataSites from "../data/data";

export default function Cards() {
  const [data, setData] = useState([]);
  interface Item {
    name: string;
    link: string;
    image: string;
    status: boolean;
  }

  useEffect(() => {
    const now = new Date().getTime();
    const expiredData = JSON.parse(localStorage.getItem("expiredData")!);
    // se tiver dados no localstorage, vai ser apagado
    if (expiredData) {
      if (now > expiredData) {
        //console.log("Limpeza do localStorage");
        localStorage.clear();
      }
    }
    //se existir ele ira ser setado no useState
    if (localStorage.getItem("sites")) {
      const sites = JSON.parse(localStorage.getItem("sites")!);
      setData(sites);
    } else {
      //caso nao exista, um novo dado sera setado no localstorage
      //console.log("um novo registro no localstorage foi criado");
      localStorage.setItem("sites", JSON.stringify(dataSites));
    }
  }, []);

  //ao clicar em um card essa funcao sera responsavel por gerir os estados dos cards
  const handleClick = (
    event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    // caso nao exista, um novo dado sera criado
    const expiredData = localStorage.getItem("expiredData");
    if (!expiredData) {
      const timeNow = new Date().getTime();
      const expireTime = timeNow + 24 * 60 * 60 * 1000;
      //console.log(timeNow);
      localStorage.setItem("expiredData", JSON.stringify(expireTime));
    }

    const clickedElementName = event.currentTarget.id;
    const sites = JSON.parse(localStorage.getItem("sites")!);
    const NewArrayOfSites = sites.map((objeto: Item) => {
      if (objeto.name === clickedElementName) {
        return { ...objeto, status: true };
      } else {
        return objeto;
      }
    });

    localStorage.setItem("sites", JSON.stringify(NewArrayOfSites));
    setData(NewArrayOfSites);
  };

  return (
    <>
      {data?.map((item: Item) => (
        <Link
          href={item.link}
          key={item.name}
          id={item.name}
          target="_blank"
          onClick={handleClick}
        >
          <div
            className={`flex sm:h-28  border  ${
              item.status ? "border-green-500" : "border-white"
            } rounded-md cursor-pointer p-2 hover:animate-accordion-up
            `}
          >
            <div className="sm:hidden">
              <Image
                src={`/${item.image}`}
                width={70}
                height={70}
                alt="img thumb"
              />
            </div>
            <div className="hidden sm:flex">
              <Image
                src={`/${item.image}`}
                width={100}
                height={100}
                alt="img thumb"
              />
            </div>

            <div className="p-2">
              <div className="text-white ">
                <div className="flex items-center justify-start gap-2">
                  <div
                    className={`w-4 h-4 ${
                      item.status ? "bg-green-500" : "bg-white"
                    } rounded-full`}
                  ></div>
                  <span>Status</span>
                </div>
                <p>{item.name}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
