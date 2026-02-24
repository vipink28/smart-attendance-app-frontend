import { Link } from "react-router"

const AdminDashboard = () => {
    return (
        <div className="py-5">
            <div className="mb-3">
                <h3 className="mb-3 text-2xl">Quick Links</h3>
                <div className="flex gap-3 items-center">
                    <Link to="/admin/add-user" className="bg-teal-800 text-white px-5 py-2 rounded-full font-bold">Add User</Link>
                    <Link to="/admin/users-lists" className="bg-teal-800 text-white px-5 py-2 rounded-full font-bold">Add User</Link>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard