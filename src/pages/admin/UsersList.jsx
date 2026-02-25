import { useEffect, useMemo, useReducer, useState } from "react";
import UserPopup from "../../components/UserPopup";
import Button from "../../components/global/Button";

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
            <h2 className="text-2xl font-bold my-5">Users List</h2>
            <div className="border border-slate-500 rounded-lg p-5">
                <div className="flex justify-between items-center py-5">
                    <input type="search" placeholder="Search by name" className="border border-slate-300 rounded-lg p-2" onChange={(e) => { setSearchText(e.target.value) }} />

                    <select onChange={(e) => { setRoleValue(e.target.value) }} className=" border border-slate-300 outline-none p-2 rounded-lg *:text-slate-950">
                        <option value="all">All</option>
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                    </select>
                </div>
                <table className="w-full">
                    <thead>
                        <tr className="text-left *:p-2">
                            <th className="w-1/12">Id</th>
                            <th className="w-3/12">Name</th>
                            <th className="w-2/12">Role</th>
                            <th className="w-4/12">Email</th>
                            <th className="w-2/12">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredUsers &&
                            filteredUsers.map((user) => (
                                <tr key={user.id} className="*:p-2 border-t border-slate-500">
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.role}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <div className="flex items-center gap-2">
                                            <Button icon="eye" text="View" onClick={() => { dispatch({ type: "view", payload: user }) }} className="px-2" />
                                            <Button icon="pencil" text="Edit" onClick={() => { dispatch({ type: "edit", payload: user }) }} className="px-2" />
                                            <Button icon="trash" text="Delete" onClick={() => { dispatch({ type: "delete", payload: user }) }} className="px-2" />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {
                state.isOpen &&
                <UserPopup state={state} onClose={dispatch} fetchUserList={fetchUserList} />
            }
        </div>
    )
}

export default UsersList