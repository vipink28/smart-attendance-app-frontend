import { Outlet } from "react-router"
import Navbar from "../components/global/Navbar"
import Container from "../components/layout/Container"


const AppLayout = ({ routes }) => {
    return (
        <>
            <Navbar routes={routes} />
            <Container>
                <Outlet />
            </Container>
        </>
    )
}

export default AppLayout