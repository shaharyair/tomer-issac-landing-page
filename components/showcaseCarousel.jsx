"use client";

import EmblaCarousel from "./carousel";
import {
  marketingGuidanceVideosUrl,
  mashupVideos,
  musicalClips,
  podcastsEditsVideos,
  stillImages,
} from "@/config";

export default function ShowcaseCarousel() {
  return (
    <>
      <MarketingGuidanceVideoCarousel />
      <StillImagesCarousel />
      <MusicalClipsCarousel />
      <PodcastsEditsCarousel />
      <MashupVideosCarousel />
    </>
  );
}

function MarketingGuidanceVideoCarousel() {
  return (
    <div
      className="mt-5 flex h-full w-full flex-col items-center justify-center gap-5"
      id="marketing-guidance-videos"
    >
      <h1 className="text-4xl font-thin text-white drop-shadow-md">
        <span className="text-main">סרטי</span> שיווק והדרכה
      </h1>
      <EmblaCarousel
        slideStyle={
          "w-[85vw] lg:w-[35vw] h-[45vh] pt-5 mx-2 drop drop-shadow-sm bg-black/20"
        }
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
      className="mt-5 flex h-full w-full flex-col items-center justify-center gap-1"
      id="still-images"
    >
      <h1 className="text-4xl font-thin text-white drop-shadow-md">
        <span className="text-main">תמונות</span> סטילס
      </h1>
      <EmblaCarousel
        slideStyle={
          "w-[85vw] lg:w-[35vw] h-[45vh] pt-5 mx-2 drop drop-shadow-sm object-cover object-center"
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

function MashupVideosCarousel() {
  return (
    <div
      className="mt-5 flex h-full w-full flex-col items-center justify-center gap-5"
      id="mashups-videos"
    >
      <h1 className="text-4xl font-thin text-white drop-shadow-md">
        <span className="text-main">מש</span>אפים
      </h1>
      <EmblaCarousel
        slideStyle={
          "w-[85vw] lg:w-[35vw] h-[45vh] pt-5 mx-2 drop drop-shadow-sm bg-black/20"
        }
        containerStyle={"overflow-hidden"}
        options={{
          loop: true,
          align: "center",
          skipSnaps: true,
          duration: 50,
          slidesToScroll: 1,
        }}
        slides={mashupVideos}
        mediaType="video"
      />
    </div>
  );
}

function MusicalClipsCarousel() {
  return (
    <div
      className="mt-5 flex h-full w-full flex-col items-center justify-center gap-5"
      id="musical-clips"
    >
      <h1 className="text-4xl font-thin text-white drop-shadow-md">
        <span className="text-main">קליפים</span> מוזיקליים
      </h1>
      <EmblaCarousel
        slideStyle={
          "w-[85vw] lg:w-[35vw] h-[45vh] pt-5 mx-2 drop drop-shadow-sm bg-black/20"
        }
        containerStyle={"overflow-hidden"}
        options={{
          loop: true,
          align: "center",
          skipSnaps: true,
          duration: 50,
          slidesToScroll: 1,
        }}
        slides={musicalClips}
        mediaType="video"
      />
    </div>
  );
}

function PodcastsEditsCarousel() {
  return (
    <div
      className="mt-5 flex h-full w-full flex-col items-center justify-center gap-5"
      id="podcasts-edits"
    >
      <h1 className="text-4xl font-thin text-white drop-shadow-md">
        <span className="text-main">עריכת</span> פודקאסטים
      </h1>
      <EmblaCarousel
        slideStyle={
          "w-[85vw] lg:w-[35vw] h-[45vh] pt-5 mx-2 drop drop-shadow-sm bg-black/20"
        }
        containerStyle={"overflow-hidden"}
        options={{
          loop: true,
          align: "center",
          skipSnaps: true,
          duration: 50,
          slidesToScroll: 1,
        }}
        slides={podcastsEditsVideos}
        mediaType="video"
      />
    </div>
  );
}
