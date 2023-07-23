'use client'
import React from "react"
// import Link from "next/link"
import ShowPassword from "../hooks/page"

const Page = () => {
  return (
  <section className="m-0 p-0">
    <div className='p-40'>
      <div className="flex justify-center items-center text-left w-full py-8 px-8">
        <div id="form" className="block bg-white p-8 rounded-xl max-w-[450px]">
          <form action="../login/api/route" method="post">  
            <label htmlFor="email" id='email' className="text-inputlabeltext font-normal text-teal-900">Email</label>
            <input type="email" name="email" id="email" className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mb-3 mt-1.5"/>
            <label htmlFor="password" id='password' className="text-inputlabeltext font-normal text-teal-900">Password</label>
            {<ShowPassword/>}
            <div className="text-center block bg-teal-900 w-full cursor-pointer rounded-md hover:transparency-80 hover:bg-teal-800 mt-6"><button type="submit" className="text-lg text-white px-6 py-2">Sign In</button></div>

              <p className="text-sm text-center mt-4">By signing in you are agreeing to our <a href="#" class="text-primary">Terms of Use</a> and<a href="#" className="text-blue-600"> Privacy Policy</a></p>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Page