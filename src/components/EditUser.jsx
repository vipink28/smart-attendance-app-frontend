import { useEffect, useState } from "react";

const EditUser = ({ data, fetchUserList, onClose }) => {
    const init = {
        username: "",
        email: "",
        password: "",
        role: ""
    }
    const [formData, setFormData] = useState(init);
    const inputHandler = (e) => {
        const { value, name } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    useEffect(() => {
        if (data) {
            setFormData(data)
        }
    }, [data])

    const updateUser = async () => {
        const config = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }
        await fetch(`http://localhost:5001/users/${formData.id}`, config);
        fetchUserList();
        alert("User updated successfully");
        onClose({ type: "reset" })
    }

    return (
        <div className="py-5">
            <h2 className="text-2xl font-bold mb-4 text-center">Edit User</h2>
            <div className="max-w-2xl mx-auto px-4">
                <div className="mb-3">
                    <label className="block mb-3">Name</label>
                    <input type="text" name="username" onChange={inputHandler} className="h-10 border-slate-300 bg-white outline-none p-2 text-slate-950 w-full" value={formData?.username} />
                </div>

                <div className="mb-3">
                    <label className="block mb-3">Email</label>
                    <input type="email" name="email" onChange={inputHandler} className="h-10 border-slate-300 bg-white outline-none p-2 text-slate-950 w-full" value={formData?.email} />
                </div>

                <div className="mb-3">
                    <label className="block mb-3">Password</label>
                    <input type="password" name="password" onChange={inputHandler} className="h-10 border-slate-300 bg-white outline-none p-2 text-slate-950 w-full" value={formData?.password} />
                </div>

                <div className="mb-3">
                    <label className="block mb-3">Select Role</label>
                    <select defaultValue={formData?.role} name="role" onChange={inputHandler} className="h-10 border-slate-300 bg-white outline-none p-2 text-slate-950 w-full">
                        <option>Select Role</option>
                        <option value="teacher">Teacher</option>
                        <option value="student">Student</option>
                    </select>
                </div>
                <button onClick={updateUser}>Update User</button>
            </div>
        </div>


    )
}

export default EditUser