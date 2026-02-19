import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem("sasuser"));
        if (localUser) {
            setIsLoggedIn(true)
        } else {
            navigate("/sign-in")
        }
    }, [])
    return isLoggedIn ? children : null
}

export default ProtectedRoute