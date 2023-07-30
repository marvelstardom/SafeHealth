import React from "react"
import Logo from "../components/Logo"
import Link from "next/link"

export default function Register () {
    return (
    <section className="flex flex-col m-0 p-0 lg:h-max lg:w-full">
      <div className='lg:py-12 lg:px-20 p-10'>
        <Logo />
        <div className="flex justify-center items-center text-left w-full py-12">
          <div id="form" className="block bg-white p-6 rounded-xl border shadow-lg max-w-[450px]">
            <form action="/dashboard/overview/" method="post">    
              <label htmlFor="fname" className="text-inputlabeltext font-normal">Facility Name</label>
              <input type="text" placeholder='e.g EKSU Hospital' id='name'
                className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mb-3 mt-1.5" />
              <label htmlFor="type" className="text-inputlabeltext font-normal ">Facility Type</label>
              <select name="type" id="" placeholder="--Select Option--" className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mb-3 pr-3 mt-1.5">
                  <option value="" name="fname" placeholder='__select option'></option>
                  <option value="" name="fname">Government</option>
                  <option value="" name="fname">Private</option>
              </select>

              <label htmlFor="address" className="text-inputlabeltext font-normal">Facility Address</label>
              <input type="text" placeholder='Enter your address' id='address'
                className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mb-3 mt-1.5" />

              <div id="fullName" className="flex flex-row mb-3">
                <div id="state" className="w-1/2 mr-1">
                  <label htmlFor="state" className="text-inputlabeltext font-normal">State</label>
                  <input type="text" name="state" id="state" className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mt-1.5" />
                </div>

                <div id="lga" className="w-1/2 mr-1">
                  <label htmlFor="lname" className="text-inputlabeltext font-normal">LGA</label>
                  <input type="text" name="" id="lga" className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mt-1.5" />
                </div>
              </div>

                <label htmlFor='medical-licence' className="text-inputlabeltext font-normal">Medical License Number</label>
                <input type="text" placeholder='Enter license number' id='medical-licence'
                className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mb-3 mt-1.5"/>

              <label htmlFor="email" className="text-inputlabeltext font-normal">Email</label>
                <input type="email" name="" id="email" className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mb-3 mt-1.5"/>

              <label htmlFor="tel" className="text-inputlabeltext font-normal">Phone Number</label>
                <input type="tel" className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mb-3 mt-1.5" name="tel"/>

              <label htmlFor="password" className="text-inputlabeltext font-normal">Password</label>
                <input type="password" name="" id="password" className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mb-3 mt-1.5"/>

                <label htmlFor="confirmPassword" className="text-inputlabeltext font-normal">Confirm Password</label>
                <input type="password" name="" id="confirmPassword" className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mt-1.5"/>

                <Link href='../dashboard/overview/'><div className="text-center block bg-teal-900 w-full cursor-pointer rounded-md hover:transparency-80 hover:bg-teal-800 mt-6"><button type="submit" className="text-lg text-white px-6 py-2">Sign In</button></div></Link>

                <p className="text-sm text-center my-2 ">By signing in you are agreeing to our <Link href="#" class="text-primary">Terms of Use</Link> and<Link href="#" class="text-blue-600"> Privacy Policy</Link></p>
            </form>
          </div>
        </div>
      </div>
    </section>
    )
}