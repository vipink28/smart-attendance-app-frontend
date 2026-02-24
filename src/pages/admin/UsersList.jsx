import { useEffect, useMemo, useReducer, useState } from "react";
import UserPopup from "../../components/UserPopup";

// action is an object with two properties - {type:"string", payload: payload data (optional)}

const reducer = (state, action) => {
    switch (action.type) {
        case "view": return { isOpen: true, popUpType: "view", data: action.payload };
        case "edit": return { isOpen: true, popUpType: "edit", data: action.payload };
        case "delete": return { isOpen: true, popUpType: "delete", data: action.payload };
        case "reset": return { isOpen: false, popUpType: null, data: null }
        default: return state
    }
}


const UsersList = () => {
    const [users, setUsers] = useState(null);
    const [roleValue, setRoleValue] = useState("all")
    const [searchText, setSearchText] = useState("");

    const [state, dispatch] = useReducer(reducer, { isOpen: false, popUpType: null, data: null });

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
                                    <button onClick={() => { dispatch({ type: "view", payload: user }) }} className="px-2">View</button>
                                    <button onClick={() => { dispatch({ type: "edit", payload: user }) }} className="px-2">Edit</button>
                                    <button onClick={() => { dispatch({ type: "delete", payload: user }) }} className="px-2">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {
                state.isOpen &&
                <UserPopup state={state} onClose={dispatch} />
            }
        </div>
    )
}

export default UsersList