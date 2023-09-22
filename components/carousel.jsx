"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useInView } from "react-intersection-observer";

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

  const [videoRef] = useInView({
    threshold: 0.5,
    rootMargin: "-50px 0px",
    triggerOnce: true,
  });

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
                  <video
                    className={slideStyle}
                    src={item}
                    type="video/mp4"
                    preload="auto"
                    controls
                    poster={thumbnails ? thumbnails[index] : null}
                    ref={videoRef}
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
