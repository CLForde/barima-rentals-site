export default function BarimaRentalsHome() {
  return (
    <main className='min-h-screen bg-gray-50 text-gray-800'>
      <header className='bg-gray-900 text-white py-4'>
        <div className='max-w-5xl mx-auto flex justify-between items-center px-6'>
          <h1 className='font-bold text-lg'>Barima Rentals</h1>

          <a
            href='https://wa.me/5926275775'
            className='bg-green-500 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600'
          >
            WhatsApp Us
          </a>
        </div>
      </header>
      {/* HERO SECTION */}
      <section className='text-center py-20 bg-white shadow'>
        <h1 className='text-5xl font-bold'>BARIMA RENTALS</h1>
        <p className='mt-4 text-lg'>Reliable Construction Equipment</p>

        <a
          href='https://wa.me/5926275775'
          className='inline-block mt-6 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600'
        >
          Message on WhatsApp
        </a>
      </section>

      {/* EQUIPMENT SECTION */}
      <div className='grid md:grid-cols-3 gap-8'>
        <div className='bg-white p-6 rounded-xl shadow text-center'>
          <img
            src='/images/scaffold.jpg'
            alt='Scaffold Rentals'
            className='rounded-lg mb-4 w-full h-48 object-cover'
          />
          <h3 className='font-semibold'>Scaffolds</h3>
          <p className='text-sm mt-2'>
            Reliable scaffolding for construction and repairs.
          </p>
        </div>

        <div className='bg-white p-6 rounded-xl shadow text-center'>
          <img
            src='/images/mixer.jpg'
            alt='Concrete Mixer'
            className='rounded-lg mb-4'
          />
          <h3 className='font-semibold'>Concrete Mixers</h3>
          <p className='text-sm mt-2'>
            Well maintained mixers ready for your projects.
          </p>
        </div>

        <div className='bg-white p-6 rounded-xl shadow text-center'>
          <img
            src='/images/compactor.jpg'
            alt='Plate Compactor'
            className='rounded-lg mb-4'
          />
          <h3 className='font-semibold'>Plate Compactors</h3>
          <p className='text-sm mt-2'>
            Ideal for foundations, driveways and yard preparation.
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <section className='bg-white py-16'>
        <div className='max-w-4xl mx-auto text-center px-6'>
          <h2 className='text-3xl font-bold mb-6'>Why Choose Barima Rentals</h2>

          <div className='space-y-3'>
            <p>✔ Reliable equipment</p>
            <p>✔ Fair rental rates</p>
            <p>✔ Trusted service</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className='py-20 text-center'>
        <h2 className='text-3xl font-bold'>Contact</h2>
        <p className='mt-4'>Georgetown, Guyana</p>

        <a
          href='https://wa.me/5926275775'
          className='inline-block mt-6 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600'
        >
          Contact on WhatsApp
        </a>
      </section>
    </main>
  );
}
