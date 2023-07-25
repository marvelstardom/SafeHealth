'use client'
import React, { useState } from "react";
import Link from "next/link";
import { links } from "@/app/links/page";


export default function SideBar () {
    const [activeMenu, setActiveMenu] = useState(true)

    // const activeLink = 'flex items-center gap-5 pl-4 pt-4 pb-4.5 rounded-lg text-md m-2';
    // const normalLink = 'flex items-center gap-5 pl-4 pt-4 pb-4.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

    return (
        <nav className="flex flex-col w-52 bg-teal-900 h-auto p-6">
            <div>
               {activeMenu && (<>
                <Link href='/' className='flex items-center justify-start cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 fill-teal-100">
                        <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                    <div>
                        <h1 className="font-bold text-xl text-teal-100">SafeHealth</h1>
                    </div>
                </Link>
                <button type="button" onClick={()=> {setActiveMenu((prevActiveMenu) => !prevActiveMenu)}}></button>

                <div className="flex flex-col flex-1 px-4 mt-20 gap-6 capitalize font-bold text-teal-100 text-lg">
                    {links.map((link) => (
                        <Link href={`/dashboard/${link.name}`} key={link.name} className="">
                            {link.name}
                        </Link>
                    ))}
                </div>
                </>)}
            </div>
        </nav>
    )
}