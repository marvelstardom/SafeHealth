// 'use client'
import React from "react"
import { signIn } from "next-auth/react"
import Link from "next/link"
import Image from "next/image"
import Logo from "../components/Logo"
import ShowPassword from "./showPassword"
import Google from "../../public/images/google.svg"
import GitHub from "../../public/images/github.svg"

const Login = () => {
  // User Sign In Function
  const handleSubmit = async () =>{
    const status = await signIn('credentials', {email, password, callbackUrl: 'http://localhost:3000'})
    console.log(status)
  }
  // Google Sign In Function
  const handleGoogleSignIn = async () => {
    signIn('google', {callbackUrl: 'http://localhost:3000'})
  }
  // Github Sign In Function
  const handleGithubSignIn = async () => {
    signIn('github', {callbackUrl: 'http://localhost:3000'})
  }

  return (
  <section className="flex flex-col m-0 p-0 h-screen w-full lg:h-max lg:w-full bg-gray-200">
    <div className='p-10'>
    <div className="flex flex-row justify-between items-center">
      <Logo />
      <div className="flex justify-end items-center gap-4">
        <Link href="../register"><span className="font-bold text-teal-900">HealthProvider?</span> <span className='hover:bg-teal-800 border-2 border-teal-900 rounded-full text-teal-900 hover:text-white px-6 py-2'>Register Here</span></Link>
        <Link href="/" className='hover:bg-teal-800 border-2 border-teal-900 rounded-full text-teal-900 hover:text-white px-6 py-2'>Back </Link>
      </div>
    </div>
    <div className='px-40 pt-8 mb-1'>
      <div className="flex justify-center items-center text-left w-full py-8 px-8">
        <div id="form" className="block bg-white p-8 border rounded-xl max-w-[450px] shadow-lg">
          <form action="../dashboard/overview/" method="post">  
            <label htmlFor="email" id='email' className="text-inputlabeltext font-normal text-teal-900">Email</label>
            <input type="email" name="email" id="email" className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mb-3 mt-1.5"/>
            <label htmlFor="password" id='password' className="text-inputlabeltext font-normal text-teal-900">Password</label>
            {<ShowPassword/>}
            <div className="text-center block bg-teal-900 w-full cursor-pointer rounded-md hover:bg-teal-800 mt-6"><button type="submit" onClick={handleSubmit} className="text-lg text-white px-6 py-2">Sign In</button></div>

            <div>
              <button type="submit" onClick={handleGoogleSignIn} className="flex flex-row justify-center items-center text-lg px-2 py-2 text-center block w-full border border-gray-300 cursor-pointer rounded-md hover:bg-gray-300 mt-10">Sign in with Google <Image src={Google} alt="google" width={25} height={25} className="ml-2" /></button>
              <button type="submit" onClick={handleGithubSignIn} className="flex flex-row justify-center items-center text-lg px-2 py-2 text-center block w-full border border-gray-300 cursor-pointer rounded-md hover:bg-gray-300 mt-2">Sign in with GitHub <Image src={GitHub} alt="google" width={25} height={25} className="ml-2" /></button>
            </div>

            {/* <div className="flex flex-row justify-center items-center text-lg px-2 py-2 text-center block w-full mt-2 cursor-pointer"></div> */}

              <p className="text-sm text-center mt-4">By signing in you are agreeing to our <Link href="#" className="text-blue-600">Terms of Use</Link> and<Link href="#" className="text-blue-600"> Privacy Policy</Link></p>

          </form>
        </div>
      </div>
    </div>
    </div>
  </section>
  )
}

export default Login