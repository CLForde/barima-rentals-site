import Image from 'next/image';
import HeroCarousel from './HeroCarousel';

const trustItems = [
  {
    title: 'Reliable Equipment',
    icon: (
      <path d='M12 3 4.5 6v5.5c0 4.1 2.8 7.9 7.5 9.5 4.7-1.6 7.5-5.4 7.5-9.5V6L12 3Zm3.4 7.2-4.2 4.2-2.1-2.1' />
    ),
  },
  {
    title: 'Delivery & Pickup Available',
    icon: (
      <path d='M3 7h11v8H3V7Zm11 3h3.5L21 13.5V15h-7v-5ZM6.5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm11 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z' />
    ),
  },
  {
    title: 'Fair & Transparent Pricing',
    icon: (
      <path d='M12 2v20M17 6.5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6' />
    ),
  },
  {
    title: 'Residential & Commercial Projects',
    icon: (
      <path d='M4 21V8l8-5 8 5v13M9 21v-7h6v7M8 10h.01M16 10h.01' />
    ),
  },
  {
    title: 'Serving Georgetown & Surrounding Areas',
    icon: (
      <path d='M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z' />
    ),
  },
  {
    title: 'Friendly Customer Service',
    icon: (
      <path d='M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8ZM8 9h8M8 13h5' />
    ),
  },
];

const equipmentItems = [
  {
    category: 'Scaffolding Rental',
    name: '3ft Scaffolding',
    image: '/images/3ft-scaffolding.jpeg',
    alt: '3ft scaffolding rental equipment from Barima Rentals',
    description:
      'Standard 3ft x 6ft scaffolding rental for residential, commercial and construction projects that need stable elevated access.',
    price: '$500-$700 per pair/day',
    note: 'Based on duration. Cement work is $700 per pair/day.',
    featured: true,
  },
  {
    category: 'Scaffolding Rental',
    name: '2ft Scaffolding',
    image: '/images/2ft-scaffolding.jpeg',
    alt: '2ft scaffolding rental equipment for tight access areas',
    description:
      'Narrow 2ft scaffolding for side passages, tight access areas and confined spaces where standard scaffold will not fit.',
    price: '$700 per pair/day',
    note: 'Useful for tight spaces and narrow work areas.',
    featured: true,
  },
  {
    category: 'Concrete Mixer',
    name: '350L Concrete Mixer',
    image: '/images/350l-concrete-mixer.PNG',
    alt: '350L concrete mixer rental from Barima Rentals',
    description:
      'Concrete mixer rental for smaller job-site pours, residential work and general cement mixing needs.',
    price: 'G$23,000/day',
    note: 'Also commonly requested as a cement mixer or ransom.',
    featured: true,
  },
  {
    category: 'Concrete Mixer',
    name: '400L Concrete Mixer',
    image: '/images/400l-concrete-mixer.PNG',
    alt: '400L concrete mixer rental from Barima Rentals',
    description:
      'Concrete mixer rental for residential and commercial projects needing reliable daily mixing capacity.',
    price: 'G$28,000/day',
    note: 'Also commonly requested as a cement mixer or ransom.',
    featured: true,
  },
  {
    category: 'Concrete Mixer',
    name: '450L Concrete Mixer',
    image: '/images/450l-concrete-mixer.PNG',
    alt: '450L concrete mixer rental from Barima Rentals',
    description:
      'Concrete mixer rental for larger pours and active construction projects that need a higher-capacity mixer option.',
    price: 'G$33,000/day',
    note: 'Also commonly requested as a cement mixer or ransom.',
    featured: true,
  },
  {
    category: 'Compaction Equipment',
    name: '90kg Plate Compactor',
    image: '/images/90kg-plate-compactor.jpeg',
    alt: '90kg plate compactor rental from Barima Rentals',
    description:
      '90kg plate compactor rental for soil compaction, driveways, foundation preparation and construction site groundwork.',
    price: 'G$15,000/day',
    note: 'Also commonly requested as a vibrating plate compactor.',
    featured: false,
  },
];

export default function BarimaRentalsHome() {
  const phoneNumber = '+5926275775';
  const whatsappUrl =
    'https://wa.me/5926275775?text=Hello%20Barima%20Rentals%2C%20I%27d%20like%20to%20check%20equipment%20availability.';
  const createEquipmentWhatsappUrl = (equipmentName: string) =>
    `https://wa.me/5926275775?text=${encodeURIComponent(
      `Hello Barima Rentals, I'd like to check availability for ${equipmentName}.`
    )}`;

  return (
    <main className='min-h-screen overflow-x-clip bg-gray-50 pb-20 text-gray-800 sm:pb-0'>
      <a
        href={whatsappUrl}
        className='sticky top-0 z-50 block bg-green-500 px-5 py-3 text-center font-semibold text-white shadow-lg hover:bg-green-600 md:hidden'
      >
        WhatsApp Barima Rentals
      </a>

      {/* TOP CONTACT STRIP */}
      <div className='bg-gray-800 text-gray-200 text-xs py-2'>
        <div className='max-w-6xl mx-auto px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center gap-1 text-center sm:text-left'>
          <p className='leading-relaxed'>
            Serving Georgetown, East Coast Demerara, East Bank Demerara, West
            Coast Demerara and West Bank Demerara, Guyana.
          </p>

          <p>
            WhatsApp:{' '}
            <a href={whatsappUrl} className='text-green-400 hover:underline'>
              627-5775
            </a>
          </p>
        </div>
      </div>
      <nav className='bg-gray-900 text-white shadow md:sticky md:top-0 md:z-[100]'>
        <div className='max-w-6xl mx-auto px-4 md:px-6 py-3 sm:py-4 flex flex-wrap items-center justify-between gap-3'>
          <div className='min-w-0 flex-1 sm:flex-none'>
            <div className='flex items-center gap-3'>
              <Image
                src='/images/logo.png'
                alt='Barima Rentals Logo'
                width={1254}
                height={1254}
                className='h-12 sm:h-14 w-auto shrink-0'
                priority
              />

              <div className='min-w-0 leading-tight'>
                <h1 className='font-bold text-lg'>Barima Rentals</h1>
                <p className='text-xs sm:text-sm text-gray-200'>
                  <span className='text-orange-400'>Formerly CF Rentals</span>
                  <span className='hidden sm:inline'>
                    {' '}
                    • Equipment Rental & Construction Logistics Solutions
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className='order-3 sm:order-none w-full sm:w-auto text-sm font-medium flex items-center justify-between sm:justify-start gap-2 sm:gap-4'>
            <a href='#equipment' className='py-2 hover:text-green-400'>
              Equipment
            </a>
            <a href='#transportation' className='py-2 hover:text-green-400'>
              Transport
            </a>
            <a href='#locations' className='py-2 hover:text-green-400'>
              Locations
            </a>
            <a href='#contact' className='py-2 hover:text-green-400'>
              Contact
            </a>
          </div>

          <a
            href={whatsappUrl}
            className='hidden bg-green-500 px-4 py-2 rounded-lg font-semibold hover:bg-green-600 shrink-0 md:inline-block'
          >
            WhatsApp
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className='overflow-hidden bg-white'>
        <div className='mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_0.92fr] lg:gap-14 lg:py-20'>
          <div className='max-w-2xl text-center lg:text-left'>
            <p className='mx-auto inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-orange-700 lg:mx-0'>
              Barima Rentals
            </p>

            <h1 className='mt-5 text-3xl font-bold leading-tight text-gray-950 sm:text-4xl md:text-5xl'>
              Scaffolding & Concrete Mixer Rentals in Georgetown and Surrounding
              Areas
            </h1>

            <p className='mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg lg:mx-0'>
              Reliable equipment for residential and commercial projects, with
              Canter transport available for equipment, construction materials
              and general cargo.
            </p>

            <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start'>
              <a
                href={whatsappUrl}
                className='inline-flex min-h-12 items-center justify-center rounded-xl bg-green-600 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-green-700/15 transition hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-200'
              >
                Check Availability
              </a>

              <a
                href='#equipment'
                className='inline-flex min-h-12 items-center justify-center rounded-xl border border-gray-300 bg-white px-7 py-3 text-base font-semibold text-gray-900 transition hover:border-orange-300 hover:text-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-100'
              >
                View Equipment
              </a>
            </div>

            <div className='mt-8 grid gap-3 text-sm text-gray-600 sm:grid-cols-3'>
              <div className='rounded-xl border border-gray-200 bg-gray-50 px-4 py-3'>
                Georgetown
              </div>
              <div className='rounded-xl border border-gray-200 bg-gray-50 px-4 py-3'>
                East Coast Demerara
              </div>
              <div className='rounded-xl border border-gray-200 bg-gray-50 px-4 py-3'>
                East Bank Demerara
              </div>
            </div>
          </div>

          <HeroCarousel />
        </div>
      </section>
      <section className='border-y border-gray-200 bg-gray-50 py-16 sm:py-20'>
        <div className='mx-auto max-w-4xl px-5 text-center sm:px-6'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl'>
            How to Book
          </h2>

          <div className='mt-8 grid gap-3 text-sm leading-relaxed text-gray-700 sm:grid-cols-2 lg:grid-cols-4'>
            <p className='rounded-xl border border-gray-200 bg-white px-4 py-4 shadow-sm'>
              1. Message us on WhatsApp
            </p>
            <p className='rounded-xl border border-gray-200 bg-white px-4 py-4 shadow-sm'>
              2. Send equipment needed, location, date and duration
            </p>
            <p className='rounded-xl border border-gray-200 bg-white px-4 py-4 shadow-sm'>
              3. We confirm availability and total cost
            </p>
            <p className='rounded-xl border border-gray-200 bg-white px-4 py-4 shadow-sm'>
              4. Schedule delivery or pickup
            </p>
          </div>
        </div>
      </section>

      {/* EQUIPMENT SECTION */}
      <section
        id='equipment'
        className='mx-auto max-w-6xl scroll-mt-36 px-5 py-16 sm:scroll-mt-28 sm:px-6 lg:py-24'
      >
        <div className='mx-auto max-w-3xl text-center'>
          <p className='text-sm font-bold uppercase tracking-[0.14em] text-orange-700'>
            Equipment Rentals
          </p>
          <h2 className='mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl'>
            Scaffolding, Concrete Mixers & Job-Site Equipment
          </h2>
          <p className='mt-4 text-base leading-relaxed text-gray-600'>
            Reliable rental equipment for residential and commercial projects,
            with scaffolding and concrete mixers as the core offering.
          </p>
        </div>

        <div className='mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7'>
          {equipmentItems.map((item) => (
            <article
              key={item.name}
              className={`flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none ${
                item.featured
                  ? 'border-orange-100 shadow-orange-900/5'
                  : 'border-gray-200'
              }`}
            >
              <div className='border-b border-gray-100 bg-gray-50'>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1200}
                  height={1600}
                  className='block h-auto w-full object-contain'
                  sizes='(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
                />
              </div>

              <div className='flex flex-1 flex-col p-5 sm:p-6'>
                <p className='text-xs font-bold uppercase tracking-[0.12em] text-green-700'>
                  {item.category}
                </p>
                <h3 className='mt-2 text-xl font-bold leading-tight text-gray-950'>
                  {item.name}
                </h3>
                <p className='mt-3 text-sm leading-relaxed text-gray-600'>
                  {item.description}
                </p>

                <div className='mt-auto pt-5'>
                  <div className='rounded-xl border border-gray-200 bg-gray-50 px-4 py-3'>
                    <p className='text-lg font-bold text-gray-950'>
                      {item.price}
                    </p>
                    {item.note ? (
                      <p className='mt-1 text-xs leading-relaxed text-gray-500'>
                        {item.note}
                      </p>
                    ) : null}
                  </div>
                </div>

                <a
                  href={createEquipmentWhatsappUrl(item.name)}
                  className='mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-200'
                >
                  Check Availability
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TRANSPORTATION SOLUTIONS */}
      <section
        id='transportation'
        className='scroll-mt-36 bg-gray-50 py-16 sm:scroll-mt-28 sm:py-20'
      >
        <div className='max-w-5xl mx-auto px-5 sm:px-6'>
          <div className='text-center max-w-3xl mx-auto'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl'>
              Transportation Solutions
            </h2>
            <p className='mt-4 text-sm sm:text-base leading-relaxed text-gray-600'>
              Barima Rentals assists with transportation and logistics needs for
              construction projects, equipment moves, goods transport and
              job-site coordination across Georgetown and surrounding areas in
              Guyana.
            </p>
          </div>

          <div className='mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {[
              'Construction material transport',
              'Equipment transport',
              'Goods transport',
              'Job-site logistics support',
              'Delivery services',
            ].map((service) => (
              <div
                key={service}
                className='rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm'
              >
                <h3 className='font-semibold leading-snug text-gray-950'>
                  {service}
                </h3>
              </div>
            ))}
          </div>

          <div className='mt-10 rounded-2xl border border-green-100 bg-white p-5 shadow-sm sm:p-6'>
            <h3 className='border-l-4 border-green-500 pl-4 font-semibold text-gray-950'>
              Advance Booking Recommended
            </h3>
            <p className='mt-2 text-sm leading-relaxed text-gray-700'>
              Customers are encouraged to book transportation ahead of time to
              support better scheduling, equipment availability, efficient
              planning and timely service.
            </p>
          </div>

          <div className='mt-8 text-center'>
            <a
              href={whatsappUrl}
              className='inline-flex min-h-12 items-center justify-center rounded-xl bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-200'
            >
              Arrange Transport on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className='bg-white py-16 sm:py-20'>
        <div className='max-w-6xl mx-auto px-5 sm:px-6'>
          <h2 className='mb-10 text-center text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl'>
            Why Choose Barima Rentals?
          </h2>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6'>
            {trustItems.map((item) => (
              <div
                key={item.title}
                className='rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm sm:p-6'
              >
                <div className='mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-green-50 text-green-600'>
                  <svg
                    aria-hidden='true'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.8'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-6 w-6'
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className='font-semibold leading-snug text-gray-950'>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id='locations'
        className='scroll-mt-36 bg-gray-50 py-16 sm:scroll-mt-28 sm:py-20'
      >
        <div className='max-w-5xl mx-auto px-6 text-center'>
          <h2 className='mb-10 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl'>
            Our Locations
          </h2>

          <div className='grid md:grid-cols-2 gap-8 text-left'>
            <div className='rounded-2xl border border-gray-200 bg-white p-6 shadow-sm'>
              <h3 className='text-lg font-semibold text-gray-950'>
                Kitty Location
              </h3>
              <a
                href='https://maps.app.goo.gl/q9DfoZSDfBAbQWnV6'
                className='mt-3 inline-block text-sm font-semibold text-green-700 hover:text-green-800 hover:underline'
              >
                Get Directions on Google Maps
              </a>

              <p className='mt-3'>
                Lot 6 &quot;D&quot; Station Street Kitty, Georgetown, Guyana
              </p>

              <p className='mt-3 text-sm text-gray-600'>
                Located about 4 houses away from Seeta&apos;s Bar.
              </p>
            </div>

            <div className='rounded-2xl border border-gray-200 bg-white p-6 shadow-sm'>
              <h3 className='text-lg font-semibold text-gray-950'>
                Liliendaal Location
              </h3>
              <a
                href='https://maps.app.goo.gl/4hjQoFZJiu8mbnno6'
                className='mt-3 inline-block text-sm font-semibold text-green-700 hover:text-green-800 hover:underline'
              >
                Get Directions on Google Maps
              </a>

              <p className='mt-3'>
                Lot A Rupert Craig Highway Liliendaal, East Coast Demerara,
                Guyana
              </p>

              <p className='mt-3 text-sm text-gray-600'>
                Located next to Scotty&apos;s Smoke House.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id='contact'
        className='scroll-mt-36 bg-white px-5 py-16 text-center sm:scroll-mt-28 sm:py-20'
      >
        <h2 className='text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl'>
          Contact Us
        </h2>
        <p className='mt-4 text-gray-700'>Georgetown, Guyana</p>
        <p className='mt-3 text-sm text-gray-600 max-w-md mx-auto leading-relaxed'>
          For faster booking, send the equipment needed, location, date and
          rental duration.
        </p>

        <div className='mt-6 flex flex-col items-center gap-4'>
          <a
            href={whatsappUrl}
            className='inline-flex min-h-12 w-full max-w-xs items-center justify-center rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-200'
          >
            Contact on WhatsApp
          </a>

          <a
            href='mailto:clevelandforde@yahoo.com'
            className='inline-flex min-h-12 w-full max-w-xs items-center justify-center rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-200'
          >
            Send Email
          </a>
        </div>
      </section>

      <footer className='bg-gray-900 px-5 py-8 text-center text-white'>
        <div className='mx-auto max-w-4xl'>
          <p className='text-lg font-semibold'>Barima Rentals</p>
          <p className='mt-2 text-sm leading-relaxed text-gray-400'>
            Formerly CF Rentals. Serving Georgetown and surrounding areas in
            Guyana with reliable construction equipment rentals and transport
            solutions.
          </p>

          <p className='mt-3 text-sm'>Construction Equipment Rentals</p>

          <p className='mt-3 text-sm'>
            Lot 6 &quot;D&quot; Station Street, Kitty, Georgetown
          </p>

          <p className='text-sm'>
            Lot A Rupert Craig Highway, Liliendaal E.C.D
          </p>

          <p className='mt-4 text-sm'>
            © {new Date().getFullYear()} Barima Rentals
          </p>

          <p className='mt-3 text-xs text-gray-500'>
            Powered by <span className='font-medium'>Barima Venture</span>
          </p>
        </div>
      </footer>

      <a
        href={`tel:${phoneNumber}`}
        aria-label='Call Barima Rentals'
        className='fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white shadow-md ring-1 ring-white/80 transition hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-green-300 sm:bottom-6 sm:right-6 sm:h-auto sm:w-auto sm:px-4 sm:py-2.5 call-pulse'
      >
        <span className='text-lg leading-none sm:hidden'>☎</span>
        <span className='hidden sm:inline font-semibold'>Call 627-5775</span>
      </a>
    </main>
  );
}
