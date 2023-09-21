"use client";

import EmblaCarousel from "./carousel";
import Autoplay from "embla-carousel-autoplay";

import Button from "./button";
import Link from "next/link";

import { heroCarouselImages } from "@/config";

import { FaPhone, FaWhatsapp } from "react-icons/fa6";

export default function HeroCarousel() {
  const autoplayOptions = {
    delay: 7500,
    stopOnInteraction: false,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  };

  return (
    <>
      <div className="relative">
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
          className=" absolute left-1/2 top-[55%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-16 text-center lg:gap-20"
          style={{ direction: "rtl" }}
        >
          <h1 className=" whitespace-nowrap text-5xl font-thin tracking-widest text-white opacity-75 drop-shadow-md lg:text-8xl">
            TOMER AIZIK
          </h1>
          <p className="text-lg font-thin text-white opacity-75 drop-shadow-md lg:text-2xl">
            לפרטים נוספים:
          </p>
          <div className="flex items-center justify-center gap-5 lg:gap-10">
            <Button className="text-white">
              <a
                href="https://api.whatsapp.com/send?phone=972507677702"
                className="flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Whatsapp <FaWhatsapp className="text-xl" />
              </a>
            </Button>
            <Button className="p-10 text-white">
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
