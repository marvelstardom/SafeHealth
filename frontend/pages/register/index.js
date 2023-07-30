import React from "react"
import Logo from "../components/Logo"
import Link from "next/link"
import Image from "next/image"
import heroBg from "../../public/images/bg2.jpg"

export default function Register () {
    return (
    <section className="flex flex-col m-0 p-0 lg:h-max lg:w-full">
      <div className='lg:py-12 lg:px-10 p-10'>
       
       <div className="flex flex-row justify-between items-center">
        <Logo />
        <Link href="/" 
          className='hover:bg-teal-800 border-2 border-teal-900 rounded-full text-teal-900 hover:text-white px-6 py-2'>
          Back 
          {/* <span aria-hidden="true">→</span> */}
        </Link>
       </div>
        <div className="flex justify-center items-center text-left w-full py-12">
          <div id="form" className="block bg-white p-6 rounded-xl border shadow-lg max-w-[850px]">
            <h1 className="text-center font-bold text-xl pb-6 text-teal-800">Healthcare Facility</h1>
            <form action="/dashboard/overview/" method="post">    

              <div className="flex flex-row gap-2">
                <div className="w-full">
                  <label htmlFor="fname" className="text-inputlabeltext font-normal">Facility Name</label>
                  <input type="text" placeholder='e.g EKSU Hospital' id='name'
                  className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mb-3 mt-1.5" />
                </div>
                
                <div className="w-full">
                  <label htmlFor="type" className="text-inputlabeltext font-normal">Facility Type</label>
                  <select name="type" id="" placeholder="--Select Option--" className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mb-3 pr-3 mt-1.5">
                    <option value="" name="fname" placeholder='__select option'>---</option>
                    <option value="" name="fname">Government</option>
                    <option value="" name="fname">Private</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <div className="w-1/2">
                  <label htmlFor="address" className="font-normal">Facility Address</label>
                  <input type="address" placeholder='Enter your address' id='address'
                  className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mb-3 mt-1.5" />
                </div>

                <div className="w-1/2">
                  <label htmlFor='medical-licence' className="text-inputlabeltext font-normal">Medical License Number</label>
                  <input type="text" placeholder='Enter license number' id='medical-licence' required={true}
                  className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mb-3 mt-1.5"/>
                </div>
              </div>

              <div className="flex flex-row mb-3 gap-2">
                <div id="state" className="w-1/2">
                  <label htmlFor="state" className="text-inputlabeltext font-normal">State</label>
                  <input type="text" name="state" id="state" className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mt-1.5" />
                </div>

                <div id="lga" className="w-1/2">
                  <label htmlFor="lname" className="text-inputlabeltext font-normal">LGA</label>
                  <input type="text" name="" id="lga" className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mt-1.5" />
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <div className="w-1/2">
                  <label htmlFor="email" className="text-inputlabeltext font-normal">Email</label>
                  <input type="email" name="" id="email" className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mb-3 mt-1.5"/>
                </div>

                <div className="w-1/2">
                  <label htmlFor="tel" className="text-inputlabeltext font-normal">Phone Number</label>
                  <input type="tel" className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mb-3 mt-1.5" name="tel"/>
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <div className="w-1/2">
                  <label htmlFor="password" className="text-inputlabeltext font-normal">Password</label>
                  <input type="password" name="" id="password" className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mb-3 mt-1.5"/>
                </div>

                <div className="w-1/2">
                  <label htmlFor="confirmPassword" className="text-inputlabeltext font-normal">Confirm Password</label>
                  <input type="password" name="" id="confirmPassword" className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mt-1.5"/>
                </div>
              </div>

                <Link href='../dashboard/overview/'><div className="text-center block bg-teal-900 w-full cursor-pointer rounded-md hover:bg-teal-800 mt-6"><button type="submit" className="text-lg text-white px-6 py-2">Register</button></div></Link>

                <p className="text-sm text-center my-2 ">By signing in you are agreeing to our <Link href="#" class="text-primary">Terms of Use</Link> and<Link href="#" class="text-blue-600"> Privacy Policy</Link></p>
            </form>
          </div>
        </div>
      </div>
    </section>
    )
}

export const AdminPage = () => {
  return (
    <>
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
        </div>
        <div className="flex flex-row justify-between"> 
          <Logo/>
          <button 
            onClick={handleSignOut} 
            className='hover:bg-teal-800 border-2 border-teal-900 rounded-full text-teal-900 hover:text-white px-6 py-2'>
            Sign Out <span aria-hidden="true">→</span>
          </button>
        </div>

        <div className="px-24">
            <div className="">
              <h2 className="lg:text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl uppercase">
                Welcome to
              </h2>
              <h1 className="lg:text-8xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                SafeHealth
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Your best choice for hospital record management.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <div>
                  <button
                    type='button'
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <Link href='../dashboard/overview/'>Go to Dashboard</Link>
                  </button>
                </div>
                {/* <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </Link> */}
              </div>
            </div>
          </div>
      </main>
    </>
  )
}