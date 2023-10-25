import React, {useEffect, useState} from 'react';
import Layout from '../../../components/layouts';
import AppCalendar from '../components/Calendar';
import Card from '@mui/material/Card';
import { Avatar } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
// import { Input } from '@mui/base/Input';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


export default function Appointment(){
    const [staffData, setStaffData] = useState([])

    const handleChange = () => {
        staffData.filter()
    }

    // Checkbox label
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setStaffData(data))
    }, [])

    return Layout(
        <div className=' flex flex-col mt-14 mr-8 h-screen w-full max-w-7xl ml-8 pl-10'>
            <div className='flex flex-row gap-2 mb-6'>
                <AppCalendar />
            </div>

            <div>
                {/* <Input
                    slotProps={{
                        input: {
                        className:'w-80 text-sm font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-500 dark:focus:border-purple-500 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0',
                        },
                    }}> */}
                {/* <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'Search' }}
                /> */}
                <input type="search" placeholder='Search' onChange={handleChange} value="" />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                {/* </Input> */}
            </div>

            <div className='flex flex-wrap gap-4'>
                {
                    staffData.map((staff) => (
                        <Card key={staff.id} className='w-1/5 rounded-lg'>
                            <div>
                                <div className='p-6'>
                                    <Avatar></Avatar>
                                    <h1 className='text-xl font-bold mt-2'>{staff.name}</h1>
                                    <h1>{staff.email}</h1>
                                    <h1>{staff.phone}</h1>
                                </div>
                                <Divider />
                                <div className='flex flex-row items-center justify-between pl-6 pr-3 mb-2'>
                                    <h1 className='border-b border-white-light dark:border-[#1b2e4b] px-4 py-2.5'>Clock In</h1>
                                    <Checkbox {...label} />
                                </div>
                            </div>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

