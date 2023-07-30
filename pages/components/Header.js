"use client"
import React from "react";
import { SessionProvider, useSession, getSession, signOut } from "next-auth/react"
// import Head from 'next/head'
import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  const { data: session } = useSession()

  const handleSignOut = () => {
    signOut()
  }

  return (
  <>
  <SessionProvider>
      {/* <Main/> */}
      <Navbar/>
      {/* { session && Navbar() } */}
  </SessionProvider>
  </>
  )
}

function Navbar ({handleSignOut}) {
    return (
    <header className='flex items-center justify-between'>
        <Logo />
        <nav>
            <ul className='flex flex-row items-center justify-end gap-2'>
                {/* REGISTER */}
                <li>
                <Link href='../register'>
                <button className='hover:bg-teal-800 bg-teal-900 rounded-full text-white px-6 py-2'>Register</button></Link>
                </li>
                {/* LOGIN */}
                <li>
                <Link href='../login'>
                    <button className='hover:bg-teal-800 bg-teal-900 rounded-full text-white px-6 py-2'>Login</button>
                </Link>
                </li>
                {/* SIGN OUT */}
                <li>
                {/* <Link href='#'> */}
                    <button onClick={handleSignOut} className='hover:bg-teal-800 border-2 border-teal-900 rounded-full text-teal-900 hover:text-white px-6 py-2'>Sign Out</button>
                {/* </Link> */}
                </li>
                {/* <li>
                <Link href='#'><button className='hover:animate-pulse border-teal-900 border-2 rounded-full text-teal-900 px-6 py-2'>Register</button></Link>
                </li> */}
            </ul>
        </nav>
    </header>
    )
}

export async function getServerSideProps({req}) {
  const session = await getSession({req})

  if(!session) {
    return {
      redirect: {
      destination: '/login',
      permanent: false
    }
    }
  } 

  return {
    props: {session}
  }
}