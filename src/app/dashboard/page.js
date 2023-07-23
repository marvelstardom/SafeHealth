import React from "react";
import Layout from "./components/layout/page";
import Overview from "./overview/page";
import Doctors from "./doctors/page";
import Patients from "./patients/page";

export default function MainDashboard({content}) {
    return (
    <div className="flex flex-row w-full h-full m-0 p-0 bg-white">
        {/* <Layout content={content} /> */}
    </div>
    )
}