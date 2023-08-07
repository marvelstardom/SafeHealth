import React from 'react';
import SideBar from './Sidebar';
import DbNavbar from './DbNavbar';

export default function Layout(content) {
    return (
        <div className='w-full max-w-fit relative bg-gray-200'>
           <div className='flex flex-col justify-start'>
                <div className='flex flex-col'>
                    <div className='fixed z-50'>
                        <SideBar />
                    </div>
                    <div className='fixed'>
                        <DbNavbar />
                    </div>
                </div>
                <div className='bg-gray-200 h-full ml-[12%] mt-12 inherit w-full'>
                    {content}
                </div>
           </div>
        </div>
    )
}

