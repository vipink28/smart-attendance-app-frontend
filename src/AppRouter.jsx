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
import StudentsList from "./pages/admin/StudentsList"
import Teacher from "./pages/admin/Teacher"
import TeachersList from "./pages/admin/TeachersList"
import UsersList from "./pages/admin/UsersList"
import StudentDashboard from "./pages/student/StudentDashboard"
import TeacherDashboard from "./pages/teacher/TeacherDashboard"

const AppRouter = () => {
    const { user } = useContext(AuthContext);


    const adminRoutes = [
        { link: "/admin", linkText: "Dashboard" },
        { link: "/admin/teachers-list", linkText: "Teachers" },
        { link: "/admin/students-list", linkText: "Students" },
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

                <Route element={<ProtectedRoute allowedRoutes={["admin"]} />}>
                    <Route path="/admin" element={<AppLayout routes={adminRoutes} />}>
                        <Route index element={<AdminDashboard />}></Route>
                        <Route path="add-user" element={<AddUser />}></Route>
                        <Route path="users-list" element={<UsersList />}></Route>
                        <Route path="teachers-list" element={<TeachersList />}></Route>
                        <Route path="students-list" element={<StudentsList />}></Route>
                        <Route path="teacher/:action/:id" element={<Teacher />}></Route>
                    </Route>
                </Route>

                {/* Teacher Routes */}
                <Route element={<ProtectedRoute allowedRoutes={["teacher"]} />}>
                    <Route path="/teacher" element={<AppLayout routes={teacherRoutes} />}>
                        <Route index element={<TeacherDashboard />}></Route>
                    </Route>
                </Route>

                {/* Student Routes */}
                <Route element={<ProtectedRoute allowedRoutes={["student"]} />}>
                    <Route path="/student" element={<AppLayout routes={studentRoutes} />}>
                        <Route index element={<StudentDashboard />}></Route>
                    </Route>
                </Route>
            </Routes>
        </>
    )
}

export default AppRouter