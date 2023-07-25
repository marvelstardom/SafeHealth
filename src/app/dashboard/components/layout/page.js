import React from 'react';
import SideBar from '../sidebar/page';

export default function Layout(content) {
    return (
        <div className='flex w-full max-w-fit'>
            <SideBar />
            <div className=''>
                {content}
            </div>
        </div>
    )
}

