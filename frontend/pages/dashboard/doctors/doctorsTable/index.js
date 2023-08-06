/* eslint-disable react/jsx-key */
// import { TableCellProps } from 'react-table'
// import { COLUMNS } from "../columns/page"
// import "./table.module.css"

// "use client"
import React from 'react'
import { useState } from 'react'
import {docData} from '../columns/docData'
import { COLUMNS } from '../columns/columns'
import {docColumns} from '../columns/docColumns' 
import Link from 'next/link'
import Image from 'next/image'
import { useMemo} from "react"
import { useTable } from "react-table"
import DataTable from 'react-data-table-component'
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Avatar from '@mui/material/Avatar';
import AddDoctor from './addDoctor'
import viewMore from '../../../../public/images/left-arrow.png'


export const DoctorsTable = (props) => {
    const [doctorRecords, setDoctorRecords] = useState(docData)
    const [view, setView] = React.useState('module');
    const [isOpen, setIsOpen] = useState(false)

    // TOGGLE CHANGE
    const handleChange = (event, nextView) => {
        setView(nextView);
    };
    // FILTER CHANGE
    const handleFilter = (e) => {
        const newData = doctorRecords.filter(row => {
            return row.firstName.toLowerCase().includes(e.target.value)
        }) 
        setDoctorRecords(newData)
    }
    

  return (
    <div className='w-full max-w-[1225px]'>
    <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center justify-center">
            <svg className="bg-teal-900 text-white rounded-lg p-1 w-8 h-8 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
            <h1 className='font-bold text-lg'>All Doctors</h1>
        </div>
        {/* FILTER BUTTON */}
        <div>
            <input type="filter" placeholder="Filter" onChange={handleFilter} className="py-2 px-4 font-normal bg-white border rounded-lg"/>
        </div>
        <div className='flex flex-row'>
            <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="py-2 px-4 rounded-lg bg-teal-900 hover:bg-teal-800 text-white">Add New Doctor
            </button>
        </div>
        { props.isOpen && <AddDoctor /> }
    </div>
    <div className='mt-10'>
    </div>
    
        <div className='border border-white bg-white rounded-xl flex flex-col shadow-lg pt-4 pl-2 pr-2'>
            {/* TOGGLE ICONS */}
            <div className='p-2 gap-2 flex flex-row justify-end items-center w-min'>
                <ToggleButtonGroup
                    orientation="horizontal"
                    value={view}
                    exclusive
                    onChange={handleChange}
                    >
                    <ToggleButton value="module" aria-label="module">
                        <ViewModuleIcon />
                    </ToggleButton>
                    <ToggleButton value="list" aria-label="list">
                        <ViewListIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            { view === "list" ? <ListTable/> : <ModuleTable/> }
            
        </div>
    </div>
  )
}

export const ModuleTable = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => docData, [])
    const tableInstance = useTable({columns, data})
    const { getTableProps, getTableBodyProps, rows, headerGroups, prepareRow} = tableInstance 
    return(
        <div>
            <table {...getTableProps()} id='table' className='table-auto m-2 pt-4 flex flex-col'>
                {/* <thead className=''>
                    {headerGroups.map((headerGroup) => 
                    <tr {...headerGroup.getHeaderGroupProps()} className=''>
                        {headerGroup.headers.map((column) => 
                        (<th {...column.getHeaderProps()} className=''>{column.render('Header')}</th>)
                        )}
                        <th>Action</th>
                    </tr>
                    )}
                </thead> */}
                <tbody {...getTableBodyProps} className='flex flex-wrap gap-y-12 gap-x-12 justify-center items-center'>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()} className='w-1/4 h-auto px-6 pr-4 py-8 border-2 border-gray bg-white rounded-xl flex flex-wrap flex-col shadow-lg gap-y-0'>
                                <tr>
                                    <td className='flex flex-col items-center'><Avatar src={row.image} /></td>
                                </tr>
                            {row.cells.map((cell) => {
                                return (
                                    <div>
                                    <td {...cell.getCellProps()} className='flex flex-col items-center'>{cell.render('Cell')}</td>
                                </div>
                                )
                            })}
                            <br />
                            <tr>
                                <td className='flex flex-col items-center'>
                                   <div>
                                        <Link href=""  className='group flex flex-row items-center justify-center border-2 border-orange-600 px-3 py-2 rounded-full text-orange-600 hover:bg-orange-600 hover:text-white '>
                                            View More
                                            <Image src={viewMore} alt="View more" height={20} width={20} className='rotate-180 ml-2' />
                                        </Link>
                                   </div>
                                </td>
                            </tr>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export const ListTable = () => {
    return(
        <div>
            <DataTable columns={docColumns} data={docData} selectableRows fixedHeader pagination></DataTable>
        </div>
    )
}
