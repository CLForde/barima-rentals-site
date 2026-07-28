import Image from 'next/image';

type HeroSectionProps = {
  whatsappUrl: string;
};

export default function HeroSection({ whatsappUrl }: HeroSectionProps) {
  const heroImage = '/images/3ft-scaffolding-candidate-cropped.png';

  return (
    <section className='relative w-full overflow-hidden bg-gray-950'>
      <div className='relative min-h-[620px] w-full sm:min-h-[700px] lg:min-h-[760px]'>
        {/* Soft background fill prevents empty side areas without stretching
            the main photograph. */}
        <Image
          src={heroImage}
          alt=''
          fill
          priority
          aria-hidden='true'
          sizes='100vw'
          className='scale-105 object-cover object-center opacity-45 blur-xl'
        />

        <div className='absolute inset-0 bg-gray-950/20' />

        {/* Main photograph remains fully visible and keeps its natural shape. */}
        <Image
          src={heroImage}
          alt='Scaffolding rental worksite with workers on 3ft scaffolding'
          fill
          priority
          sizes='100vw'
          className='object-contain object-center'
        />

        {/* Light shading for text readability without creating a visible box. */}
        <div className='absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent' />

        <div className='absolute inset-0 flex items-start'>
          <div className='w-full px-5 pt-8 sm:px-8 sm:pt-12 md:px-10 md:pt-14 lg:px-14 lg:pt-20'>
            <div className='max-w-[42rem] text-white'>
              <h1
                className='text-[clamp(1.75rem,5vw,3.375rem)] font-bold leading-[1.08] tracking-tight text-white/95'
                style={{
                  textShadow: '0 2px 12px rgba(0, 0, 0, 0.45)',
                }}
              >
                Scaffolding & Concrete Mixer Rentals in Georgetown and
                Surrounding Areas
              </h1>

              <p
                className='mt-4 max-w-[36rem] text-sm font-medium leading-relaxed text-white/90 sm:text-base lg:text-lg'
                style={{
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.42)',
                }}
              >
                Reliable equipment for residential and commercial projects, with
                Canter transport available for equipment, construction materials
                and general cargo.
              </p>

              <div className='mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row'>
                <a
                  href={whatsappUrl}
                  className='inline-flex min-h-11 items-center justify-center rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-gray-900/20 transition hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-200 sm:min-h-12 sm:px-6 sm:py-3 sm:text-base'
                >
                  Book Your Rental
                </a>

                <a
                  href='#equipment'
                  className='inline-flex min-h-11 items-center justify-center rounded-xl border border-white/80 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/30 sm:min-h-12 sm:px-6 sm:py-3 sm:text-base'
                >
                  View Equipment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
