"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-cards";
// import pic from "../common/_assets/product-pic.png"
import Link from "next/link";

export function ThreeDCardDemo({pic,title,link}:{pic:StaticImageData,title:string,link:string}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[350px] h-[450px] rounded-xl p-6 m-3 border shadow-xl">
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={pic.src}
            height="300"
            width="300"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={link}
            className="px-4 py-2 rounded-xl text-sm font-normal dark:text-white"
          >
            {title}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="text-xs font-bold"
          >
            →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
