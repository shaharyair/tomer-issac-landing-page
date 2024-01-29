"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const EmblaCarousel = (props) => {
  const {
    options,
    slides,
    plugins,
    slideStyle,
    containerStyle,
    mediaType,
    arrows,
  } = props;

  const [emblaRef, embla] = useEmblaCarousel(options, plugins);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  return (
    <div className="embla relative">
      {arrows && (
        <>
          <PrevSlideButton onClick={scrollPrev} />
          <NextSlideButton onClick={scrollNext} />
        </>
      )}
      <div className={containerStyle} ref={emblaRef}>
        <div className="flex">
          {slides.map((item, index) => {
            return (
              <div
                className="relative flex-auto flex-shrink-0 flex-grow-0"
                key={index}
              >
                {mediaType === "video" ? (
                  <div className={slideStyle}>
                    <iframe
                      src={item}
                      allowFullScreen
                      width="100%"
                      height="100%"
                      title={`iframe link: ${item}`}
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <Image
                    className={slideStyle}
                    src={item}
                    alt="/"
                    width={750}
                    height={750}
                    loading="lazy"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;

function NextSlideButton({ onClick }) {
  return (
    <>
      <button
        id="nextSlideButton"
        type="button"
        className="absolute right-1 top-1/2 z-10 -translate-y-1/2 p-2 text-2xl text-white drop-shadow-stroke transition-colors hover:text-main lg:text-4xl"
        onClick={onClick}
      >
        <FaChevronRight />
      </button>
    </>
  );
}

function PrevSlideButton({ onClick }) {
  return (
    <>
      <button
        id="prevSlideButton"
        type="button"
        className="absolute left-1 top-1/2 z-10 -translate-y-1/2 p-2 text-2xl text-white drop-shadow-stroke transition-colors hover:text-main  lg:text-4xl"
        onClick={onClick}
      >
        <FaChevronLeft />
      </button>
    </>
  );
}
