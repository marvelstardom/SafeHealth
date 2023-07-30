import React, { useState } from 'react'
import ReactModal from "react-modal"
import { patientData } from './patientData'

export default function AddPatient() {
    const [isOpen, setIsOpen] = useState(false)
    const [formState, setFormState] = useState(patientData)

    const handleSubmit = (e) => {
        // const newFormState = {firstName, lastName, cardNumber, diagnosis, email, age, phoneNumber, gender}
        e.preventDefault()
        setFormState(formState)
        console.log(formState)
    }
  return (
    <div>
        <button onClick={() => setIsOpen(!isOpen)} className="py-2 px-4 rounded-lg bg-teal-900 hover:bg-teal-800 text-white">
            Add New Patient
        </button>
        <ReactModal isOpen={isOpen} onRequestClose={() => setIsOpen(!isOpen)} className='mx-auto mt-32 w-1/2 z-10 text-center'>
            <div className="bg-gray-100 p-12 border rounded-2xl shadow-md">
            <h1 className="text-lg font-bold mb-4">Add New Patient</h1>
            
            <form className="grid grid-cols-2 gap-x-4" onSubmit={handleSubmit}>
                {/* <input type="number" disabled="disabled" placeholder='ID' className="h-10 rounded-md border border-slate-300 text-sm px-4 mb-3 mt-1.5" /> */}
                <input id='' type="text" value={formState.firstName} onChange={(e) => setFormState({firstName: e.target.value})} placeholder='First Name' className="h-10 rounded-md border border-slate-300 text-sm px-4 mb-3 mt-1.5" />
                <input type="text" value={formState.lastName} onChange={(e) => setFormState({lasttName: e.target.value})} placeholder='Last Name' className="h-10 rounded-md border border-slate-300 text-sm px-4 mb-3 mt-1.5" />
                <input type="text" value={formState.cardNumber} onChange={(e) => setFormState({cardNumber: e.target.value})} placeholder='Card Number' className="h-10 rounded-md border border-slate-300 text-sm px-4 mb-3 mt-1.5" />
                <input type="text" value={formState.diagnosis} onChange={(e) => setFormState({diagnosis: e.target.value})} placeholder='Diagnosis' className="h-10 rounded-md border border-slate-300 text-sm px-4 mb-3 mt-1.5" />
                <input type="email" value={formState.email} onChange={(e) => setFormState({email: e.target.value})} placeholder='Email' className="h-10 rounded-md border border-slate-300 text-sm px-4 mb-3 mt-1.5" />
                {/* <input type="text" placeholder='Gender' className="h-10 rounded-md border border-slate-300 text-sm px-4 mb-3 mt-1.5" /> */}
                <select name="Gender" value={formState.gender} onChange={(e) => setFormState({gender: e.target.value})} id="" className="h-10 rounded-md border border-slate-300 text-sm text-gray-500 px-4 mb-3 mt-1.5" >
                    <option value="" name="" className="text-gray-100">Gender</option>
                    <option value="Female" className="p-2">Female</option>
                    <option value="Male" className="p-2">Male</option>
                </select>
                <input type="number" value={formState.age} onChange={(e) => setFormState({age: e.target.value})} placeholder='Age' className="h-10 rounded-md border border-slate-300 text-sm px-4 mb-3 mt-1.5" />
                <input type="text" value={formState.phoneNumber} onChange={(e) => setFormState({phoneNumber: e.target.value})} placeholder='Phone' className="h-10 rounded-md border border-slate-300 text-sm px-4 mb-3 mt-1.5" />
                {/* <input type="date" value={dob} onChange={(e) => dobChange(e.target.value)} placeholder='Date of Birth' className="h-10 rounded-md border text-gray-500 border-slate-300 text-sm px-4 mb-3 mt-1.5" /> 
                <input type="text" value={status} onChange={(e) => statusChange(e.target.value)} placeholder='Status' className="h-10 rounded-md border border-slate-300 text-sm px-4 mb-3 mt-1.5" />  */}
                <div className="bg-rose-900 rounded-md hover:bg-rose-800 mt-6 cursor-pointer text-center text-white">
                    <button type="submit" onClick={() => setIsOpen(!isOpen)} className="px-6 py-2">Back</button>
                </div>
                <div className="bg-teal-900 rounded-md hover:bg-teal-800 mt-6 cursor-pointer text-center text-white">
                    <button type="submit" className="px-6 py-2">Add Patient</button>
                </div>
            </form>
            </div>
        </ReactModal>
    </div>
  )
}
