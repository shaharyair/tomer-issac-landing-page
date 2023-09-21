"use client";

import EmblaCarousel from "./carousel";
import Autoplay from "embla-carousel-autoplay";

import { heroCarouselImages } from "@/config";

export default function HeroCarousel() {
  const autoplayOptions = {
    delay: 7500,
    stopOnInteraction: false,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  };

  return (
    <>
      <EmblaCarousel
        slideStyle={"w-screen h-[80vh] object-cover object-center"}
        containerStyle={"overflow-hidden"}
        options={{ loop: true, align: "center", skipSnaps: true, duration: 50 }}
        slides={heroCarouselImages}
        plugins={[Autoplay(autoplayOptions)]}
      />
    </>
  );
}
