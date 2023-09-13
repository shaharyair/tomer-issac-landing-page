'use client'

import EmblaCarousel from './carousel'
import Autoplay from 'embla-carousel-autoplay'

import Hero1 from 'public/assests/heroCarousel/1.JPG'
import Hero2 from 'public/assests/heroCarousel/2.JPG'
import Hero3 from 'public/assests/heroCarousel/3.JPG'


export default function HeroCarousel() {
  const slides = [Hero1, Hero2, Hero3]

  const autoplayOptions = {
    delay: 7500,
    stopOnInteraction: false,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  }

  return (
    <>
      <EmblaCarousel slideStyle={'w-screen h-[80vh] object-cover object-center'} containerStyle={'overflow-hidden'} options={{loop: true, align: 'center', skipSnaps: true, duration: 50}} slides={slides} plugins={[Autoplay(autoplayOptions)]}  / >   
    </>
  );
}