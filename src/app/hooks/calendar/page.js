import React from "react";

export default function Calendar () {
 return (
   <div className="float-right mb-10">
     <div className='rounded-3xl shadow-lg w-[290px]'>
       <div>
         {/* <div className='flex items-center justify-center py-8 px-2'> */}
         {/* <div className='2xl:w-1/3 xl:w-1/2 lg:w-3/5 sm:w-4/5 w-full shadow-lg'> */}
         <div className='p-4 bg-white border-3 rounded-lg shadow-lg'>
           <div className='flex justify-between pb-5'>
             <h5 className='text-gray-900 leading-tight font-medium mb-2'>
              Calendar
             </h5>

             <div className='block'>
               <button
                 type='button'
                 className='inline-flex justify-center rounded-md border bg-emerald border-gray-300 px-2 py-1 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none '
                 id='menu-button'
                 aria-expanded='true'
                 aria-haspopup='true'
               >
                 Neurology
                 <svg
                   className='-mr-1 ml-1 h-4 w-5'
                   xmlns='http://www.w3.org/2000/svg'
                   viewBox='0 0 20 20'
                   fill='currentColor'
                   aria-hidden='true'
                 >
                   <path
                     fill-rule='evenodd'
                     d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                     clip-rule='evenodd'
                   />
                 </svg>
               </button>
             </div>
           </div>

           <div className='px-2 flex items-center justify-between'>
             <h1 className='text-xs font-bold dark:text-gray-100 text-gray-800'>
               July 2023
             </h1>
             <div className='flex items-center text-gray-800 dark:text-gray-100'>
               <svg
                 xmlns='http://www.w3.org/2000/svg'
                 className='icon icon-tabler icon-tabler-chevron-left'
                 width={24}
                 height={24}
                 viewBox='0 0 24 24'
                 strokeWidth='1.5'
                 stroke='currentColor'
                 fill='none'
                 strokeLinecap='round'
                 strokeLinejoin='round'
               >
                 <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                 <polyline points='15 6 9 12 15 18' />
               </svg>
               <svg
                 xmlns='http://www.w3.org/2000/svg'
                 className='icon icon-tabler ml-3 icon-tabler-chevron-right'
                 width={24}
                 height={24}
                 viewBox='0 0 24 24'
                 strokeWidth='1.5'
                 stroke='currentColor'
                 fill='none'
                 strokeLinecap='round'
                 strokeLinejoin='round'
               >
                 <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                 <polyline points='9 6 15 12 9 18' />
               </svg>
             </div>
           </div>
           <div className='flex items-center justify-between pt-8 overflow-x-auto'>
             <table className='w-full'>
               <thead>
                 <tr>
                   <th>
                     <div className='w-full flex justify-center'>
                       <p className='text-xs font-medium text-center text-gray-800 dark:text-gray-100'>
                         Mo
                       </p>
                     </div>
                   </th>
                   <th>
                     <div className='w-full flex justify-center'>
                       <p className='text-xs font-medium text-center text-gray-800 dark:text-gray-100'>
                         Tu
                       </p>
                     </div>
                   </th>
                   <th>
                     <div className='w-full flex justify-center'>
                       <p className='text-xs font-medium text-center text-gray-800 dark:text-gray-100'>
                         We
                       </p>
                     </div>
                   </th>
                   <th>
                     <div className='w-full flex justify-center'>
                       <p className='text-xs font-medium text-center text-gray-800 dark:text-gray-100'>
                         Th
                       </p>
                     </div>
                   </th>
                   <th>
                     <div className='w-full flex justify-center'>
                       <p className='text-xs font-medium text-center text-gray-800 dark:text-gray-100'>
                         Fr
                       </p>
                     </div>
                   </th>
                   <th>
                     <div className='w-full flex justify-center'>
                       <p className='text-xs font-medium text-center text-gray-800 dark:text-gray-100'>
                         Sa
                       </p>
                     </div>
                   </th>
                   <th>
                     <div className='w-full flex justify-center'>
                       <p className='text-xs font-medium text-center text-gray-800 dark:text-gray-100'>
                         Su
                       </p>
                     </div>
                   </th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td className='pt-1'>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center' />
                   </td>
                   <td className='pt-1'>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center' />
                   </td>
                   <td>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center' />
                   </td>
                   <td className='pt-1'>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100 font-medium'>
                         1
                       </p>
                     </div>
                   </td>
                   <td className='pt-1'>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100 font-medium'>
                         2
                       </p>
                     </div>
                   </td>
                   <td className='pt-1'>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100'>
                         3
                       </p>
                     </div>
                   </td>
                   <td className='pt-1'>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100'>
                         4
                       </p>
                     </div>
                   </td>
                 </tr>
                 <tr>
                   <td>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100 font-medium'>
                         5
                       </p>
                     </div>
                   </td>
                   <td>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100 font-medium'>
                         6
                       </p>
                     </div>
                   </td>
                   <td>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100 font-medium'>
                         7
                       </p>
                     </div>
                   </td>
                   <td>
                     <div className='w-full h-full'>
                       <div className='flex items-center justify-center w-full rounded-full cursor-pointer'>
                         <p className='text-xs w-7 h-7 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full'>
                           8
                         </p>
                       </div>
                     </div>
                   </td>
                   <td>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100 font-medium'>
                         9
                       </p>
                     </div>
                   </td>
                   <td>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100'>
                         10
                       </p>
                     </div>
                   </td>
                   <td>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100'>
                         11
                       </p>
                     </div>
                   </td>
                 </tr>
                 <tr>
                   <td>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100 font-medium'>
                         12
                       </p>
                     </div>
                   </td>
                   <td>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100 font-medium'>
                         13
                       </p>
                     </div>
                   </td>
                   <td>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100 font-medium'>
                         14
                       </p>
                     </div>
                   </td>
                   <td>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100 font-medium'>
                         15
                       </p>
                     </div>
                   </td>
                   <td>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100 font-medium'>
                         16
                       </p>
                     </div>
                   </td>
                   <td>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100'>
                         17
                       </p>
                     </div>
                   </td>
                   <td>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100'>
                         18
                       </p>
                     </div>
                   </td>
                 </tr>
                 <tr>
                   <td>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100 font-medium'>
                         19
                       </p>
                     </div>
                   </td>
                   <td>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100 font-medium'>
                         20
                       </p>
                     </div>
                   </td>
                   <td>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100 font-medium'>
                         21
                       </p>
                     </div>
                   </td>
                   <td>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100 font-medium'>
                         22
                       </p>
                     </div>
                   </td>
                   <td>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100 font-medium'>
                         23
                       </p>
                     </div>
                   </td>
                   <td>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100'>
                         24
                       </p>
                     </div>
                   </td>
                   <td>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100'>
                         25
                       </p>
                     </div>
                   </td>
                 </tr>
                 <tr>
                   <td>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100 font-medium'>
                         26
                       </p>
                     </div>
                   </td>
                   <td>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100 font-medium'>
                         27
                       </p>
                     </div>
                   </td>
                   <td>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100 font-medium'>
                         28
                       </p>
                     </div>
                   </td>
                   <td>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100 font-medium'>
                         29
                       </p>
                     </div>
                   </td>
                   <td>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100 font-medium'>
                         30
                       </p>
                     </div>
                   </td>
                   <td>
                     <div className='px-2 py-2 cursor-pointer flex w-full justify-center'>
                       <p className='text-xs text-gray-500 dark:text-gray-100 font-medium'>
                         31
                       </p>
                     </div>
                   </td>
                 </tr>
               </tbody>
             </table>
           </div>
         </div>
         <div className=' px-5 dark:bg-gray-700 bg-gray-50 rounded-b'>
           <div className='px-2'>
             <div className='border-b pb-4 pt-4 text-left border-gray-400 border-solid'>
               <p className='text-sm font-medium leading-3 text-gray-500 dark:text-gray-300'>
                 Time
               </p>
               {/*
             <p className='text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 pt-2'>
               Zoom call with design team
             </p> */}
               <div className='flex justify-between'>
                 <div class='divide-y divide-solid text-left text-xs w-50'>
                   <div className='py-2'>08:00am</div>
                   <div className='py-2'>09:00am</div>
                 </div>
                 <div className='px-6 py-2 dark:bg-gray-800 bg-emerald rounded-t'>
                   <p className='text-xs'>08:00am - 09:00am</p>
                   <h4 className='text-sm font-medium'>Isaac John</h4>
                 </div>
               </div>

               <div className='py-2 text-xs divide-y divide-solid'>
                 <p>10:00am</p>
               </div>

               <div className='flex justify-between'>
                 <div class='divide-y divide-solid text-left text-xs px-0'>
                   <div className='py-2'>11:00am</div>
                   <div className='py-2'>12:00pm</div>
                 </div>
                 <div className='px-6 py-2 dark:bg-gray-800 bg-dimBlue rounded-t'>
                   <p className='text-xs'>11:00am - 12:00pm</p>
                   <h4 className='text-sm font-medium'>Patrick Stewart</h4>
                 </div>
               </div>

               <div className='flex justify-between py-4'>
                 <div class='divide-y divide-solid text-left text-xs px-0'>
                   <div className='py-2'>11:00am</div>
                   <div className='py-2'>12:00pm</div>
                 </div>
                 <div className='px-6 py-2 dark:bg-gray-800 bg-emerald rounded-t'>
                   <p className='text-xs'>11:00am - 12:00pm</p>
                   <h4 className='text-sm font-medium'>Jessicca Good</h4>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 )
}
