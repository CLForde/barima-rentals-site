import Image from 'next/image';

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

export default function BarimaRentalsHome() {
  const phoneNumber = '+5926275775';
  const whatsappUrl =
    'https://wa.me/5926275775?text=Hello%20Barima%20Rentals%2C%20I%27d%20like%20to%20check%20equipment%20availability.';

  return (
    <main className='min-h-screen bg-gray-50 pb-20 text-gray-800 sm:pb-0'>
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
      <nav className='bg-gray-900 text-white sticky top-0 z-50 shadow'>
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
            <a href='#pricing' className='py-2 hover:text-green-400'>
              Pricing
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
            className='bg-green-500 px-4 py-2 rounded-lg font-semibold hover:bg-green-600 shrink-0'
          >
            WhatsApp
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className='relative min-h-[480px] sm:min-h-[420px] flex items-center justify-center text-white'>
        <Image
          src='/images/hero.png'
          alt='Barima Rentals Equipment'
          className='absolute w-full h-full object-cover'
          fill
          priority
          sizes='100vw'
        />

        <div className='absolute inset-0 bg-black/60'></div>

        <div className='relative z-10 text-center px-5 sm:px-6 py-12'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight'>
            Scaffolding Rentals in Georgetown & Surrounding Areas
          </h1>

          <p className='mt-4 text-base sm:text-lg max-w-xl mx-auto leading-relaxed'>
            3ft × 6ft and 2ft × 6ft scaffolding available for residential,
            commercial, and construction projects.
          </p>

          <p className='mt-3 text-base sm:text-lg max-w-xl mx-auto leading-relaxed'>
            Also offering concrete mixer (ransom) rentals, plate compactors, and
            transport solutions.
          </p>

          <p className='mt-3 text-sm text-gray-200'>
            Serving Georgetown, East Coast Demerara, East Bank Demerara, West
            Coast Demerara and West Bank Demerara, Guyana.
          </p>
          <a
            href={whatsappUrl}
            className='inline-block mt-8 bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600'
          >
            Book Equipment on WhatsApp
          </a>
        </div>
      </section>
      <section className='bg-gray-50 py-16'>
        <div className='max-w-4xl mx-auto text-center px-6'>
          <h2 className='text-3xl font-bold mb-6'>How to Book</h2>

          <div className='space-y-3 text-sm'>
            <p>1. Message us on WhatsApp</p>
            <p>2. Send equipment needed, location, date and duration</p>
            <p>3. We confirm availability and total cost</p>
            <p>4. Schedule delivery or pickup</p>
          </div>
        </div>
      </section>

      {/* EQUIPMENT SECTION */}
      <section
        id='equipment'
        className='max-w-6xl mx-auto py-16 px-5 sm:px-6 scroll-mt-36 sm:scroll-mt-28'
      >
        <h2 className='text-3xl font-bold text-center mb-10'>
          Equipment Available
        </h2>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
          <div className='bg-white p-5 sm:p-6 rounded-xl shadow text-center flex flex-col'>
            <Image
              src='/images/scaffold-3ft.png'
              alt='3ft Scaffold Rental'
              width={1200}
              height={1600}
              className='h-56 sm:h-64 w-full rounded-lg object-cover mb-4'
              sizes='(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'
            />

            <h3 className='font-semibold'>3ft Scaffold Rental</h3>
            <p className='text-sm mt-2 leading-relaxed'>
              Standard 3ft × 6ft scaffold suitable for residential, commercial
              and construction projects requiring stable elevated work
              platforms.
            </p>
            <a
              href={whatsappUrl}
              className='mt-5 inline-block bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600'
            >
              Check Availability
            </a>
          </div>

          <div className='bg-white p-5 sm:p-6 rounded-xl shadow text-center flex flex-col'>
            <Image
              src='/images/scaffold-2ft.png'
              alt='2ft Scaffold Rental'
              width={1200}
              height={1600}
              className='h-56 sm:h-64 w-full rounded-lg object-cover mb-4'
              sizes='(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'
            />

            <h3 className='font-semibold'>2ft Scaffold Rental</h3>
            <p className='text-sm mt-2 leading-relaxed'>
              Ideal for narrow side passages, tight access areas and confined
              spaces where standard 3ft scaffold will not fit.
            </p>
            <a
              href={whatsappUrl}
              className='mt-5 inline-block bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600'
            >
              Check Availability
            </a>
          </div>

          <div className='bg-white p-5 sm:p-6 rounded-xl shadow text-center flex flex-col'>
            <Image
              src='/images/mixer.png'
              alt='Concrete Mixer'
              width={1200}
              height={1600}
              className='h-56 sm:h-64 w-full rounded-lg object-cover mb-4'
              sizes='(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'
            />
            <h3 className='font-semibold'>Concrete Mixer Rental</h3>
            <p className='text-sm mt-2 leading-relaxed'>
              500L and 400L concrete mixer rentals available for construction
              projects, foundation work and job site concrete preparation.
              Commonly referred to as “ransom”.
            </p>
            <a
              href={whatsappUrl}
              className='mt-5 inline-block bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600'
            >
              Check Availability
            </a>
          </div>

          <div className='bg-white p-5 sm:p-6 rounded-xl shadow text-center flex flex-col'>
            <Image
              src='/images/compactor.png'
              alt='Plate Compactor'
              width={924}
              height={1600}
              className='h-56 sm:h-64 w-full rounded-lg object-cover mb-4'
              sizes='(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'
            />
            <h3 className='font-semibold'>Plate Compactor Rental</h3>
            <p className='text-sm mt-2 leading-relaxed'>
              90kg plate compactor rental available for soil compaction,
              driveways, foundation preparation and construction site
              groundwork.
            </p>
            <a
              href={whatsappUrl}
              className='mt-5 inline-block bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600'
            >
              Check Availability
            </a>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section
        id='pricing'
        className='mt-16 bg-gray-100 p-6 sm:p-8 rounded-xl shadow text-left max-w-3xl mx-4 sm:mx-auto scroll-mt-36 sm:scroll-mt-28'
      >
        <h2 className='text-2xl font-bold mb-6 text-center'>Rental Pricing</h2>

        <div className='space-y-4 text-sm leading-relaxed'>
          <div>
            <h3 className='font-semibold'>Scaffolding</h3>
            <p>
              3ft x 6ft (standard): $500–$700 per pair/day (based on duration)
            </p>
            <p>2ft x 6ft (tight spaces): $700 per pair/day</p>
            <p className='text-gray-600'>
              Cement work is $700 per pair regardless of duration.
            </p>
          </div>

          <div>
            <h3 className='font-semibold'>Concrete Mixers</h3>
            <p>400L mixer: $25,000/day</p>
            <p>500L mixer: $35,000/day </p>
            <p className='text-gray-600'>
              Also known as cement mixer, mixer or “ransom”.
            </p>
          </div>

          <div>
            <h3 className='font-semibold'>Plate Compactor</h3>
            <p>90kg compactor available: $15,000/day</p>
          </div>

          <div>
            <h3 className='font-semibold'>Delivery & Pickup</h3>
            <p>Available across Georgetown and surrounding areas</p>
            <p>Starting from $12,000 (delivery & pickup)</p>
            <p className='text-gray-600'>
              Best suited for medium to large jobs or longer rental periods.
            </p>
          </div>
        </div>
      </section>

      {/* TRANSPORTATION SOLUTIONS */}
      <section
        id='transportation'
        className='bg-white py-16 scroll-mt-36 sm:scroll-mt-28'
      >
        <div className='max-w-5xl mx-auto px-5 sm:px-6'>
          <div className='text-center max-w-3xl mx-auto'>
            <h2 className='text-3xl font-bold'>Transportation Solutions</h2>
            <p className='mt-4 text-sm sm:text-base leading-relaxed text-gray-600'>
              Barima Rentals assists with transportation and logistics needs for
              construction projects, equipment moves, goods transport and
              job-site coordination across Georgetown and surrounding areas in
              Guyana.
            </p>
          </div>

          <div className='mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              'Construction material transport',
              'Equipment transport',
              'Goods transport',
              'Job-site logistics support',
              'Delivery services',
            ].map((service) => (
              <div
                key={service}
                className='bg-gray-50 p-5 rounded-xl shadow text-center'
              >
                <h3 className='font-semibold'>{service}</h3>
              </div>
            ))}
          </div>

          <div className='mt-10 bg-gray-100 border-l-4 border-green-500 p-5 sm:p-6 rounded-xl shadow-sm'>
            <h3 className='font-semibold'>Advance Booking Recommended</h3>
            <p className='mt-2 text-sm leading-relaxed text-gray-700'>
              Customers are encouraged to book transportation ahead of time to
              support better scheduling, equipment availability, efficient
              planning and timely service.
            </p>
          </div>

          <div className='mt-8 text-center'>
            <a
              href={whatsappUrl}
              className='inline-block bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600'
            >
              Arrange Transport on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className='bg-gray-50 py-16'>
        <div className='max-w-6xl mx-auto px-5 sm:px-6'>
          <h2 className='text-3xl font-bold text-center mb-10'>
            Why Choose Barima Rentals?
          </h2>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6'>
            {trustItems.map((item) => (
              <div
                key={item.title}
                className='bg-white p-5 sm:p-6 rounded-xl shadow text-center'
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
                <h3 className='font-semibold leading-snug'>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id='locations'
        className='bg-gray-100 py-16 scroll-mt-36 sm:scroll-mt-28'
      >
        <div className='max-w-5xl mx-auto px-6 text-center'>
          <h2 className='text-3xl font-bold mb-10'>Our Locations</h2>

          <div className='grid md:grid-cols-2 gap-8 text-left'>
            <div className='bg-white p-6 rounded-xl shadow'>
              <h3 className='font-semibold text-lg'>Kitty Location</h3>
              <a
                href='https://maps.app.goo.gl/q9DfoZSDfBAbQWnV6'
                className='text-green-600 text-sm mt-3 inline-block'
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

            <div className='bg-white p-6 rounded-xl shadow'>
              <h3 className='font-semibold text-lg'>Liliendaal Location</h3>
              <a
                href='https://maps.app.goo.gl/4hjQoFZJiu8mbnno6'
                className='text-green-600 text-sm mt-3 inline-block'
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
        className='py-20 px-5 text-center scroll-mt-36 sm:scroll-mt-28'
      >
        <h2 className='text-3xl font-bold'>Contact Us</h2>
        <p className='mt-4'>Georgetown, Guyana</p>
        <p className='mt-3 text-sm text-gray-600 max-w-md mx-auto leading-relaxed'>
          For faster booking, send the equipment needed, location, date and
          rental duration.
        </p>

        <div className='mt-6 flex flex-col items-center gap-4'>
          <a
            href={whatsappUrl}
            className='bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 w-full max-w-xs'
          >
            Contact on WhatsApp
          </a>

          <a
            href='mailto:clevelandforde@yahoo.com'
            className='bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 w-full max-w-xs'
          >
            Send Email
          </a>
        </div>
      </section>

      <footer className='bg-gray-900 text-white py-8 text-center'>
        <p className='font-semibold text-lg'>Barima Rentals</p>
        <p className='text-sm text-gray-400 mt-1'>
          Formerly CF Rentals. Serving Georgetown and surrounding areas in
          Guyana with reliable construction equipment rentals and transport
          solutions.
        </p>

        <p className='mt-3 text-sm'>Construction Equipment Rentals</p>

        <p className='mt-3 text-sm'>
          Lot 6 &quot;D&quot; Station Street, Kitty, Georgetown
        </p>

        <p className='text-sm'>Lot A Rupert Craig Highway, Liliendaal E.C.D</p>

        <p className='mt-4 text-sm'>
          © {new Date().getFullYear()} Barima Rentals
        </p>
      </footer>

      <a
        href={whatsappUrl}
        className='fixed bottom-4 left-4 right-20 z-50 bg-green-500 text-white text-center px-5 py-3 rounded-lg font-semibold shadow-lg hover:bg-green-600 sm:hidden'
      >
        WhatsApp Barima Rentals
      </a>

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
