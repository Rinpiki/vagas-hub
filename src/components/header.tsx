import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Header() {
  return (
    <header className="flex items-center mx-auto justify-between w-full bg-var-blue border-b-[1px] border-var-gray">
      <div className="flex items-center mx-auto px-7 py-4 justify-between w-full max-w-7xl">
        <div className="text-white">WorkHub</div>
        <div className="hidden md:block">
          <Image src="/icons/star.svg" width={26} height={26} alt="star" />
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href="https://github.com/Rinpiki/vagas-hub/tree/main"
                target="_blank"
              >
                <div>
                  <Image
                    src="/icons/github.png"
                    width={32}
                    height={32}
                    alt="github icon"
                  />
                </div>
              </Link>
            </TooltipTrigger>
            <TooltipContent className="border border-white">
              <p>Repositório do projeto</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </header>
  );
}
