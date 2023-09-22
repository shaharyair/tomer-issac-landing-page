"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = (props) => {
  const {
    options,
    slides,
    plugins,
    slideStyle,
    containerStyle,
    mediaType,
    thumbnails,
  } = props;
  const [emblaRef] = useEmblaCarousel(options, plugins);

  return (
    <div className="embla">
      <div className={containerStyle} ref={emblaRef}>
        <div className="flex">
          {slides.map((item, index) => (
            <div
              className="relative flex-auto flex-shrink-0 flex-grow-0"
              key={index}
            >
              {mediaType === "video" ? (
                <video
                  className={slideStyle}
                  src={item}
                  controls
                  type="video/mp4"
                  preload="true"
                  poster={thumbnails ? thumbnails[index] : null}
                />
              ) : (
                <Image
                  className={slideStyle}
                  src={item}
                  alt="/"
                  width={1920}
                  height={1080}
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
