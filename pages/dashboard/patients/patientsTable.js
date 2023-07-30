/* eslint-disable react/jsx-key */
// "use client"
import React from 'react'
import AddPatient from './addPatient'
import DataTable from 'react-data-table-component'
import {patientColumns} from './patientColumns'


export const PatientsTable = (props) => {

  return (
    <>
    
    <div className='shadow-lg border rounded-xl mt-10'>
        <DataTable 
        className='w-full max-w-fit' 
        columns={patientColumns} 
        data={props.patientRecords}
        // formState={props.formState} 
        selectableRows 
        // defaultSortAsc={true}
        responsive="true"
        direction='isltr'
        pagination
        highlightOnHover
        >
          {/* {formState} */}
        </DataTable>
    </div>

    </>
  )
}