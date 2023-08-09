import React from 'react';
import Layout from '../../../components/layouts';
import AppCalendar from '../components/Calendar';


export default function Appointment(){
    return Layout(
        <div className='mt-14 mr-8 h-screen w-full max-w-7xl ml-32 pl-10'>
            <div className='flex flex-row gap-2 mb-6'>
                <AppCalendar />
            </div>
        </div>
    )
}

