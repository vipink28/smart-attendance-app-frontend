import { Route, Routes } from "react-router"
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import SignIn from "./pages/SignIn"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
            <Route path="/contact-us" element={<ContactUs />}></Route>
            <Route path="/login" element={<SignIn />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
    )
}

export default AppRouter