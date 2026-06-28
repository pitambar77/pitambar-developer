"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const visibleImages = images.slice(0, 6);
  const remainingImages = images.length - 6;

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (selectedIndex !== null) {
      const scrollY = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      return () => {
        const top = document.body.style.top;

        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";

        window.scrollTo(0, parseInt(top || "0") * -1);
      };
    }
  }, [selectedIndex]);

  return (
    <>
      {/* Gallery */}
      <section className="py-20">
        <div className="max-w-[1800px] mx-auto px-3">
          <div className="grid grid-cols-12 gap-3">
            {visibleImages.map((item, index) => (
              <div
                key={item.id}
                className={`relative overflow-hidden cursor-pointer border border-[#ab7e47]/20 ${item.className}`}
                onClick={() => openModal(index)}
              >
                <div className="relative h-[420px] md:h-[520px]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111]/10 via-[#3c4655]/20 to-transparent" />

                  {/* Show overlay on last visible image */}
                  {index === 5 && remainingImages > 0 && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="font-cormorant text-white text-4xl font-semibold">
                        +{remainingImages}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-md flex items-center justify-center">
          {/* Close */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white cursor-pointer"
          >
            <X size={30} />
          </button>

          {/* Prev */}
          <button
            onClick={prevImage}
            className="absolute left-6 md:left-10 text-[#ab7e47] bg-gray-200 p-2 rounded-full cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Image */}
          <div className="relative w-[90vw] h-[85vh]">
            <Image
              src={images[selectedIndex].image}
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Next */}
          <button
            onClick={nextImage}
            className="absolute right-6 md:right-10 text-[#ab7e47] bg-gray-200 p-2 rounded-full cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 text-white text-sm tracking-widest">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
