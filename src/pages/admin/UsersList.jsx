import { useEffect, useState } from "react";

const UsersList = () => {
    const [users, setUsers] = useState(null);
    const fetchUserList = async () => {
        const response = await fetch("http://localhost:5001/users", { method: "GET" })
        const users = await response.json();
        setUsers(users);
    }
    useEffect(() => {
        fetchUserList();
    }, [])
    return (
        <div>
            <h2>Users List</h2>
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
                        users &&
                        users.map((user) => (
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