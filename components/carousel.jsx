"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";

const EmblaCarousel = (props) => {
  const { options, slides, plugins, slideStyle, containerStyle, mediaType } =
    props;

  const [emblaRef] = useEmblaCarousel(options, plugins);

  const [isInteracting, setIsInteracting] = useState(false);

  return (
    <div className="embla">
      <div className={containerStyle} ref={emblaRef}>
        <div className="flex">
          {slides.map((item, index) => {
            return (
              <div
                className="relative flex-auto flex-shrink-0 flex-grow-0"
                key={index}
              >
                {mediaType === "video" ? (
                  <div
                    className={slideStyle}
                    onMouseDown={() => setIsInteracting(true)} // User interaction starts
                    onMouseUp={() => setIsInteracting(false)} // User interaction ends
                    onMouseMove={(e) => e.stopPropagation()}
                    onMouseLeave={() => setIsInteracting(false)}
                  >
                    <iframe
                      src={item}
                      allowFullScreen
                      width="100%"
                      height="100%"
                      className={`${
                        isInteracting
                          ? "pointer-events-auto"
                          : "pointer-events-none"
                      }`}
                    />
                  </div>
                ) : (
                  <Image
                    className={slideStyle}
                    src={item}
                    alt="/"
                    width={1920}
                    height={1080}
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
