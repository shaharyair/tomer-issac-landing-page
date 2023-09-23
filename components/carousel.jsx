"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = (props) => {
  const { options, slides, plugins, slideStyle, containerStyle, mediaType } =
    props;

  const [emblaRef] = useEmblaCarousel(options, plugins);

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
                  <div className={slideStyle}>
                    <iframe
                      src={item}
                      allowFullScreen
                      width="100%"
                      height="100%"
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
