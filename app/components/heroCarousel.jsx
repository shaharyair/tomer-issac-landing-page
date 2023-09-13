'use client'

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'

import img1 from 'public/assests/heroCarousel/1.JPG'
import img2 from 'public/assests/heroCarousel/2.JPG'
import img3 from 'public/assests/heroCarousel/3.JPG'

const slides = [img1, img2, img3]

const randomIndex = Math.floor(Math.random() * slides.length)

const autoplayOptions = {
    delay: 10000,
    stopOnInteraction: false,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  }

const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({loop: true, align: 'center', skipSnaps: true, startIndex: randomIndex}, [Autoplay(autoplayOptions)]);

  return (
    <div className='embla'>
      <div className='overflow-hidden w-full h-full' ref={emblaRef}>
        <div className='flex'>
          {slides.map((img, index) => (
            <div className=' flex-shrink-0 flex-grow-0 flex-auto relative' key={index}>
              <Image
                className='w-screen h-[80vh] object-cover object-center'
                src={img}
                alt='Your alt text'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
