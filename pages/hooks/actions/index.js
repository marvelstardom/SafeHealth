import React from 'react';
// import Link from 'next/link';
import Delete from './delete';
import Edit from './edit';
// import Preview from './preview';
// import { patientData } from '@/app/dashboard/patients/patientData';

export default function Icons() {
    return (
    <div className='flex flex-row gap-2'>
       <Edit />
       <Delete />
       {/* <Preview /> */}
    </div>
    );
}
