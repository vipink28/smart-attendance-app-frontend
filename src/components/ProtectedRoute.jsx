import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import AuthContext from "../context/AuthContext";

const ProtectedRoute = ({ allowedRoutes }) => {
    const { user } = useContext(AuthContext);
    if (!user) {
        return <Navigate to="/sign-in" />
    }
    if (!allowedRoutes.includes(user.role)) {
        return <Navigate to="/unauthorized" />
    }
    return <Outlet />
}

export default ProtectedRoute