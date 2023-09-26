"use client";

import EmblaCarousel from "./carousel";
import {
  marketingGuidanceVideosUrl,
  mashupThumbnails,
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
    <>
      <Carousel
        id="marketing-guidance-videos"
        slides={marketingGuidanceVideosUrl}
        title={
          <>
            <span className="text-main">סרטי</span> שיווק והדרכה
          </>
        }
        media="video"
      />
    </>
  );
}

function StillImagesCarousel() {
  return (
    <>
      <Carousel
        id="still-images"
        slides={stillImages}
        title={
          <>
            <span className="text-main">צילום</span> הופעות ואירועים
          </>
        }
      />
    </>
  );
}

function MashupVideosCarousel() {
  return (
    <>
      <Carousel
        id="mashups-videos"
        slides={mashupVideos}
        title={
          <>
            <span className="text-main">מש</span>אפים
          </>
        }
        media="video"
        thumbnails={mashupThumbnails}
      />
    </>
  );
}

function MusicalClipsCarousel() {
  return (
    <>
      <Carousel
        id="musical-clips"
        slides={musicalClips}
        title={
          <>
            <span className="text-main">קליפים</span> מוזיקליים
          </>
        }
        media="video"
      />
    </>
  );
}

function PodcastsEditsCarousel() {
  return (
    <>
      <Carousel
        id="podcasts-edits"
        slides={podcastsEditsVideos}
        title={
          <>
            <span className="text-main">עריכת</span> פודקאסטים
          </>
        }
        media="video"
      />
    </>
  );
}

function Carousel(props) {
  const { id, slides, title, media, thumbnails } = props;

  return (
    <div
      className="mt-5 flex h-full w-full flex-col items-center justify-center gap-5"
      id={id}
    >
      <h1 className="text-4xl font-thin text-white drop-shadow-stroke">
        {title}
      </h1>
      <EmblaCarousel
        slideStyle={`w-[100vw] lg:w-[35vw] h-[45vh] mx-2 drop drop-shadow-sm object-center ${
          media !== "video" && "object-cover"
        }`}
        containerStyle={"overflow-hidden w-screen"}
        options={{
          loop: true,
          align: "center",
          skipSnaps: true,
          duration: 50,
          slidesToScroll: 1,
        }}
        slides={slides}
        mediaType={media}
        thumbnails={thumbnails}
        arrows
      />
    </div>
  );
}
