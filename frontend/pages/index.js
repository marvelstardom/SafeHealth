
import Image from 'next/image'
import Link from 'next/link'
import heroBg from '../public/images/bg2.jpg'
import Header from './components/Header'


export default function Home() {

  return (
    <main className="flex flex-col m-0 p-0 lg:h-max lg:w-full">
      <div className='lg:py-12 lg:px-24 p-10'>
        {/* BACKGROUND IMAGE */}
        <Image
          alt="background"
          className='-z-50 lg:rotate-0 sm:rotate-180'
          src={heroBg}
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
        {/* HEADER */}
        <Header />

        <section className="lg:pt-44 pt-32">
          <div className='flex flex-1 lg:flex-row flex-col items-center justify-center lg:gap-8 gap-y-8'>
            <div className='flex flex-col justify-between group hover:bg-teal-900 shadow-lg flex-1 border rounded-3xl w-80 h-96 lg:w-32 lg:h-64 p-10 bg-teal-50'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fill-teal-900 w-12 h-12 group-hover:fill-white">
                <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
              </svg>
              <h1 className='group-hover:text-white text-teal-900 text-3xl'>Health Status</h1>
              <Link href='#'><button className='group-hover:bg-white group-hover:text-teal-900 text-white px-4 py-2 bg-teal-900 rounded-full'>Learn More</button></Link>
            </div>

            <div className='flex flex-col justify-between group hover:bg-teal-900 shadow-lg flex-1 border rounded-3xl w-80 h-full lg:w-32 lg:h-64 p-10 bg-teal-50'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fill-teal-900 w-12 h-12 group-hover:fill-white">
                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
              </svg>
              <h1 className='group-hover:text-white text-teal-900 text-3xl'>Make an Appointment</h1>
              <Link href='#'><button className='group-hover:bg-white group-hover:text-teal-900 text-white px-4 py-2 bg-teal-900 rounded-full'>Learn More</button></Link>
            </div>

            <div className='flex flex-col justify-between group hover:bg-teal-900 shadow-lg flex-1 border rounded-3xl w-80 h-full lg:w-32 lg:h-64 p-10 bg-teal-50'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fill-teal-900 w-12 h-12 group-hover:fill-white">
                <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 007.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 004.902-5.652l-1.3-1.299a1.875 1.875 0 00-1.325-.549H5.223z" />
                <path fillRule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 009.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 002.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3zm3-6a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zm8.25-.75a.75.75 0 00-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-5.25a.75.75 0 00-.75-.75h-3z" clipRule="evenodd" />
              </svg>
              <h1 className='group-hover:text-white text-teal-900 text-3xl'>Online Pharmacy</h1>
              <Link href='#'><button className='group-hover:bg-white group-hover:text-teal-900 text-white px-4 py-2 bg-teal-900 rounded-full'>Learn More</button></Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

