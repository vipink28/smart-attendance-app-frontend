import { useState } from "react";
import Container from "../../components/layout/Container";
import { showToast } from "../../utils/toastUtils";

const AddUser = () => {
    const [formData, setFormData] = useState(null);
    const inputHandler = (e) => {
        const { value, name } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const [teacherFormData, setTeacherFormData] = useState(null);
    const teacherInputHandler = (e) => {
        const { value, name } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const addNewStudent = async () => {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("sasuser")}`
            },
            body: JSON.stringify(formData)
        }
        const response = await fetch("http://localhost:5000/api/admin/students", config);
        const user = await response.json();
        showToast("success", "Student added successfully!");
    }

    const addNewTeacher = async () => {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("sasuser")}`
            },
            body: JSON.stringify(teacherFormData)
        }
        const response = await fetch("http://localhost:5000/api/admin/teacher", config);
        const user = await response.json();
        showToast("success", "Teacher added successfully!");
    }

    return (
        <>
            <Container>
                <div className="py-5">
                    <h2 className="text-2xl font-bold mb-4 text-center">Add Student</h2>
                    <div className="max-w-2xl mx-auto px-4">
                        <div className="mb-3">
                            <label className="block mb-3">Name</label>
                            <input type="text" name="username" onChange={inputHandler} className="h-10 border-slate-300 bg-white outline-none p-2 text-slate-950 w-full" />
                        </div>

                        <div className="mb-3">
                            <label className="block mb-3">Email</label>
                            <input type="email" name="email" onChange={inputHandler} className="h-10 border-slate-300 bg-white outline-none p-2 text-slate-950 w-full" />
                        </div>

                        <div className="mb-3">
                            <label className="block mb-3">Password</label>
                            <input type="password" name="password" onChange={inputHandler} className="h-10 border-slate-300 bg-white outline-none p-2 text-slate-950 w-full" />
                        </div>

                        <div className="mb-3">
                            <label className="block mb-3">Phone</label>
                            <input type="text" name="phone" onChange={inputHandler} className="h-10 border-slate-300 bg-white outline-none p-2 text-slate-950 w-full" />
                        </div>

                        <div className="mb-3">
                            <label className="block mb-3">Roll Number</label>
                            <input type="number" name="rollNumber" onChange={inputHandler} className="h-10 border-slate-300 bg-white outline-none p-2 text-slate-950 w-full" />
                        </div>

                        <div className="mb-3">
                            <label className="block mb-3">Date of Birth</label>
                            <input type="date" name="dateOfBirth" onChange={inputHandler} className="h-10 border-slate-300 bg-white outline-none p-2 text-slate-950 w-full" />
                        </div>

                        <div className="mb-3">
                            <label className="block mb-3">Joining Year</label>
                            <input type="number" name="joiningYear" onChange={inputHandler} className="h-10 border-slate-300 bg-white outline-none p-2 text-slate-950 w-full" />
                        </div>

                        <div className="mb-3">
                            <label className="block mb-3">Select Role</label>
                            <select name="role" onChange={inputHandler} className="h-10 border-slate-300 bg-white outline-none p-2 text-slate-950 w-full">
                                <option>Select Role</option>
                                <option value="teacher">Teacher</option>
                                <option value="student">Student</option>
                            </select>
                        </div>
                        <button onClick={addNewStudent}>Add Student</button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default AddUser