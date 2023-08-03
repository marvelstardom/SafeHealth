/* eslint-disable react/jsx-key */
// "use client"
import React from 'react'

import { useState } from 'react'
import DataTable from 'react-data-table-component'
import {docData} from '../columns/docData'
// import {docColumns} from '../columns/docColumns' 
import { COLUMNS } from '../columns/columns'
import Link from 'next/link'
// import { TableCellProps } from 'react-table'
import { useMemo} from "react"
import { useTable } from "react-table"
// import { COLUMNS } from "../columns/page"
import "./table.module.css"


export const DoctorsTable = () => {
    const [doctorRecords, setDoctorRecords] = useState(docData)
    const handleFilter = (e) => {
        const newData = docData.filter(row => {
            return row.firstName.toLowerCase().includes(e.target.value)
        }) 
        setDoctorRecords(newData)
    }
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => docData, [])
    const tableInstance = useTable({columns, data})
    const { getTableProps, getTableBodyProps, rows, headerGroups, prepareRow} = tableInstance 

  return (
    <div>
    <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center justify-start">
            <svg className="bg-teal-900 text-white rounded-lg p-1 w-8 h-8 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
            <h1 className='font-bold text-lg'>All Doctors</h1>
        </div>
        {/* FILTER BUTTON */}
        <div>
            <input type="filter" placeholder="Filter" onChange={handleFilter} className="py-2 px-4 font-normal bg-white border rounded-lg"/>
        </div>
        <div className='flex flex-row'>
            <Link href=''>
                <button 
                // onClick={addNewDoctor()} 
                className="py-2 px-4 rounded-r-lg bg-teal-900 hover:bg-teal-800 text-white">Add New Doctor
                </button>
            </Link>
        </div>
    </div>
    <div className='flex flex-col shadow-lg border rounded-xl mt-10 table-auto w-full max-w-fit'>
    {/* <DataTable className='w-full max-w-fit' columns={docColumns} data={doctorRecords} selectableRows fixedHeader pagination></DataTable> */}
    </div>
    
        <table {...getTableProps()} id='table' className='table-auto'>
            <thead className=''>
                {headerGroups.map((headerGroup) => 
                <tr {...headerGroup.getHeaderGroupProps()} className=''>
                    {headerGroup.headers.map((column) => 
                       (<th {...column.getHeaderProps()} className=''>{column.render('Header')}</th>)
                    )}<th>Action</th>
                </tr>
                )}
            </thead>
            <tbody {...getTableBodyProps} className='pr-6'>
                {rows.map((row) => {
                    prepareRow(row)
                    return (
                    <tr {...row.getRowProps()} className='pr-6'>
                        {row.cells.map((cell) => {
                            return <td {...cell.getCellProps()} className='pr-6'>{cell.render('Cell')}</td>
                        })}
                    </tr>)
                })}
            </tbody>
        </table>
    </div>
  )
}
