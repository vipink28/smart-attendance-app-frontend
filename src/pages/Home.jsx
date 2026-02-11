import { Link } from "react-router"
import logo from "../assets/images/logo.png"
import Container from "../components/layout/Container"

const Home = () => {
    return (
        <Container>
            <div className="h-screen flex flex-col items-center justify-center gap-6">
                <img className="w-24" src={logo} alt="smart attendance system" />
                <h1 className="text-4xl font-bold">Smart Attendance System</h1>
                <Link to="/sign-in" className="bg-teal-800 text-white px-5 py-2 rounded-full font-bold">Sign In</Link>
            </div>
        </Container>
    )
}

export default Home