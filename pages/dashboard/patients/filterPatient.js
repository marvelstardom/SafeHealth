import React, { useState } from 'react'
import { patientData } from './patientData'

export default function FilterPatient() {
    const [patientRecords, setPatientRecords] = useState(patientData)

    const handleFilter = (e) => {
    const newData = patientRecords.filter(row => {
        return row.firstName.toLowerCase().includes(e.target.value)
    }) 
    setPatientRecords(newData)
    }
  return (
    <div>
        <input type="filter" placeholder="Filter" onChange={handleFilter} className="py-2 px-4 font-normal bg-white border rounded-lg"/>
    </div>
  )
}
