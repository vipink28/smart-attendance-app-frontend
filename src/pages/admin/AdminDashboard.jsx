import LinkButton from "../../components/global/LinkButton"

const AdminDashboard = () => {
    return (
        <div className="py-5">
            <div className="mb-3">
                <h3 className="mb-3 text-2xl">Quick Links</h3>
                <div className="flex gap-3 items-center">
                    <LinkButton to="/admin/add-user">Add User</LinkButton>
                    <LinkButton to="/admin/users-list">User List</LinkButton>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard