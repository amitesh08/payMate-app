import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export default function Me(){
    const navigate = useNavigate();
    const loggedIn = localStorage.getItem("token") ;

    useEffect(() => {
        if (loggedIn) {
            navigate("/dashboard");
        } else {
            navigate("/signin");
        }
    }, [loggedIn, navigate]);

    return null; // The component doesn't need to render anything as its only purpose to redirect.
}
