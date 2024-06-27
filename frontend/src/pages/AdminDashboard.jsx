import React from "react";
import FetchReservation from "../components/FetchReservation";
import Sidebar from "../components/Sidebar";


const Dashboard = () => {
    return(
        <>
           
            <FetchReservation/>
            <Sidebar/>
        </>
    )
}

export default Dashboard