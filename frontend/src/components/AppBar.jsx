import { useNavigate } from "react-router-dom";
import Button from "./Button";


export default function AppBar(){

    const navigate = useNavigate();

    return (
        <div className="bg-white shadow h-14 flex justify-between">
            <div className="flex flex-col justify-center h-full ml-4 text-4xl font-bold">
                PayMate 
            </div>
            <div className="flex">
                <div className="flex flex-col justify-center h-full mr-4 ">
                    Hello 
                </div>
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl font-bold">
                        U
                    </div>
                </div>
                <div className="flex flex-col justify-center mt-1.5 " >
                    <Button 
                    onClick={()=>{
                        localStorage.removeItem("token");
                        localStorage.removeItem("username");
                        navigate("/signin");
                    }
                    }
                    label= {"Log Out"} />
                </div>
            </div>
    </div>
    )
}