import React, { useEffect, useState } from "react"
import AppBar from "../components/AppBar"
import Users from "../components/Users"
import Balance from "../components/Balance"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Dashboard(){
    const [amount, setAmount] = useState(10000);

    const formattedAmount = parseFloat(amount).toFixed(2);

    const loggedIn = localStorage.getItem("token") ;
    const navigate = useNavigate();

    useEffect(()=> {
        if(loggedIn){
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
            })}else {
                navigate("/signin");
            }
    },[loggedIn])

    return (
        <div className="bg-payTMBlue h-screen">
            <AppBar />
            <div className="m-8">
                <Balance value= {formattedAmount} />
                <Users />
            </div>
        </div>
    )
}