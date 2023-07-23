import React from "react";
import Link from "next/link";
import Logo from "./component/page";

export default function Header () {
    return (
    <header className='flex items-center justify-between'>
        <Logo />
        <nav>
            <ul className='flex flex-row items-center justify-end gap-2'>
                <li>
                <Link href='../login/'>
                    <button className='hover:animate-pulse bg-teal-900 rounded-full text-white px-6 py-2'>Login</button>
                </Link>
                </li>
                <li>
                <Link href='./register/'>
                <button className='hover:animate-pulse bg-teal-900 rounded-full text-white px-6 py-2'>Register</button></Link>
                </li>
                {/* <li>
                <Link href='#'><button className='hover:animate-pulse border-teal-900 border-2 rounded-full text-teal-900 px-6 py-2'>Register</button></Link>
                </li> */}
            </ul>
        </nav>
    </header>
    )
}