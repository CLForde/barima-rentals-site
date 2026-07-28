import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const siteUrl = 'https://barimarentals.com';
const businessId = `${siteUrl}/#business`;
const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
const bingSiteVerification =
  process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION?.trim();

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
  '@id': businessId,
  name: 'Barima Rentals',
  alternateName: 'CF Rentals',
  description:
    'Barima Rentals rents scaffolding, concrete mixers and a 90kg plate compactor in Georgetown, Guyana, with equipment, goods and construction-material transportation support.',
  url: `${siteUrl}/`,
  telephone: '+592 627 5775',
  logo: `${siteUrl}/images/barima-rentals-logo.png`,
  image: [
    `${siteUrl}/images/3ft-scaffolding-candidate-cropped.png`,
    `${siteUrl}/images/3ft-scaffolding-hero.PNG`,
    `${siteUrl}/images/2ft-scaffolding.jpeg`,
    `${siteUrl}/images/450l-concrete-mixer.PNG`,
    `${siteUrl}/images/400l-concrete-mixer.PNG`,
    `${siteUrl}/images/350l-concrete-mixer.PNG`,
    `${siteUrl}/images/90kg-plate-compactor.jpeg`,
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Lot 6 "D" Station Street, Kitty',
    addressLocality: 'Georgetown',
    addressCountry: 'GY',
  },
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
      telephone: '+592 627 5775',
      contactType: 'customer inquiries',
      areaServed: 'GY',
      availableLanguage: 'English',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+592 627 5775',
      url: 'https://wa.me/5926275775',
      contactType: 'WhatsApp customer inquiries',
      areaServed: 'GY',
      availableLanguage: 'English',
    },
  ],
  currenciesAccepted: 'GYD',
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: '3ft scaffolding rental',
        provider: { '@id': businessId },
        serviceType: 'Equipment rental',
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
        name: '2ft scaffolding rental',
        provider: { '@id': businessId },
        serviceType: 'Equipment rental',
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
        name: 'concrete mixer rental',
        alternateName: ['cement mixer rental', 'ransom rental'],
        provider: { '@id': businessId },
        serviceType: 'Equipment rental',
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
        name: '90kg plate compactor rental',
        alternateName: 'vibrating plate compactor rental',
        provider: { '@id': businessId },
        serviceType: 'Equipment rental',
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
        provider: { '@id': businessId },
        serviceType:
          'Equipment transportation, construction-material transportation, goods transportation, barrel transportation, household-item transportation, sign transportation, job-site logistics and delivery and pickup coordination',
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
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      'Barima Rentals | Scaffolding, Concrete Mixer & Equipment Rental Guyana',
    template: '%s | Barima Rentals',
  },
  description:
    'Rent scaffolding, concrete mixers and a 90kg plate compactor in Georgetown, Guyana. Barima Rentals also provides equipment, goods and material transportation.',
  keywords: [
    'Barima Rentals',
    'scaffolding rental Georgetown Guyana',
    '3ft scaffolding rental',
    '2ft scaffolding rental',
    'concrete mixer rental Guyana',
    'cement mixer rental Guyana',
    'ransom rental Guyana',
    'plate compactor rental Guyana',
    'equipment transport Guyana',
    'transportation solutions Georgetown Guyana',
  ],
  alternates: {
    canonical: `${siteUrl}/`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-icon.png', type: 'image/png', sizes: '180x180' }],
    shortcut: ['/favicon.ico'],
  },
  verification: {
    ...(googleSiteVerification ? { google: googleSiteVerification } : {}),
    ...(bingSiteVerification
      ? { other: { 'msvalidate.01': bingSiteVerification } }
      : {}),
  },

  openGraph: {
    title:
      'Barima Rentals | Scaffolding, Concrete Mixer & Equipment Rental Guyana',
    description:
      'Rent scaffolding, concrete mixers and a 90kg plate compactor in Georgetown, Guyana, with equipment, goods and material transportation support.',
    url: `${siteUrl}/`,
    siteName: 'Barima Rentals',
    images: [
      {
        url: '/images/3ft-scaffolding-candidate-cropped.png',
        width: 1200,
        height: 630,
        alt: 'Barima Rentals scaffolding and equipment rental in Guyana',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Barima Rentals | Scaffolding, Concrete Mixer & Equipment Rental Guyana',
    description:
      'Rent scaffolding, concrete mixers and a 90kg plate compactor in Georgetown, Guyana, with transportation support.',
    images: ['/images/3ft-scaffolding-candidate-cropped.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchemaJson = JSON.stringify(businessSchema).replace(
    /</g,
    '\\u003c',
  );

  return (
    <html lang='en'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: businessSchemaJson,
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
