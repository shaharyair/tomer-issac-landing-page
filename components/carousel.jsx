'use client'

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = (props) => {
  const { options, slides, plugins, slideStyle } = props
  const [emblaRef] = useEmblaCarousel(options, plugins);

  return (
    <div className='embla'>
      <div className='overflow-hidden w-full h-full' ref={emblaRef}>
        <div className='flex'>
          {slides.map((img, index) => (
            <div className=' flex-shrink-0 flex-grow-0 flex-auto relative' key={index}>
              <Image
                className={slideStyle}
                src={img}
                alt='/'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel

