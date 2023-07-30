"use client"
import React from "react";
import Layout from "../components/layouts";
import { DoctorsTable } from "./doctorsTable";

export default function Doctors(){
    return Layout(
        <div className="flex flex-col bg-gray-200 w-full pt-14 pb-40 px-16 h-full">
            <DoctorsTable />
        </div>
    )
}