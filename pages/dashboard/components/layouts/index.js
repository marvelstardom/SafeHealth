import React from 'react';
import SideBar from './Sidebar';

export default function Layout(content) {
    return (
        <div className='w-full max-w-fit relative bg-gray-200'>
           <div className='flex flex-row justify-start gap-12'>
             <div className='fixed'>
                <SideBar />
             </div>
            <div className='bg-gray-200 ml-[15%] inherit top-0 bottom-0 h-full'>
                {content}
            </div>
           </div>
        </div>
    )
}

