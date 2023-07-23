'use client'
import React, { useEffect } from "react";
import Layout from "../components/layout/page";
import Link from "next/link";
import Icons from "@/app/hooks/icons/page";
import { people } from "@/app/data/patientsData/page";

export default function Patients() {
    const addPatient = async () => {
        try{
            const response = await fetch("https://famous-quotes4.p.rapidapi.com/random?category=all&count=2", {
                method: "GET",
                headers: {
                    'X-RapidAPI-Key': 'your-rapidapi-key',
                    'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
                },
            })
            const result = response.json
            console.log(result)
        } catch (err) {
            console.error(err)
        }
    }
    return Layout(
    <div className="flex flex-col bg-white w-full pt-14 pb-48 px-20 h-full">
        <div className="flex flex-row mb-12">
            <Link href=''><button className="py-2 px-4 rounded-lg bg-teal-900 hover:bg-teal-800 text-white" onClick={addPatient}>Add New Patient</button></Link>
        </div>
        <div className="shadow-lg border rounded-xl">
            <table className="table-auto">
                <thead className="bg-gray-100">
                    <tr className="flex flex-row items-center gap-4 text-left px-8 py-6">
                        <th className="flex flex-row items-center">
                            <svg className="bg-teal-900 text-white rounded-lg p-2 w-8 h-8 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                            All Patients
                        </th>
                        {/* <tr className="flex flex-row justify-end gap-2"> */}
                            <th><input type="search" className="pl-4 bg-white border rounded-lg py-2 font-normal" placeholder="Find Patient"></input></th>
                        <th><input type="filter" placeholder="filter" className="py-2 px-4 font-normal bg-white border rounded-lg"/></th>
                        {/* </tr> */}
                    </tr>
                </thead>
                <thead className="bg-gray-100">
                    <tr className="grid grid-cols-10 text-left px-8 py-6 items-center justify-start">
                        <th>NO</th>
                        <th>Card Number</th>
                        <th className="col-span-2">Patient&apos;s Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th className="col-span-3">Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {people.map((person) => (
                    <tr key={person.id} className="grid grid-cols-10 text-left px-8 pt-6 items-center justify-center">
                        <td>{person.id}</td>
                        <td>{person.patientNumber}</td>
                        <td className="col-span-2">{person.name}</td>
                        <td>{person.age}</td>
                        <td>{person.gender}</td>
                        <td className="col-span-3">{person.email}</td>
                        <td><Icons /></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    )
}