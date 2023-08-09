"use client"
import React from "react";
import { useState, useEffect } from "react";
import Layout from "../../../components/layouts";
import DoctorsTable from "./doctorsTable";

export default function Doctors(){
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return Layout(
        <div className="flex flex-col bg-gray-200 w-full pt-14 pb-40 px-16 h-full">
            {isClient && <DoctorsTable />}
        </div>
    )
}