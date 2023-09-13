'use client'

import EmblaCarousel from './carousel'

import Hero1 from 'public/assests/heroCarousel/1.JPG'
import Hero2 from 'public/assests/heroCarousel/2.JPG'
import Hero3 from 'public/assests/heroCarousel/3.JPG'


export default function ShowcaseCarousel() {
  const slides = [Hero1, Hero2, Hero3, Hero1, Hero2, Hero3]

  return (
    <>
        <div className='w-full h-full flex flex-col justify-center items-center pt-5'>
                <h1 className='text-4xl text-white font-thin shadow-md'>קטגוריה ראשונה</h1>
            <EmblaCarousel slideStyle={'w-[90vw] lg:w-[30vw] object-cover object-center pt-5 mx-2 drop drop-shadow-sm'} containerStyle={'overflow-hidden w-full'} options={{loop: true, align: 'center', skipSnaps: true, duration: 50, slidesToScroll: 1}} slides={slides} / >   
        </div>
    </>
  );
}