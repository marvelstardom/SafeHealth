import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../../../components/layouts";
import Link from "next/link";
import axios from "axios";
import { patientData } from "../patientData";

export default function Patient() {
    // const [dataArr, setDataArr] = useState([])
    const { id } = useParams()
    const [patientRecords, setPatientRecords] = useState(patientData)
    useEffect(() => {
      axios.get(patientRecords)
        .then(res => setPatientRecords(res.data))
        .catch(err => console.log(err))
    }, [patientRecords])

    // const { newPatient, setNewPatient} = useState({})
    return Layout (
        <div className="w-fit max-w-7xl ml-12 py-16 pl-8 h-full flex flex-row gap-6">
            {/* PATIENT'S FULL DATA INFO */}
            <div className="block bg-white py-6 p-8 rounded-2xl shadow-md text-md w-1/2">
               { patientRecords &&  
               <ul key={patientRecords.id} className="mb-10">
                   <li className="font-bold text-xl text-gray-600">First Name: {patientRecords.firstName}</li>
                   <li className="font-bold text-xl text-gray-600">Last Name: {patientRecords.lastName}</li>
                   <li className="font-bold text-xl text-gray-600">Card No: {patientRecords.cardNumber}</li>
                   <li className="font-normal text-md text-gray-600">Email: {patientRecords.email}</li>
                   <li className="font-normal text-md text-gray-600">Diagnosis: {patientRecords.diagnosis}</li>
                   <li className="font-normal text-md text-gray-600">Gender: {patientRecords.gender}</li>
                   <li className="font-normal text-md text-gray-600">Age: {patientRecords.age}</li>
                   <li className="font-normal text-md text-gray-600">Phone: {patientRecords.phoneNumber}</li>
                </ul>}
                {/* ICONS */}
                <div className="flex flex-row gap-4 mb-10">
                    {/* EDIT */}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="bg-teal-600 hover:bg-teal-500 text-white rounded-lg p-2 w-8 h-8"><path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" /><path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" /></svg>
                    </div>
                    {/* MESSAGE */}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bg-blue-600 hover:bg-blue-500 text-white rounded-lg p-2 w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>
                    </div>
                    {/* CALL */}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bg-amber-600 hover:bg-amber-500 text-white rounded-lg p-2 w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-gray-600 mb-4">General Information</h1>
                    <div className="flex flex-col justify-between gap-2">
                        <h1>Height 126cm</h1>
                        <h1>Weight 23kg</h1>
                        <h1>Blood Group O+</h1>
                        <h1>Genotype AB</h1>
                    </div>
                </div>
            </div>

            {/* PATIENT HISTORY */}
           <div className="flex flex-col gap-6 w-1/2 justify-between">
             <div className="block bg-white py-8 p-8 rounded-2xl text-md h-80 w-auto shadow-md">
                <h1 className="text-2xl font-bold text-gray-600 mb-4">Medical History</h1>
                <div className="flex flex-col justify-between gap-2">
                    <h1>Symptoms</h1>
                    <h1>Diagnosis</h1>
                    {/* <div class="shrink-0">
                        <img class="h-16 w-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
                    </div> */}
                    <div className="flex items-end justify-between mt-24 pb-10">
                        <Link className="self-end" href=""><button className="rounded-full bg-teal-900 text-white py-2 px-4">View all info</button></Link>
                        <form class="flex items-end justify-end space-x-6">
                            <label class="block">
                                {/* <span class="sr-only">Choose profile photo</span> */}
                                <h1 className="font-bold text-amber-800">Upload Patient&apos;s Record</h1>
                                <input type="file" class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-100 file:text-amber-700 hover:file:bg-amber-600 hover:file:text-white"/>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
            {/* APPOINTMENTS */}
             <div className="block bg-white py-6 px-6 rounded-2xl text-md w-auto shadow-md">
                <h1 className="text-2xl font-bold text-gray-600 mb-4">Appointments</h1>
                <div className="flex flex-col justify-start gap-4">
                    <h1 className="mb-12">This is the latest updates from the past seven days</h1>
                    <div className="block bg-gray-100 p-4 rounded-lg">
                        <table className="table-auto flex flex-col w-auto">
                            <thead className="">
                                <tr className="grid grid-cols-7 text-left items-start justify-start gap-x-12 w-full">
                                    <th>Department</th>
                                    <th className="ml-4">Date</th>
                                    <th className="ml-8">Time</th>
                                    <th className="ml-12 col-span-3">Doctor&apos;s Name</th>
                                    <th className="-ml-4">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="basis-1/2 grid grid-cols-6 text-left items-start justify-start gap-x-12 w-full">
                                    <td>Dermatology</td>
                                    <td>01Feb2023</td>
                                    <td>10am</td>
                                    <td className="col-span-2">Dr. Rasheed</td>
                                    <td className=""><progress id="file" value="32" max="100"  className="rounded-full w-14 h-4">32%</progress></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}
