"use client"
import React from "react";
import { useState, useEffect } from "react";
import ReactModal from "react-modal"
import Layout from "../components/layouts";
import DataTable from 'react-data-table-component'
import {patientColumns} from './patientColumns'
// import {patientData} from './patientData'
import axios from "axios"
import { useRouter } from "next/router";
import { patientData } from "./patientData";

export default function Patients(){
    const router = useRouter()
    const [patientRecords, setPatientRecords] = useState(patientData)
    const [isClient, setIsClient] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [userInput, setUserInput] = useState({
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        cardNumber: '',
        diagnosis: '',
        gender: '',
        phoneNumber: '',
    })
    const [dataArr, setDataArr] = useState([])

    useEffect(() => {
        setIsClient(true)
    }, [])

    const handleFilter = (e) => {
        const newData = dataArr.filter(row => {
            return row.firstName.toLowerCase().includes(e.target.value)
        }) 
    }

    useEffect(() => {
      axios.get(patientRecords)
        .then(res => setPatientRecords(res.data))
        .catch(err => console.log(err))
    }, [])

    const handleChange = (e) => {
        setUserInput({...userInput, [e.target.name]: e.target.value})
    }
    
    let {firstName, lastName, email, age, cardNumber, diagnosis, gender, phoneNumber}=userInput
    const handleSubmit = () => {
        // e.preventDefault()
        setDataArr([...dataArr, {firstName, lastName, email, age, cardNumber, diagnosis, gender, phoneNumber}])
        setUserInput({firstName: '',
        lastName: '',
        email: '',
        age: '',
        cardNumber: '',
        diagnosis: '',
        gender: '',
        phoneNumber: ''})

        console.log(dataArr)
        console.log(userInput)
        axios.post('http://localhost:3000/dashboard/patients/', dataArr)
        .then(res => {
            alert("Patient's Record Added Successfully!")
        })
        // .catch(err => console.log(err))
        router.push('./patients/')
        setIsOpen(!isOpen)
        // router.back('./')
    }

    return Layout(
        <div>
                    {/* <tbody> */}
        <div className="flex flex-col justify-between w-full bg-gray-200 pt-10 pb-10 px-20 h-full ml-12">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center justify-start">
                    <svg className="bg-teal-900 text-white rounded-lg p-1 w-8 h-8 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                    <h1 className='font-bold text-lg'>All Patients</h1>
                </div>
                {/* FILTER PATIENT */}
                <div><input type="filter" placeholder="Filter" onChange={handleFilter} className="py-2 px-4 font-normal bg-white border rounded-lg"/></div>
                <div>
                    <button onClick={() => setIsOpen(!isOpen)} className="py-2 px-4 rounded-lg bg-teal-900 hover:bg-teal-800 text-white">
                        Add New Patient
                    </button>
                    {isOpen && <ReactModal isOpen={isOpen} onRequestClose={() => setIsOpen(!isOpen)} ariaHideApp={false} className='mx-auto mt-32 w-1/2 z-10 text-center'>
                        <div className="bg-gray-100 p-12 border rounded-2xl shadow-md">
                        <h1 className="text-lg font-bold mb-4">Add New Patient</h1>
                        
                        <form className="grid grid-cols-2 gap-x-4" onSubmit={handleSubmit} action="../../api/form" method="POST">
                            <input type="text" name="firstName" value={userInput.firstName} placeholder='First Name' onChange={handleChange} className="h-10 rounded-md border border-slate-300 text-sm px-4 mb-3 mt-1.5" />
                            <input type="text" name="lastName" value={userInput.lastName} placeholder='Last Name' onChange={handleChange} className="h-10 rounded-md border border-slate-300 text-sm px-4 mb-3 mt-1.5" />
                            <input type="text" name="cardNumber" value={userInput.cardNumber} placeholder='Card Number' onChange={handleChange} className="h-10 rounded-md border border-slate-300 text-sm px-4 mb-3 mt-1.5" />
                            <input type="text" name="diagnosis" value={userInput.diagnosis} placeholder='Diagnosis' onChange={handleChange} className="h-10 rounded-md border border-slate-300 text-sm px-4 mb-3 mt-1.5" />
                            <input type="email" name="email" value={userInput.email} placeholder='Email' onChange={handleChange} className="h-10 rounded-md border border-slate-300 text-sm px-4 mb-3 mt-1.5" />
                            <select name="gender" value={userInput.gender} id="" onChange={handleChange} className="h-10 rounded-md border border-slate-300 text-sm text-gray-500 px-4 mb-3 mt-1.5" >
                                <option value="" name="" className="text-gray-100">Gender</option>
                                <option value="Female" name="Female" className="p-2">Female</option>
                                <option value="Male" name="Male" className="p-2">Male</option>
                            </select>
                            <input type="number" name="age" placeholder='Age' value={userInput.age} onChange={handleChange} className="h-10 rounded-md border border-slate-300 text-sm px-4 mb-3 mt-1.5" />
                            <input type="text" name="phoneNumber" placeholder='Phone' value={userInput.phoneNumber} onChange={handleChange} className="h-10 rounded-md border border-slate-300 text-sm px-4 mb-3 mt-1.5" />
                            {/* <input type="date" value={userInput.dob} onChange={(e) => dobChange(e.target.value)} placeholder='Date of Birth' className="h-10 rounded-md border text-gray-500 border-slate-300 text-sm px-4 mb-3 mt-1.5" /> 
                            <input type="text" value={userInput.status} onChange={(e) => statusChange(e.target.value)} placeholder='Status' className="h-10 rounded-md border border-slate-300 text-sm px-4 mb-3 mt-1.5" />  */}
                            <div className="bg-rose-900 rounded-md hover:bg-rose-800 mt-6 cursor-pointer text-center text-white">
                                <button type="submit" onClick={() => setIsOpen(!isOpen)} className="px-6 py-2">Back</button>
                            </div>
                            <div className="bg-teal-900 rounded-md hover:bg-teal-800 mt-6 cursor-pointer text-center text-white">
                                <button type="submit" className="px-6 py-2">Add Patient</button>
                            </div>
                        </form>
                        </div>
                    </ReactModal> }
                </div>
            </div>
           
           <div className='shadow-lg border rounded-xl mt-8'>
            {
                isClient && <DataTable
                // className='w-full max-w-fit' 
                columns={ patientColumns } 
                data={ dataArr }
                selectableRows 
                // defaultSortAsc={true}
                responsive="true"
                direction='isltr'
                pagination
                highlightOnHover
                >
                </DataTable>
            }

            {/* <div>
                  <table>
                    <tbody>
                        {dataArr.map((user, index) => {
                            return (
                            <ul key={index}>
                                <li>{user.cardNumber}</li>
                                <li>{user.firstName}</li>
                                <li>{user.lastName}</li>
                                <li>{user.diagnosis}</li>
                                <li>{user.email}</li>
                                <li>{user.gender}</li>
                                <li>{user.age}</li>
                                <li>{user.phoneNumber}</li>
                            </ul>
                        )})
                        }
                    </tbody>
                  </table>
            </div> */}
            </div>
        </div>
    </div>
    )
}
