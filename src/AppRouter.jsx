import { Route, Routes } from "react-router"
import AppLayout from "./layouts/AppLayout"
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"
import Home from "./pages/Home"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import SignIn from "./pages/SignIn"
import AdminDashboard from "./pages/admin/AdminDashboard"
import StudentDashboard from "./pages/student/StudentDashboard"
import TeacherDashboard from "./pages/teacher/TeacherDashboard"

const AppRouter = () => {
    const adminRoutes = [
        { link: "/admin", linkText: "Dashboard" },
        { link: "/admin/teachers", linkText: "Teachers" },
        { link: "/admin/students", linkText: "Students" },
        { link: "/admin/classes", linkText: "Classes" },
        { link: "/admin/account", linkText: "Account" },
    ]
    const teacherRoutes = [
        { link: "/teacher", linkText: "Dashboard" },
        { link: "/teacher/generateqr", linkText: "GenerateQR" },
        { link: "/teacher/students", linkText: "Students" },
        { link: "/teacher/classes", linkText: "Classes" },
        { link: "/teacher/account", linkText: "Account" },
    ]
    const studentRoutes = [
        { link: "/student", linkText: "Dashboard" },
        { link: "/student/mark-attendance", linkText: "Mark Attendance" },
        { link: "/student/my-attendance", linkText: "My Attendance" },
        { link: "/student/account", linkText: "Account" },
    ]

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
                <Route path="/contact-us" element={<ContactUs />}></Route>
                <Route path="/sign-in" element={<SignIn />}></Route>
                {/* <Route path="*" element={<PageNotFound />}></Route> */}

                {/* Admin Routes */}
                <Route path="/admin" element={<AppLayout routes={adminRoutes} />}>
                    <Route index element={<AdminDashboard />}></Route>
                </Route>

                {/* Teacher Routes */}
                <Route path="/teacher" element={<AppLayout routes={teacherRoutes} />}>
                    <Route index element={<TeacherDashboard />}></Route>
                </Route>

                {/* Student Routes */}
                <Route path="/student" element={<AppLayout routes={studentRoutes} />}>
                    <Route index element={<StudentDashboard />}></Route>
                </Route>
            </Routes>
        </>
    )
}

export default AppRouter