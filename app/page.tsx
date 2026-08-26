import Image from 'next/image';
import HeroSection from './HeroSection';

const trustItems = [
  {
    title: 'Reliable Equipment',
    icon: (
      <path d='M12 3 4.5 6v5.5c0 4.1 2.8 7.9 7.5 9.5 4.7-1.6 7.5-5.4 7.5-9.5V6L12 3Zm3.4 7.2-4.2 4.2-2.1-2.1' />
    ),
  },
  {
    title: 'Advance Booking & Reliable Scheduling',
    icon: (
      <path d='M7 3v3M17 3v3M4 8h16M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm4 9 2 2 4-4' />
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
    icon: <path d='M4 21V8l8-5 8 5v13M9 21v-7h6v7M8 10h.01M16 10h.01' />,
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
    group: 'Scaffolding',
    category: 'Scaffolding Rental',
    name: '3ft Scaffolding',
    image: '/images/3ft-scaffolding-hero.PNG',
    width: 891,
    height: 1373,
    alt: '3ft scaffolding rental equipment from Barima Rentals',
    description:
      'Standard 3ft x 6ft scaffolding rental for residential, commercial and construction projects that need stable elevated access.',
    price: '$500-$700 per pair/day',
    note: 'Based on duration. Cement work is $700 per pair/day.',
    featured: true,
  },
  {
    group: 'Scaffolding',
    category: 'Scaffolding Rental',
    name: '2ft Scaffolding',
    image: '/images/2ft-scaffolding.jpeg',
    width: 1023,
    height: 1537,
    alt: '2ft scaffolding rental equipment for tight access areas',
    description:
      'Narrow 2ft scaffolding for side passages, tight access areas and confined spaces where standard scaffold will not fit.',
    price: '$700 per pair/day',
    note: 'Useful for tight spaces and narrow work areas.',
    featured: true,
  },
  {
    group: 'Concrete Mixers',
    category: 'Concrete Mixer',
    name: '500L Concrete Mixer',
    image: '/images/500l-concrete-mixer.jpg',
    width: 1152,
    height: 710,
    alt: '500L concrete mixer rental from Barima Rentals',
    description:
      'Reliable higher-volume concrete mixing for bigger jobs and active site use.',
    price: 'G$35,000/day',
    note: 'Better rates available for longer-term rentals.',
    featured: true,
  },
  {
    group: 'Concrete Mixers',
    category: 'Concrete Mixer',
    name: '450L Concrete Mixer',
    image: '/images/450l-concrete-mixer.PNG',
    width: 1167,
    height: 1005,
    alt: '450L concrete mixer rental from Barima Rentals',
    description:
      'Concrete mixer rental for larger pours and active construction projects that need a higher-capacity mixer option.',
    price: 'G$33,000/day',
    note: '',
    featured: true,
  },
  {
    group: 'Concrete Mixers',
    category: 'Concrete Mixer',
    name: '400L Concrete Mixer',
    image: '/images/400l-concrete-mixer.PNG',
    width: 952,
    height: 1079,
    alt: '400L concrete mixer rental from Barima Rentals',
    description:
      'Concrete mixer rental for residential and commercial projects needing reliable daily mixing capacity.',
    price: 'G$28,000/day',
    note: '',
    featured: true,
  },
  {
    group: 'Concrete Mixers',
    category: 'Concrete Mixer',
    name: '350L Concrete Mixer',
    image: '/images/350l-concrete-mixer.PNG',
    width: 963,
    height: 1211,
    alt: '350L concrete mixer rental from Barima Rentals',
    description:
      'Concrete mixer rental for smaller job-site pours, residential work and general cement mixing needs.',
    price: 'G$23,000/day',
    note: '',
    featured: true,
  },
  {
    group: 'Compaction Equipment',
    category: 'Compaction Equipment',
    name: '90kg Plate Compactor',
    image: '/images/90kg-plate-compactor.jpeg',
    width: 924,
    height: 1600,
    alt: '90kg plate compactor rental from Barima Rentals',
    description:
      '90kg plate compactor rental for soil compaction, driveways, foundation preparation and construction site groundwork.',
    price: 'G$15,000/day',
    note: 'Also commonly requested as a vibrating plate compactor.',
    featured: false,
  },
];

const equipmentGroups = [
  'Scaffolding',
  'Concrete Mixers',
  'Compaction Equipment',
];

const transportItems = [
  {
    title: 'Hiab Crane Transport',
    image: '/images/hiab-crane-canter.png',
    width: 1371,
    height: 850,
    alt: 'Hiab crane canter truck for lifting and transport services from Barima Rentals',
    description:
      'Lifting and transport support for equipment, materials, signs and other heavy or difficult-to-handle loads.',
    buttonText: 'Book Hiab Transport',
    message:
      'Hello Barima Rentals, I would like to book the Hiab crane truck. Pickup location: [location]. Delivery location: [location]. Date needed: [date]. Please let me know what other details you need.',
  },
  {
    title: 'Enclosed Canter Transport',
    image: '/images/box-enclosed-canter.png',
    width: 1448,
    height: 1086,
    alt: 'Enclosed box canter truck for protected transport from Barima Rentals',
    description:
      'Enclosed transport for dry goods, household items and loads requiring added protection while in transit.',
    buttonText: 'Book Enclosed Transport',
    message:
      'Hello Barima Rentals, I would like to book the enclosed canter. Pickup location: [location]. Delivery location: [location]. Date needed: [date]. Please let me know what other details you need.',
  },
  {
    title: 'Powergate Canter Transport',
    image: '/images/powergate-tailgate-canter.jpg',
    width: 473,
    height: 467,
    alt: 'Powergate tailgate canter truck for loading and transport from Barima Rentals',
    description:
      'Suitable for equipment, appliances and heavier items that benefit from powered loading and unloading.',
    buttonText: 'Book Powergate Transport',
    message:
      'Hello Barima Rentals, I would like to book the powergate canter. Pickup location: [location]. Delivery location: [location]. Date needed: [date]. Please let me know what other details you need.',
  },
];

export default function BarimaRentalsHome() {
  const phoneNumber = '+5926275775';
  const whatsappUrl =
    'https://wa.me/5926275775?text=Hello%20Barima%20Rentals%2C%20I%27d%20like%20to%20check%20equipment%20availability.';

  const createEquipmentWhatsappUrl = (equipmentName: string) =>
    `https://wa.me/5926275775?text=${encodeURIComponent(
      `Hello Barima Rentals, I would like to book the ${equipmentName}. Date needed: [date]. Number of days: [duration]. Delivery location: [location]. Please confirm the booking details and total cost.`,
    )}`;

  const createTransportWhatsappUrl = (message: string) =>
    `https://wa.me/5926275775?text=${encodeURIComponent(message)}`;

  return (
    <main className='min-h-screen overflow-x-clip bg-gray-50 pb-20 pt-[calc(env(safe-area-inset-top,0px)+2.5rem)] text-gray-800 sm:pb-0 md:pt-0'>
      <a
        href={whatsappUrl}
        className='fixed left-0 right-0 top-0 z-[120] block bg-green-500 px-4 pb-2.5 pt-[calc(env(safe-area-inset-top,0px)+0.625rem)] text-center text-sm font-semibold text-white shadow-lg hover:bg-green-600 md:hidden'
      >
        WhatsApp Barima Rentals
      </a>

      {/* TOP CONTACT STRIP */}
      <div className='bg-gray-800 py-2 text-xs text-gray-200'>
        <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-1 px-4 text-center sm:flex-row sm:text-left md:px-6'>
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
        <div className='mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:py-4 md:flex-nowrap md:gap-2 md:px-4 lg:gap-3 lg:px-6'>
          <div className='min-w-0 flex-1 sm:flex-none'>
            <div className='flex items-center gap-3'>
              <Image
                src='/images/barima-rentals-logo.png'
                alt='Barima Rentals Logo'
                width={1536}
                height={1024}
                className='h-12 w-auto shrink-0 sm:h-14 md:h-10 lg:h-14'
                priority
              />

              <div className='min-w-0 leading-tight'>
                <p className='text-lg font-bold md:text-sm lg:text-lg'>
                  Barima Rentals
                </p>

                <p className='text-xs text-gray-200 sm:text-sm md:text-xs lg:text-sm'>
                  Equipment Rental & Logistics Solutions
                </p>
              </div>
            </div>
          </div>

          <div className='hidden items-center gap-2 text-sm font-medium md:flex md:text-[11px] lg:gap-4 lg:text-sm'>
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
            className='hidden shrink-0 rounded-lg bg-green-500 px-4 py-2 font-semibold hover:bg-green-600 md:inline-block md:px-2 md:text-sm lg:px-4'
          >
            WhatsApp
          </a>
        </div>
      </nav>

      {/* On phones, this row scrolls normally at first, then sticks directly
          beneath the fixed WhatsApp bar after the branding section scrolls away. */}
      <nav
        aria-label='Mobile navigation'
        className='sticky top-[calc(env(safe-area-inset-top,0px)+2.5rem)] z-[110] grid grid-cols-4 items-center bg-gray-900 px-2 py-3 text-center text-sm font-medium text-white shadow md:hidden'
      >
        <a
          href='#equipment'
          className='flex min-h-10 items-center justify-center px-1 hover:text-green-400'
        >
          Equipment
        </a>

        <a
          href='#transportation'
          className='flex min-h-10 items-center justify-center px-1 hover:text-green-400'
        >
          Transport
        </a>

        <a
          href='#locations'
          className='flex min-h-10 items-center justify-center px-1 hover:text-green-400'
        >
          Locations
        </a>

        <a
          href='#contact'
          className='flex min-h-10 items-center justify-center px-1 hover:text-green-400'
        >
          Contact
        </a>
      </nav>

      <HeroSection whatsappUrl={whatsappUrl} />

      {/* EQUIPMENT SECTION */}
      <section
        id='equipment'
        className='mx-auto max-w-6xl scroll-mt-36 px-5 py-14 sm:scroll-mt-28 sm:px-6 lg:py-20'
      >
        <div className='mx-auto max-w-3xl text-center'>
          <p className='text-sm font-bold uppercase tracking-[0.14em] text-orange-700'>
            Equipment Rentals
          </p>

          <h2 className='mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl'>
            Scaffolding, Concrete Mixers & Job-Site Equipment
          </h2>

          <p className='mt-4 text-base leading-relaxed text-gray-600'>
            Reliable rental equipment for residential and commercial projects.
          </p>

          <p className='mx-auto mt-5 max-w-xl rounded-xl border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-800'>
            Advance booking is recommended for timely service.
          </p>
        </div>

        <div className='mt-10 space-y-10'>
          {equipmentGroups.map((group) => {
            const groupItems = equipmentItems.filter(
              (item) => item.group === group,
            );

            return (
              <div key={group}>
                <h3 className='text-lg font-bold tracking-tight text-gray-950 sm:text-xl'>
                  {group}
                </h3>

                {group === 'Concrete Mixers' ? (
                  <p className='mt-2 text-sm leading-relaxed text-gray-600'>
                    Also commonly requested as a cement mixer or ransom.
                  </p>
                ) : null}

                <div
                  className={`mt-4 grid gap-5 sm:grid-cols-2 lg:gap-7 ${
                    groupItems.length === 3 ? 'lg:grid-cols-3' : ''
                  }`}
                >
                  {groupItems.map((item) => (
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
                          width={item.width}
                          height={item.height}
                          className='block h-auto w-full object-contain'
                          sizes='(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
                        />
                      </div>

                      <div className='flex flex-1 flex-col p-5 sm:p-6'>
                        <p className='text-xs font-bold uppercase tracking-[0.12em] text-green-700'>
                          {item.category}
                        </p>

                        <div className='mt-2'>
                          <h4 className='text-xl font-bold leading-tight text-gray-950'>
                            {item.name}
                          </h4>

                          <p className='mt-1 text-base font-bold leading-tight text-gray-950'>
                            {item.price}
                          </p>
                        </div>

                        <p className='mt-3 text-sm leading-relaxed text-gray-600'>
                          {item.description}
                        </p>

                        {item.note ? (
                          <p className='mt-2 text-xs leading-relaxed text-gray-500'>
                            {item.note}
                          </p>
                        ) : null}

                        <div className='mt-auto pt-5'>
                          <a
                            href={createEquipmentWhatsappUrl(item.name)}
                            className='inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-200'
                          >
                            Book Now
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* TRANSPORTATION SOLUTIONS */}
      <section
        id='transportation'
        className='scroll-mt-36 bg-gray-50 py-16 sm:scroll-mt-28 sm:py-20'
      >
        <div className='mx-auto max-w-5xl px-5 sm:px-6'>
          <div className='mx-auto max-w-3xl text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl'>
              Transportation Solutions
            </h2>

            <p className='mt-4 text-sm leading-relaxed text-gray-600 sm:text-base'>
              Reliable transport for equipment, materials, household moves,
              goods and signs across Georgetown and surrounding areas.
            </p>
          </div>

          <div className='mx-auto mt-5 max-w-xl rounded-xl border border-orange-200 bg-orange-50 px-4 py-2 text-center text-sm font-semibold text-orange-800'>
            Advance booking is recommended for timely service.
          </div>

          <div className='mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-7'>
            {transportItems.map((item) => (
              <article
                key={item.title}
                className='flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none'
              >
                <div className='border-b border-gray-100 bg-gray-50'>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    className='block h-auto w-full object-contain'
                    sizes='(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
                  />
                </div>

                <div className='flex flex-1 flex-col p-5 sm:p-6'>
                  <h3 className='text-xl font-bold leading-tight text-gray-950'>
                    {item.title}
                  </h3>

                  <p className='mt-3 text-sm leading-relaxed text-gray-600'>
                    {item.description}
                  </p>

                  <div className='mt-auto pt-5'>
                    <a
                      href={createTransportWhatsappUrl(item.message)}
                      className='inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-200'
                    >
                      {item.buttonText}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='border-y border-gray-200 bg-gray-50 py-10 sm:py-12 lg:py-14'>
        <div className='mx-auto max-w-4xl px-5 text-center sm:px-6'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl'>
            How to Book
          </h2>

          <div className='mt-5 grid gap-2 text-sm leading-relaxed text-gray-700 sm:grid-cols-2 lg:grid-cols-4'>
            <p className='rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm'>
              1. Message us on WhatsApp
            </p>

            <p className='rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm'>
              2. Send the equipment, location, date and duration
            </p>

            <p className='rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm'>
              3. Delivery or pickup is scheduled
            </p>

            <p className='rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm'>
              4. We confirm the booking details and total cost
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className='bg-white py-16 sm:py-20'>
        <div className='mx-auto max-w-6xl px-5 sm:px-6'>
          <h2 className='mb-10 text-center text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl'>
            Why Choose Barima Rentals?
          </h2>

          <div className='grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3'>
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
        <div className='mx-auto max-w-5xl px-6 text-center'>
          <h2 className='mb-10 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl'>
            Our Locations
          </h2>

          <div className='grid gap-8 text-left md:grid-cols-2'>
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

        <p className='mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-600'>
          For faster booking, send the equipment needed, location, date and
          rental duration.
        </p>

        <div className='mx-auto mt-5 max-w-md rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm text-gray-700'>
          <h3 className='font-semibold text-gray-950'>Opening Hours</h3>

          <p className='mt-2'>Monday–Friday: 8:00 a.m.–5:00 p.m.</p>

          <p>Saturday: Closed</p>

          <p>Sunday: 9:00 a.m.–4:00 p.m.</p>
        </div>

        <div className='mt-6 flex flex-col items-center gap-4'>
          <a
            href={whatsappUrl}
            className='inline-flex min-h-12 w-full max-w-xs items-center justify-center rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-200'
          >
            Contact on WhatsApp
          </a>

          <a
            href='mailto:hello@barimarentals.com'
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
            Serving Georgetown and surrounding areas in Guyana with reliable
            construction equipment rentals and transport solutions.
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
        className='call-pulse fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white shadow-md ring-1 ring-white/80 transition hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-green-300 sm:bottom-6 sm:right-6 sm:h-auto sm:w-auto sm:px-4 sm:py-2.5'
      >
        <span className='text-lg leading-none sm:hidden'>☎</span>

        <span className='hidden font-semibold sm:inline'>Call 627-5775</span>
      </a>
    </main>
  );
}
