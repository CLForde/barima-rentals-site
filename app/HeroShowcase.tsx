import Image from 'next/image';

type HeroShowcaseProps = {
  whatsappUrl: string;
};

export default function HeroShowcase({ whatsappUrl }: HeroShowcaseProps) {
  return (
    <section className='overflow-hidden bg-white'>
      <div className='px-3 py-3 sm:px-5 sm:py-5 lg:px-8 lg:py-8'>
        <div className='relative overflow-hidden rounded-[1.35rem] bg-gray-950 shadow-2xl shadow-gray-900/10 sm:rounded-[1.6rem]'>
          <div className='relative min-h-[clamp(500px,70vh,680px)] overflow-hidden bg-[#6f7f7d] sm:min-h-[clamp(540px,72vh,760px)] lg:min-h-[clamp(620px,78vh,850px)]'>
            <Image
              src='/images/3ft-scaffolding-hero.PNG'
              alt=''
              fill
              priority
              sizes='100vw'
              aria-hidden='true'
              className='scale-105 object-cover object-[center_20%] opacity-45 blur-2xl'
            />
            <Image
              src='/images/3ft-scaffolding-hero.PNG'
              alt='3ft scaffolding available from Barima Rentals in Georgetown'
              fill
              priority
              sizes='100vw'
              className='object-contain object-[center_20%]'
            />
          </div>

          <div className='relative min-h-[clamp(500px,70vh,680px)] overflow-hidden bg-[#e5ddc8] sm:min-h-[clamp(540px,72vh,760px)] lg:min-h-[clamp(620px,78vh,850px)]'>
            <Image
              src='/images/400l-concrete-mixer.PNG'
              alt=''
              fill
              priority
              sizes='100vw'
              aria-hidden='true'
              className='scale-105 object-cover object-center opacity-40 blur-2xl'
            />
            <Image
              src='/images/400l-concrete-mixer.PNG'
              alt='400L concrete mixer available from Barima Rentals'
              fill
              priority
              sizes='100vw'
              className='object-contain object-center'
            />
          </div>

          <div className='pointer-events-none absolute inset-x-0 top-[28%] h-[45%] bg-gradient-to-b from-transparent via-black/38 to-transparent' />

          <div className='absolute left-5 top-[42%] max-w-[min(760px,calc(100%-2.5rem))] -translate-y-1/2 text-white sm:left-9 sm:top-[43%] lg:left-[7vw] lg:top-[45%]'>
            <h1
              className='text-[clamp(1.9rem,7vw,3.6rem)] font-bold leading-[1.08] tracking-tight'
              style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.35)' }}
            >
              Scaffolding & Concrete Mixer Rentals in Georgetown and Surrounding
              Areas
            </h1>

            <p
              className='mt-5 max-w-[min(640px,100%)] text-base leading-relaxed text-white/92 sm:text-lg'
              style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.35)' }}
            >
              Reliable equipment for residential and commercial projects, with
              Canter transport available for equipment, construction materials
              and general cargo.
            </p>

            <div className='mt-7 flex flex-col gap-3 sm:flex-row'>
              <a
                href={whatsappUrl}
                className='inline-flex min-h-12 items-center justify-center rounded-xl bg-green-600 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-gray-950/15 transition hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-200'
              >
                Check Availability
              </a>

              <a
                href='#equipment'
                className='inline-flex min-h-12 items-center justify-center rounded-xl border border-white/70 bg-white/12 px-7 py-3 text-base font-semibold text-white transition hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/30'
              >
                View Equipment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
