import React from "react";
import Layout from "../../../components/layouts";
import Image from "next/image";
import patient from "../../../public/images/patient (1).png"
import doctor from "../../../public/images/hospital.png"
import appointment from "../../../public/images/medical.png"
import syringe from "../../../public/images/syringe.png"
import chart from "../../../public/images/arrow-chart.png"
import dots from "../../../public/images/dots.png"
import Chart from "../components/Chart"
import AppCalendar from "../components/Calendar";


export default function Overview() {
    return Layout (
    <div className='mt-14 ml-10 h-screen w-full max-w-7xl m-0 pl-10'>

        {/* OVERVIEW TABS */}
      <div className="mb-6 grid grid-cols-1 gap-6 text-white sm:grid-cols-2 xl:grid-cols-4">
        {/* SESSION */}
        {/* <div className="panel bg-gradient-to-r from-fuchsia-500 to-fuchsia-400">
          <div className="flex justify-between">
            <div className="text-md font-semibold ltr:mr-1 rtl:ml-1">Session</div>
            
          </div>
          <div className="mt-5 flex items-center">
            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3"> 2023 </div>
            <div className="badge bg-white/30">+ 0.35% </div>
          </div>
          <div className="mt-5 flex items-center font-semibold">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ltr:mr-2 rtl:ml-2">
              <path
                opacity="0.5"
                d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
                          Second Term
          </div>
        </div> */}
        {/* TOTAL STAFFS */}
        {/* <div className="panel bg-gradient-to-r from-cyan-500 to-cyan-400">
          <div className="flex justify-between">
            <div className="text-md font-semibold ltr:mr-1 rtl:ml-1">Total Staffs</div>
            
          </div>
          <div className="mt-5 flex items-center">
            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3"> 170 </div>
            <div className="badge bg-white/30">+ 2.35% </div>
          </div>
          <div className="mt-5 flex items-center font-semibold">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ltr:mr-2 rtl:ml-2">
              <path
                opacity="0.5"
                d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
                          Last Term 135
          </div>
        </div> */}
        {/* TOTAL STUDENTS */}
        {/* <div className="panel bg-gradient-to-r from-violet-500 to-violet-400">
          <div className="flex justify-between">
            <div className="text-md font-semibold ltr:mr-1 rtl:ml-1">Total Students</div>
            
          </div>
          <div className="mt-5 flex items-center">
            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3"> 5,137 </div>
            <div className="badge bg-white/30">+ 2.35% </div>
          </div>
          <div className="mt-5 flex items-center font-semibold">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ltr:mr-2 rtl:ml-2">
              <path
                opacity="0.5"
                d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
                          Last Term 4,709
          </div>
        </div> */}
        {/*  ADMISSION */}
        {/* <div className="panel bg-gradient-to-r from-blue-500 to-blue-400">
          <div className="flex justify-between">
            <div className="text-md font-semibold ltr:mr-1 rtl:ml-1">Admissions</div>
           
          </div>
          <div className="mt-5 flex items-center">
            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3"> 1,085 </div>
            <div className="badge bg-white/30">+ 1.35% </div>
          </div>
          <div className="mt-5 flex items-center font-semibold">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ltr:mr-2 rtl:ml-2">
              <path
                opacity="0.5"
                d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
                          Last Session 894
          </div>
        </div> */}
      </div>
      {/* END OF OVERVIEW TABS */}

        <div className='flex flex-row gap-2 mb-6'>
            {/* TOTAL PATIENTS */}
            <div className="flex flex-col border-4 border-teal-900 rounded-3xl py-4 px-6 shadow-md w-1/4">
                <div className="flex flex-row justify-between items-center mb-6 mt-2">
                    <div className="flex flex-row items-center">
                        <Image
                        src={patient}
                        height={24}
                        width={24}
                        alt="doctor"
                        className="mr-1"
                        /> 
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-1"><path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" /><path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" /></svg> */}
                        <h1 className='text-2xl font-bold'>Total Patients</h1>
                    </div>
                    <div>
                        <Image
                        src={dots}
                        height={30}
                        width={30}
                        alt="dots"
                        className="pl-2 cursor-pointer flex justify-end"
                        />  
                    </div>  
                </div>
                <h1 className='text-6xl font-bold text-teal-900 mb-3'>1,360</h1>
                <p className="text-sm">Patients data collected from the last two months.</p>
                <div className="flex flex-row justify-end items-center mt-6 text-teal-900">
                    <h1>55%</h1>
                    <Image
                    src={chart}
                    height={18}
                    width={18}
                    alt="chart"
                    className="ml-2"
                />    
                </div>
            </div>

            {/* TOTAL DOCTORS */}
            <div className="flex flex-col border-4 rounded-3xl py-4 px-6 shadow-md border-orange-600 w-1/4">
                <div className="flex flex-row items-center justify-between mb-6 mt-2">
                    <div className="flex flex-row items-center">
                        <Image
                        src={doctor}
                        height={24}
                        width={24}
                        alt="doctor"
                        className="mr-1 w-8 h-8"
                        />    
                        <h1 className='text-2xl font-bold text-gray-900'>Total Doctors</h1>
                    </div>
                    <Image
                    src={dots}
                    height={30}
                    width={30}
                    alt="dots"
                    className="pl-2 cursor-pointer flex justify-end"
                    /> 
                </div>
                <h1 className='text-6xl font-bold text-gray-900 mb-3 text-orange-600'>154</h1>
                <p className="text-sm">Doctors data collected from the last two weeks.</p>
                <div className="flex flex-row justify-end items-center mt-6 text-orange-600">
                <h1>37%</h1>
                <Image
                src={chart}
                height={18}
                width={18}
                alt="chart"
                className="ml-2 text-orange-600"
                />    
                </div>
            </div>

            {/* APPOINTMENTS */}
            <div className="flex flex-col border-4 rounded-3xl py-4 px-6 shadow-md w-1/4 border-gray-400">
                <div className="flex flex-row items-center justify-between mb-6 mt-2">
                    <div className="flex flex-row items-center">
                        <Image
                        src={appointment}
                        height={26}
                        width={26}
                        alt="appointment"
                        className="mr-2"
                        />    
                        <h1 className='text-2xl font-bold text-gray-900'>Appointments</h1>
                    </div>
                <Image
                    src={dots}
                    height={30}
                    width={30}
                    alt="dots"
                    className="pl-2 cursor-pointer flex justify-end"
                    /> 
                </div>
                <h1 className='text-6xl font-bold text-gray-900 mb-3'>112</h1>
                <p className="text-sm">Appointments data collected from the last two weeks.</p>
                <div className="flex flex-row justify-end items-center mt-6">
                <h1>29%</h1>
                <Image
                src={chart}
                height={18}
                width={18}
                alt="doctor"
                className="ml-2"
                />    
                </div>
            </div>

            {/* SURGERIES */}
            <div className="flex flex-col border-4 rounded-3xl py-4 px-6 shadow-md w-1/4 border-gray-400">
                <div className="flex flex-row items-center justify-between mb-6 mt-2">
                    <div className="flex flex-row items-center">
                        <Image
                        src={syringe}
                        height={26}
                        width={26}
                        alt="doctor"
                        className="mr-2"
                        />    
                        <h1 className='text-2xl font-bold text-gray-900'>Surgeries</h1>
                    </div>
                <Image
                    src={dots}
                    height={30}
                    width={30}
                    alt="doctor"
                    className="pl-2 cursor-pointer flex justify-end"
                    /> 
                </div>
                <h1 className='text-6xl font-bold text-gray-900 mb-3'>67</h1>
                <p className="text-sm">Surgeries data collected from the last two weeks.</p>
                <div className="flex flex-row justify-end items-center mt-6 ">
                <h1>12%</h1>
                <Image
                src={chart}
                height={18}
                width={18}
                alt="doctor"
                className="ml-2"
                />    
                </div>
            </div>
        </div>

            {/*  flex items-center justify-start px-5 py-5  */}
        <div className="flex flex-row gap-4">
            <div className="w-1/2 h-1/3 rounded-3xl shadow-md p-4 bg-white border-3">
                <Chart />
            </div>
            {/* CALENDAR */}
            <div className="w-1/2 h-80 rounded-3xl shadow-md p-4 bg-white border-3 flex flex-row gap-4">

            <AppCalendar />   
            <div className="flex flex-col gap-2 font-bold text-xl text-teal-900 justify-center">
                <div>Pending</div> 
                <div>Completed</div> 
            </div>
            </div>
        </div>
    </div>
    )
}