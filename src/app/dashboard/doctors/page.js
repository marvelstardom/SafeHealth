"use client"
import React from "react";
import { useState, useEffect } from "react";
import Layout from "../components/layout/page";
import Link from "next/link";
import Icons from "@/app/hooks/icons/page";
import {doctors} from "@/app/dashboard/doctors/doctorsData/page";
import { DoctorsTable } from "./doctorsTable/page";

export default function Doctors(){
    // const [input, setInput] = useState('')
    // const [newDoctor, setNewDoctor] = useState()
    // const handleChange = (e) => {
    //    setInput(input + '')
    // }
    // const addNewDoctor = (e) => {setNewDoctor(newDoctor)}
    // useEffect(() => {
    //   return () => {
    //   }
    // }, [newDoctor, setNewDoctor])
    

    return Layout(
        <div className="flex flex-col bg-gray-200 w-full pt-14 pb-40 px-16 h-full">

            <DoctorsTable />

        </div>
    )
}