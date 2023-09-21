"use client";

import EmblaCarousel from "./carousel";
import { marketingGuidanceVideosUrl } from "@/config";

export default function ShowcaseCarousel() {
  return (
    <>
      <MarketingGuidanceVideoCarousel />
    </>
  );
}

function MarketingGuidanceVideoCarousel() {
  // Corrected component name here
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center pt-5"
      id="marketing-guidance-videos"
    >
      <h1 className="text-4xl font-thin text-white drop-shadow-md">
        סרטי שיווק והדרכה
      </h1>
      <EmblaCarousel
        slideStyle={"w-[80vw] lg:w-[35vw] pt-5 mx-2 drop drop-shadow-sm"}
        containerStyle={"overflow-hidden"}
        options={{
          loop: true,
          align: "center",
          skipSnaps: true,
          duration: 50,
          slidesToScroll: 1,
        }}
        slides={marketingGuidanceVideosUrl}
        mediaType="video"
      />
    </div>
  );
}
