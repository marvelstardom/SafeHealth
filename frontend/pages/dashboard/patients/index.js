"use client"
import React from "react";
import { useState } from "react";
import Layout from "../components/layouts";
// import FilterPatient from "./filterPatient";
import {patientData} from './patientData'
import { PatientsTable } from "./patientsTable";
import AddPatient from "./addPatient";

export default function Patients(){
    const [patientRecords, setPatientRecords] = useState(patientData)
    // const [formState, setFormState] = useState(patientData)

    const handleFilter = (e) => {
    const newData = patientRecords.filter(row => {
        return row.firstName.toLowerCase().includes(e.target.value)
    }) 
    setPatientRecords(newData)
    }

    // const handleSubmit = (e) => {
    //     // const newFormState = {firstName, lastName, cardNumber, diagnosis, email, age, phoneNumber, gender}
    //     e.preventDefault()
    //     setFormState(formState)
    //     console.log(formState)
    // }

    // const handleSubmit = (e) => {
    //     const newPatient = {fName, lName, cardNo, diagnosis, email, age, gender, phone}
    //     fetch(patientData, {
    //         method: 'POST',
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify(newPatient)
    //     }).then(response => {
    //         alert("Successfully Added")
    //     }).catch(err => {
    //         console.error(err.message);
    //     })
    // }

    

    return Layout(
        <div className="flex flex-col justify-between w-full bg-gray-200 pt-14 pb-40 px-16 h-full">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center justify-start">
                    <svg className="bg-teal-900 text-white rounded-lg p-1 w-8 h-8 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                    <h1 className='font-bold text-lg'>All Patients</h1>
                </div>
                {/* FILTER PATIENT */}
                <div><input type="filter" placeholder="Filter" onChange={handleFilter} className="py-2 px-4 font-normal bg-white border rounded-lg"/></div>
                {/* <FilterPatient /> */}
                <AddPatient />
            </div>
            <PatientsTable patientRecords={patientRecords} />
        </div>
    )
}