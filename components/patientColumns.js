// import React from 'react'
import Link from 'next/link'

export const patientColumns = [
    {
        name: 'ID',
        selector: row => row.id,
        sortable: true,
        width: "6%",
    },
    {
        name: 'Card No',
        selector: row => row.cardNumber,
        sortable: true,
    },
    {
        name: 'First Name',
        selector: row => row.firstName,
        sortable: true,
    },
    {
        name: 'Last Name',
        selector: row => row.lastName,
        sortable: true,
    },
    {
        name: 'Diagnosis',
        selector: row => row.diagnosis,
        sortable: true,
    },
    {
        name: 'Email',
        selector: row => row.email,
        sortable: true,
    },
    {
        name: 'Gender',
        selector: row => row.gender,
        sortable: true,
    },
    {
        name: 'Age',
        selector: row => row.age,
        sortable: true,
    },
    {
        name: 'Phone',
        selector: row => row.phoneNumber,
        sortable: true,
    },
    {
        name: 'Action',
        cell: row => (
            <div className='flex flex-row items-center justify-center'>
                {/* EDIT */}
            <button onClick={() => alert(row.cardNumber + ', '+ row.firstName + ' ' + row.lastName + ', ' + row.email + ', ' + row.diagnosis + ', ' + row.gender + ', ' + row.age + ', ' + row.phoneNumber )}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-teal-800 hover:fill-teal-700 text-white rounded-lg w-6 h-6"><path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" /><path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" /></svg>
            </button>
            {/* VIEW */}
            <Link href={{pathname: '/dashboard/patients/patient/:id', query: {id: row.id}}} >
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fill-blue-600 hover:fill-blue-500 text-white rounded-lg w-6 h-6 flex items-center"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z" /><path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" /></svg>
            </button>
            </Link>
                {/* DELETE */}
            <button onClick={(id) =>  {
                var delVal = confirm("Are you sure you want to delete this Patient?");
               if( delVal == true ) {
                  var values = Object.values(row)
                  return values.filter(row => row.id !== id)
               } else {
                  return false;
               }
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fill-rose-600 hover:fill-rose-500 text-white rounded-lg w-6 h-6">
                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" /><path fillRule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.133 2.845a.75.75 0 011.06 0l1.72 1.72 1.72-1.72a.75.75 0 111.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 11-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" /></svg>
            </button>
            </div>
        )
    }
]

