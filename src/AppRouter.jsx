import { useContext } from "react"
import { Route, Routes } from "react-router"
import ProtectedRoute from "./components/ProtectedRoute"
import AuthContext from "./context/AuthContext"
import AppLayout from "./layouts/AppLayout"
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"
import Home from "./pages/Home"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import SignIn from "./pages/SignIn"
import AddUser from "./pages/admin/AddUser"
import AdminDashboard from "./pages/admin/AdminDashboard"
import UsersList from "./pages/admin/UsersList"
import StudentDashboard from "./pages/student/StudentDashboard"
import TeacherDashboard from "./pages/teacher/TeacherDashboard"

const AppRouter = () => {
    const { user } = useContext(AuthContext);


    const adminRoutes = [
        { link: "/admin", linkText: "Dashboard" },
        { link: "/admin/teachers", linkText: "Teachers" },
        { link: "/admin/students", linkText: "Students" },
        { link: "/admin/classes", linkText: "Classes" },
        { link: "/admin/account", linkText: user?.username },
    ]
    const teacherRoutes = [
        { link: "/teacher", linkText: "Dashboard" },
        { link: "/teacher/generateqr", linkText: "GenerateQR" },
        { link: "/teacher/students", linkText: "Students" },
        { link: "/teacher/classes", linkText: "Classes" },
        { link: "/teacher/account", linkText: user?.username },
    ]
    const studentRoutes = [
        { link: "/student", linkText: "Dashboard" },
        { link: "/student/mark-attendance", linkText: "Mark Attendance" },
        { link: "/student/my-attendance", linkText: "My Attendance" },
        { link: "/student/account", linkText: user?.username },
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

                <Route path="/admin" element={<ProtectedRoute><AppLayout routes={adminRoutes} /></ProtectedRoute>}>
                    <Route index element={<AdminDashboard />}></Route>
                    <Route path="add-user" element={<AddUser />}></Route>
                    <Route path="users-list" element={<UsersList />}></Route>
                </Route>

                {/* Teacher Routes */}
                <Route path="/teacher" element={<ProtectedRoute><AppLayout routes={teacherRoutes} /></ProtectedRoute>}>
                    <Route index element={<TeacherDashboard />}></Route>
                </Route>

                {/* Student Routes */}
                <Route path="/student" element={<ProtectedRoute><AppLayout routes={studentRoutes} /></ProtectedRoute>}>
                    <Route index element={<StudentDashboard />}></Route>
                </Route>
            </Routes>
        </>
    )
}

export default AppRouter