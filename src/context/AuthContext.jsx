import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //user signin 
    const userSignIn = async (formData) => {
        const response = await fetch(`http://localhost:5001/users?email=${formData.email}&password=${formData.password}`, { method: "GET" });
        const user = await response.json();
        if (user.length > 0) {
            localStorage.setItem("sasuser", JSON.stringify(user[0]))
            setUser(user[0])
            alert("logged in successfully")
            if (user[0].role === "admin") {
                navigate("/admin")
            } else if (user[0].role === "teacher") {
                navigate("/teacher")
            } else {
                navigate("/student")
            }
        } else {
            alert("email/password is not valid")
        }
    }


    //logout
    const logout = () => {
        localStorage.removeItem("sasuser");
        setUser(null);
        navigate("/sign-in")
    }

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem("sasuser"));
        setUser(localUser)
        setLoading(false);
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            userSignIn,
            logout,
            loading
        }}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthContext;