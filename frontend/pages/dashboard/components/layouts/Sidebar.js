'use client'
import React from "react";
import Link from "next/link";
import { links } from "@/links";


export default function SideBar () {
    return (
        <nav className="flex flex-col bg-teal-900 pt-6 px-4 top-0 bottom-0 h-full min-h-screen w-[200px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)]">
            <div>
                {/* <div className="w-6 h-6 mr-2 text-teal-100">
                    <Logo className="text-teal-100" />
                </div> */}
               {/* {activeMenu && (<> */}
                <Link href='/' className='flex items-center justify-start cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 fill-teal-100">
                        <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                    <div>
                        {/* <Image src={logo} height={20} width={20} alt="logo" /> */}
                        <h1 className="font-bold text-xl text-teal-100">SafeHealth</h1>
                    </div>
                </Link>

                <div className="flex flex-col flex-1 justify-start mt-20 gap-2 capitalize text-teal-100 text-md">
                    {links.map((link) => (
                        <Link href={`/dashboard/${link.name}`} key={link.name} className="flex flex-row items-center gap-4 hover:bg-teal-100 hover:text-teal-900 rounded-lg px-4 py-2">
                            {/* <Image src={link.imageDark} width={20} height={20} alt="icons"/> */}
                            {link.image}{link.imageLight}
                            {link.name}
                        </Link>
                    ))}
                </div>
                {/* </>)} */}
            </div>
        </nav>
    )
}