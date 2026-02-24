import { useEffect, useMemo, useState } from "react";

const UsersList = () => {
    const [users, setUsers] = useState(null);
    const [roleValue, setRoleValue] = useState("all")
    const [searchText, setSearchText] = useState("");

    const fetchUserList = async () => {
        const response = await fetch("http://localhost:5001/users", { method: "GET" })
        const users = await response.json();
        setUsers(users);
    }
    useEffect(() => {
        fetchUserList();
    }, [])

    const filteredUsers = useMemo(() => {
        return users && users.filter((item) => (
            roleValue === "all" ? true : item.role === roleValue
        )).filter((item) => (item.username.includes(searchText)))
    }, [users, roleValue, searchText])

    return (
        <div>
            <h2>Users List</h2>
            <div className="flex justify-between items-center py-5">
                <input type="search" className="border border-white" onChange={(e) => { setSearchText(e.target.value) }} />

                <select onChange={(e) => { setRoleValue(e.target.value) }}>
                    <option value="all">All</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                </select>
            </div>
            <table className="w-full">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredUsers &&
                        filteredUsers.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.role}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button>View</button>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UsersList