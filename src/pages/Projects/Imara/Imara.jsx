
import React from "react";
import Overview from "./Overview";
import DetailsExplain from "./DetailsExplain";
import Gallery from "@/components/Gallery";
import ContactSection from "@/pages/Home/ContactSection";


const gallery = [
  {
    id: 1,
    image: "/images/imara-1.webp",
    className: "col-span-3",
  },
  {
    id: 2,
    image: "/images/imara-2.webp",
    className: "col-span-3",
  },
  {
    id: 3,
    image: "/images/imara-3.webp",
    className: "col-span-6",
  },
  {
    id: 4,
    image: "/images/imara-4.webp",
    className: "col-span-6",
  },
  {
    id: 5,
    image: "/images/imara-5.webp",
    className: "col-span-3",
  },
  {
    id: 6,
    image: "/images/imara-6.webp",
    className: "col-span-3",
  },
  {
    id: 7,
    image: "/images/imara-7.webp",
    className: "col-span-3",
  },
  {
    id: 8,
    image: "/images/imara-8.webp",
    className: "col-span-3",
  },
  
];

const Imara = () => {
  return (
    <div>
      {/* <Banner imageUrl={"/images/imara-home.png"} /> */}
      <Overview />
      <DetailsExplain />
      <Gallery images={gallery} />
      <ContactSection/>
    </div>
  );
};

export default Imara;
