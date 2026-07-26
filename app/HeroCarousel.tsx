'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

const slides = [
  {
    src: '/images/3ft-scaffolding-hero.PNG',
    alt: '3ft scaffolding available from Barima Rentals in Georgetown',
    label: 'Scaffolding rental',
  },
  {
    src: '/images/400l-concrete-mixer.PNG',
    alt: '400L concrete mixer available from Barima Rentals',
    label: 'Concrete mixer rental',
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  const activeLabel = useMemo(() => slides[activeIndex].label, [activeIndex]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);

    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(intervalId);
  }, [reduceMotion]);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  return (
    <div className='relative mx-auto w-full max-w-[520px] overflow-hidden rounded-[1.75rem] border border-white/80 bg-white shadow-2xl shadow-gray-900/10'>
      <div className='relative aspect-[4/5] min-h-[360px] bg-gradient-to-br from-gray-50 via-white to-orange-50 sm:min-h-[460px] lg:min-h-[560px]'>
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            aria-hidden={activeIndex !== index}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              activeIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes='(min-width: 1024px) 42vw, (min-width: 640px) 70vw, 100vw'
              className='object-contain p-5 sm:p-7'
            />
          </div>
        ))}

        <div className='pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-950/45 to-transparent' />

        <div className='absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-green-800 shadow-sm ring-1 ring-gray-900/5'>
          {activeLabel}
        </div>

        <button
          type='button'
          aria-label='Show previous hero image'
          onClick={showPrevious}
          className='absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-sm ring-1 ring-gray-900/10 transition hover:bg-white focus:outline-none focus:ring-4 focus:ring-green-200'
        >
          <span aria-hidden='true' className='text-2xl leading-none'>
            ‹
          </span>
        </button>

        <button
          type='button'
          aria-label='Show next hero image'
          onClick={showNext}
          className='absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-sm ring-1 ring-gray-900/10 transition hover:bg-white focus:outline-none focus:ring-4 focus:ring-green-200'
        >
          <span aria-hidden='true' className='text-2xl leading-none'>
            ›
          </span>
        </button>

        <div className='absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-white/90 px-3 py-2 shadow-sm ring-1 ring-gray-900/10'>
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type='button'
              aria-label={`Show ${slide.label}`}
              aria-current={activeIndex === index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-green-300 ${
                activeIndex === index
                  ? 'w-7 bg-orange-500'
                  : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
