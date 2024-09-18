import React, { useState } from "react"
import Heading from "../components/Heading"
import SubHeading from "../components/SubHeading"
import InputBox from "../components/InputBox"
import Button from "../components/Button"
import ButtonWarning from "../components/BottomWarning"
import BottomWarning from "../components/BottomWarning"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Signin(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    return (
        <div className="bg-sky-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign in"}/>
                <SubHeading label={"Enter your credentials to access your account"} />
                <InputBox 
                onChange={(e)=> setUsername(e.target.value)}
                label={"Email"} placeholder={"john@gmail.com"} />
                <InputBox 
                onChange={(e)=> setPassword(e.target.value)}
                label={"Password"} placeholder={"123456"} />
                <div className="pt-4">
                    <Button label={"Sign in"}
                        onClick={async ()=>{
                            localStorage.removeItem("token");
                            localStorage.removeItem("username");
                            const response = await axios.post("http://localhost:3000/api/v1/user/signin", 
                                {
                                    username,
                                    password
                                });
                            localStorage.setItem("token", response.data.token);
                            localStorage.setItem("username", username);
                            navigate("/dashboard")
                        }}
                    /> 
                </div>
                <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
                </div>
            </div>
        </div>
    )
}