import React, { useEffect, useState } from "react"
import AppBar from "../components/AppBar"
import Users from "../components/Users"
import Balance from "../components/Balance"
import axios from "axios"

export default function Dashboard(){
    const [amount, setAmount] = useState(10000);

    useEffect(()=> {
        axios.get("http://localhost:3000/api/v1/account/balance",
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            },{
                username: localStorage.getItem("username")
            })
        .then(response => {
            setAmount(response.data.balance)
        })
    },[amount])

    return (
        <div className="bg-payTMBlue h-screen">
            <AppBar />
            <div className="m-8">
                <Balance value= {amount} />
                <Users />
            </div>
        </div>
    )
}