"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";



const Banner = ({ title, subtitle,options, imageUrl }) => {
  return (
    <div className="relative md:h-[90vh] h-[550px]">
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={title || "Banner Image"}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}

      {/* Text Content */}
      <div className=" max-w-7xl mx-auto absolute inset-0 flex flex-col justify-center items-start  text-white/80 px-4  ">
        <h1 className=" font-cormorant font-semibold leading-[1.2] text-center sm:text-left text-[24px] sm:text-4xl md:text-[50px] tracking-[5px] mb-4 uppercase max-w-[700px] text-[#ab7e47] ">
          {title}
        </h1>
        <h2 className="text-xl md:text-3xl mb-8 text-[#ab7e47] ">MERN Stack Developer</h2>
        {subtitle && (
          <p className="hd font-[500px] text-md text-center sm:text-left tracking-[2px] max-w-lg mb-4 text-gray-500 ">
            {subtitle}
          </p>
        )}
        {options && (
          <p className="hd font-[500px] text-md text-center sm:text-left tracking-[2px] max-w-lg text-gray-500 ">
            {options}
          </p>
        )}
        <Button href="/contact" className=" mt-10">Let's Connect</Button>
      </div>
    </div>
  );
};

export default Banner;
