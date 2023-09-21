"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = (props) => {
  const { options, slides, plugins, slideStyle, containerStyle } = props;
  const [emblaRef] = useEmblaCarousel(options, plugins);

  return (
    <div className="embla">
      <div className={containerStyle} ref={emblaRef}>
        <div className="flex">
          {slides.map((img, index) => (
            <div
              className="relative flex-auto flex-shrink-0 flex-grow-0"
              key={index}
            >
              <Image
                className={slideStyle}
                src={img}
                alt="/"
                width={1920}
                height={1080}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
