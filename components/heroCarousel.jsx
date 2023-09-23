"use client";

import EmblaCarousel from "./carousel";
import Autoplay from "embla-carousel-autoplay";

import Button from "./button";

import { heroCarouselImages } from "@/config";

import { FaPhone, FaWhatsapp } from "react-icons/fa6";

export default function HeroCarousel() {
  const autoplayOptions = {
    delay: 10000,
    stopOnInteraction: false,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  };

  return (
    <>
      <div className="relative" id="hero">
        <EmblaCarousel
          slideStyle={
            "w-screen h-[80vh] object-cover object-center brightness-50"
          }
          containerStyle={"overflow-hidden"}
          options={{
            loop: true,
            align: "center",
            skipSnaps: true,
            duration: 50,
          }}
          slides={heroCarouselImages}
          plugins={[Autoplay(autoplayOptions)]}
        />
        <div
          className=" absolute left-1/2 top-[55%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-10 text-center"
          style={{ direction: "rtl" }}
        >
          <h1 className=" whitespace-nowrap text-3xl font-thin tracking-widest text-white opacity-75 drop-shadow-md lg:text-7xl">
            TOMER CASHIYADO
          </h1>
          <h2 className="mb-14 whitespace-nowrap text-xl font-thin tracking-widest text-white opacity-75 drop-shadow-md lg:text-3xl">
            צלם, עורך ויוצר תוכן
          </h2>
          <p className="text-lg font-thin text-white opacity-75 drop-shadow-md lg:text-2xl">
            לפרטים נוספים:
          </p>
          <div className="flex items-center justify-center gap-5 lg:gap-10">
            <Button className=" text-white hover:border-[0.5px]">
              <a
                href="https://api.whatsapp.com/send?phone=972507677702"
                className="flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Whatsapp <FaWhatsapp className="text-xl" />
              </a>
            </Button>
            <Button className=" text-white hover:border-[0.5px]">
              <a
                href="tel:+972507677702"
                className="flex items-center justify-center gap-2 whitespace-nowrap"
              >
                התקשרו אליי <FaPhone className="text-xl" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
