"use client";

import EmblaCarousel from "./carousel";
import { marketingGuidanceVideosUrl, stillImages } from "@/config";

export default function ShowcaseCarousel() {
  return (
    <>
      <MarketingGuidanceVideoCarousel />
      <StillImagesCarousel />
    </>
  );
}

function MarketingGuidanceVideoCarousel() {
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

function StillImagesCarousel() {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center pt-5"
      id="still-images"
    >
      <h1 className="text-4xl font-thin text-white drop-shadow-md">
        תמונות סטילס
      </h1>
      <EmblaCarousel
        slideStyle={
          "w-[90vw] lg:w-[35vw] h-[45vh] pt-5 mx-2 drop drop-shadow-sm object-cover object-center"
        }
        containerStyle={"overflow-hidden"}
        options={{
          loop: true,
          align: "center",
          skipSnaps: true,
          duration: 50,
          slidesToScroll: 1,
        }}
        slides={stillImages}
      />
    </div>
  );
}
