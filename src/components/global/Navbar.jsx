import { useContext } from "react"
import { NavLink } from "react-router"
import logo from "../../assets/images/logo.png"
import AuthContext from "../../context/AuthContext"
import Container from "../layout/Container"

const Navbar = ({ routes }) => {
    const { logout } = useContext(AuthContext);
    return (
        <div className="bg-teal-800 text-white py-2">
            <Container>
                <div className="flex justify-between">
                    <div className="p-2">
                        <img className="w-11" src={logo} alt="logo" />
                    </div>
                    <div className="flex gap-4 items-center">
                        {
                            routes.map((route, index) => (
                                <NavLink key={index} className={({ isActive }) => (
                                    `font-bold py-1 text-lg ${isActive ? "border-b-2 border-b-white" : ""}`
                                )} to={route.link}>{route.linkText}</NavLink>
                            ))
                        }
                        <button onClick={logout} className="font-bold py-1 text-lg">Logout</button>
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default Navbar
// // text-white border-b

// isActive ? "border-b":""