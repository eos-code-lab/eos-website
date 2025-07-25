// The carousel at the top

'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Define the carousel items
const carouselItems = [
  {
    id: 1,
    image: '/images/carousel/no-man.png',
    title: 'Where no man has gone before',
    subtitle: 'We create outstanding websites and apps',
    lineColor: 'green' // green-line
  },
  {
    id: 2,
    image: '/images/carousel/great-things.png',
    title: 'We love when we are the best',
    subtitle: 'And we create amazing things',
    lineColor: 'mov' // mov-line
  },
  {
    id: 3,
    image: '/images/carousel/stars-view.png',
    title: 'See the world from the stars point of view',
    subtitle: 'And you can get better and better',
    lineColor: 'blue' // blue-line
  }
];

const HeroCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Auto-advance slides
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % carouselItems.length);
      }, 5000); // Change slide every 5 seconds
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying]);
  
  // Go to specific slide
  const goToSlide = (index: number) => {
    setActiveSlide(index);
    setIsAutoPlaying(false); // Pause auto-play when manually changing slides
    
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };
  
  // Go to next slide
  const nextSlide = () => {
    goToSlide((activeSlide + 1) % carouselItems.length);
  };
  
  // Go to previous slide
  const prevSlide = () => {
    goToSlide((activeSlide - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div id="eos-carousel" className="relative h-screen w-full overflow-hidden">
      {/* Carousel items */}
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
            index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background image */}
          <div className="relative h-full w-full">
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
              quality={75}
            />
            {/* Overlay for better text readability */}
            {/*https://v3.tailwindcss.com/docs/background-color#changing-the-opacity  */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
          {/* Caption */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-4">
              {item.title}
            </h1>
            <hr className={`border-t-4 w-[5%] mx-auto my-2 ${item.lineColor}`} />
            <h5 className="text-lg md:text-xl lg:text-2xl">
              {item.subtitle}
            </h5>
          </div>
        </div>
      ))}
      
      {/* Carousel indicators */}
      <div className="absolute bottom-5 left-0 right-0 z-20 flex justify-center">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`mx-1 h-1 w-6 rounded-sm hover:bg-stone-300 ${
              index === activeSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
      
  <button
    className="absolute left-4 top-1/2 z-20 -translate-y-1/2 p-3 text-white hover:text-stone-300"
    onClick={prevSlide}
    aria-label="Previous slide"
  >
    <i className="fas fa-chevron-left text-xl"></i>
  </button>

  <button
    className="absolute right-4 top-1/2 z-20 -translate-y-1/2  p-3 text-white hover:text-stone-300"
    onClick={nextSlide}
    aria-label="Next slide"
  >
    <i className="fas fa-chevron-right text-xl"></i>
  </button>
    </div>
  );
};

export default HeroCarousel;