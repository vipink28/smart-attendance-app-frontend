import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { showToast } from "../utils/toastUtils";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //user signin 
    const userSignIn = async (formData) => {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        if (!response.ok) {
            showToast("error", data.message);
            throw new Error(data.message);
        }

        localStorage.setItem("sasuser", data.token);
        setUser(data.user);
        showToast("success", "Login successful!");
        if (data.user.role === "admin") {
            navigate("/admin")
        } else if (data.user.role === "teacher") {
            navigate("/teacher")
        } else {
            navigate("/student")
        }
    }


    //logout
    const logout = () => {
        localStorage.removeItem("sasuser");
        setUser(null);
        navigate("/sign-in")
    }

    useEffect(() => {
        const token = localStorage.getItem("sasuser");
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUser({
                    token,
                    id: decoded.id
                });
            } catch (error) {
                localStorage.removeItem("sasuser");
            }
        }
        setLoading(false);
    }, []);

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