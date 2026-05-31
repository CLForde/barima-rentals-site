import fs from 'fs';
import path from 'path';
import Image from 'next/image';

type Props = {
  params: Promise<{ slug: string }>;
};

type Site = {
  slug: string;
  name: string;
  tagline?: string;
  phone?: string;
  whatsapp?: string;
  address?: string;
  heroImage?: string;
  service1?: string;
  service1Image?: string;
  service2?: string;
  service2Image?: string;
};

export default async function SitePage({ params }: Props) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'data', 'sites.json');
  const file = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(file) as Site[];

  const site = data.find((s) => s.slug === slug);

  if (!site) {
    return (
      <div className='p-10 text-center text-red-500'>
        <h1 className='text-2xl font-bold'>Site not found</h1>
      </div>
    );
  }

  return (
    <div className='min-h-screen'>
      {/* 🔥 HERO SECTION */}
      {site.heroImage && (
        <div className='w-full h-[400px] relative'>
          <Image
            src={site.heroImage}
            alt='Hero'
            fill
            className='object-cover'
          />
        </div>
      )}

      <div className='max-w-5xl mx-auto px-6 py-10'>
        {/* 🔥 BUSINESS INFO */}
        <h1 className='text-4xl font-bold mb-2'>{site.name}</h1>
        <p className='text-gray-600 mb-6'>{site.tagline}</p>

        <div className='mb-6'>
          <p>
            <strong>Phone:</strong> {site.phone}
          </p>
          <p>
            <strong>WhatsApp:</strong> {site.whatsapp}
          </p>
          <p>
            <strong>Address:</strong> {site.address}
          </p>
        </div>

        {/* 🔥 SERVICES */}
        <h2 className='text-2xl font-semibold mb-4'>Our Services</h2>

        <div className='grid md:grid-cols-2 gap-6'>
          {/* SERVICE 1 */}
          {site.service1 && (
            <div className='border p-4 rounded shadow'>
              <h3 className='text-xl font-semibold mb-2'>{site.service1}</h3>

              {site.service1Image && (
                <Image
                  src={site.service1Image}
                  alt={site.service1}
                  width={400}
                  height={250}
                  className='rounded'
                />
              )}
            </div>
          )}

          {/* SERVICE 2 */}
          {site.service2 && (
            <div className='border p-4 rounded shadow'>
              <h3 className='text-xl font-semibold mb-2'>{site.service2}</h3>

              {site.service2Image && (
                <Image
                  src={site.service2Image}
                  alt={site.service2}
                  width={400}
                  height={250}
                  className='rounded'
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
