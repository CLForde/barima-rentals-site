import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://barimarentals.com/#localbusiness',
  name: 'Barima Rentals',
  alternateName: 'CF Rentals',
  description:
    'Barima Rentals is a construction equipment rental company serving Georgetown, Guyana, East Coast Demerara, Guyana, East Bank Demerara, Guyana, West Coast Demerara, Guyana and West Bank Demerara, Guyana with 3ft scaffold rental, 2ft scaffold rental, concrete mixer rental, plate compactor rental, delivery, pickup and transportation logistics support.',
  url: 'https://barimarentals.com',
  telephone: '+592-627-5775',
  email: 'clevelandforde@yahoo.com',
  logo: 'https://barimarentals.com/images/logo.png',
  image: [
    'https://barimarentals.com/images/hero.png',
    'https://barimarentals.com/images/scaffold-3ft.png',
    'https://barimarentals.com/images/scaffold-2ft.png',
    'https://barimarentals.com/images/mixer.png',
    'https://barimarentals.com/images/compactor.png',
  ],
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'Lot 6D Station Street, Kitty',
      addressLocality: 'Georgetown, Guyana',
      addressRegion: 'Demerara-Mahaica',
      addressCountry: 'GY',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'Lot A Rupert Craig Highway, Liliendaal',
      addressLocality: 'East Coast Demerara, Guyana',
      addressRegion: 'Demerara-Mahaica',
      addressCountry: 'GY',
    },
  ],
  areaServed: [
    { '@type': 'Place', name: 'Georgetown, Guyana' },
    { '@type': 'Place', name: 'East Coast Demerara, Guyana' },
    { '@type': 'Place', name: 'East Bank Demerara, Guyana' },
    { '@type': 'Place', name: 'West Coast Demerara, Guyana' },
    { '@type': 'Place', name: 'West Bank Demerara, Guyana' },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+592-627-5775',
      contactType: 'customer inquiries',
      areaServed: 'GY',
      availableLanguage: 'English',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+592-627-5775',
      url: 'https://wa.me/5926275775',
      contactType: 'WhatsApp customer inquiries',
      areaServed: 'GY',
      availableLanguage: 'English',
    },
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: '3ft Scaffold Rental',
        serviceType: 'Construction equipment rental',
        areaServed: [
          'Georgetown, Guyana',
          'East Coast Demerara, Guyana',
          'East Bank Demerara, Guyana',
          'West Coast Demerara, Guyana',
          'West Bank Demerara, Guyana',
        ],
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: '2ft Scaffold Rental',
        serviceType: 'Construction equipment rental',
        areaServed: [
          'Georgetown, Guyana',
          'East Coast Demerara, Guyana',
          'East Bank Demerara, Guyana',
          'West Coast Demerara, Guyana',
          'West Bank Demerara, Guyana',
        ],
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Concrete Mixer Rental',
        alternateName: ['Cement Mixer Rental', 'Mixer Rental', 'Ransom Rental'],
        serviceType: 'Construction equipment rental',
        areaServed: [
          'Georgetown, Guyana',
          'East Coast Demerara, Guyana',
          'East Bank Demerara, Guyana',
          'West Coast Demerara, Guyana',
          'West Bank Demerara, Guyana',
        ],
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Plate Compactor Rental',
        serviceType: 'Construction equipment rental',
        areaServed: [
          'Georgetown, Guyana',
          'East Coast Demerara, Guyana',
          'East Bank Demerara, Guyana',
          'West Coast Demerara, Guyana',
          'West Bank Demerara, Guyana',
        ],
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Transportation Solutions',
        serviceType:
          'Construction material transport, equipment transport, goods transport, job-site logistics support and delivery services',
        areaServed: [
          'Georgetown, Guyana',
          'East Coast Demerara, Guyana',
          'East Bank Demerara, Guyana',
          'West Coast Demerara, Guyana',
          'West Bank Demerara, Guyana',
        ],
      },
    },
  ],
  keywords: [
    'construction equipment rental Georgetown Guyana',
    'scaffolding rental Georgetown Guyana',
    '3ft scaffold rental Georgetown Guyana',
    '2ft scaffold rental Georgetown Guyana',
    'concrete mixer rental Guyana',
    'cement mixer rental Guyana',
    'ransom rental Guyana',
    'plate compactor rental Guyana',
    'construction material transport Guyana',
    'transportation logistics Georgetown Guyana',
    'equipment transport Georgetown Guyana',
    'delivery services Georgetown Guyana',
    'construction equipment rental East Coast Demerara Guyana',
    'scaffold rental East Bank Demerara Guyana',
    'scaffolding rental West Coast Demerara Guyana',
    'equipment rental West Bank Demerara Guyana',
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://barimarentals.com'),
  title: 'Barima Rentals | Construction Equipment Rentals',
  description:
    'Barima Rentals provides scaffold rentals, concrete mixer rentals, plate compactor rentals and transportation support for contractors, builders and homeowners in Georgetown, Guyana, East Coast Demerara, Guyana, East Bank Demerara, Guyana, West Coast Demerara, Guyana and West Bank Demerara, Guyana.',
  keywords: [
    'Barima Rentals',
    'construction equipment rental Georgetown Guyana',
    'scaffold rental Georgetown Guyana',
    'scaffolding rental Georgetown Guyana',
    'concrete mixer rental Guyana',
    'cement mixer rental Guyana',
    'plate compactor rental Guyana',
    'transportation logistics Guyana',
    'equipment delivery Georgetown Guyana',
    'construction equipment rental East Coast Demerara Guyana',
    'construction equipment rental East Bank Demerara Guyana',
    'construction equipment rental West Coast Demerara Guyana',
    'construction equipment rental West Bank Demerara Guyana',
  ],
  alternates: {
    canonical: 'https://barimarentals.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/apple-icon.png', type: 'image/png', sizes: '180x180' }],
    shortcut: ['/favicon.ico'],
  },

  openGraph: {
    title: 'Barima Rentals | Construction Equipment Rentals',
    description:
      'Reliable scaffold, concrete mixer, plate compactor and transportation support serving Georgetown, Guyana, East Coast Demerara, Guyana, East Bank Demerara, Guyana, West Coast Demerara, Guyana and West Bank Demerara, Guyana.',
    url: 'https://barimarentals.com',
    siteName: 'Barima Rentals',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'Barima Rentals Equipment',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barima Rentals | Construction Equipment Rentals',
    description:
      'Scaffold, concrete mixer, plate compactor and transport rentals serving Georgetown, Guyana, East Coast Demerara, Guyana, East Bank Demerara, Guyana, West Coast Demerara, Guyana and West Bank Demerara, Guyana.',
    images: ['/images/hero.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
