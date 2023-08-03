import React from 'react';
import Layout from '../components/layouts';
import AppCalendar from '../components/Calendar';
// import dayjs from 'dayjs';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


export default function Appointment(){
    return Layout(
        <div className='mt-10 mr-8 h-screen w-full max-w-7xl ml-28 pl-10'>
            <div className='flex flex-row gap-2 mb-6'>
                <AppCalendar />
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateCalendar', 'DateCalendar', 'DateCalendar']}>
                    <DemoItem label={'"year", "month" and "day"'}>
                    <DateCalendar
                        defaultValue={dayjs('2022-04-17')}
                        views={['year', 'month', 'day']}
                    />
                    </DemoItem>
                </DemoContainer>
                </LocalizationProvider> */}
            </div>
        </div>
    )
}

