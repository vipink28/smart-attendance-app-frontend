import { useEffect, useState } from "react";
import { Link } from "react-router";
import sasApi from "../../utils/axiosInstance";

const TeachersList = () => {
    const [teachers, setTeachers] = useState(null);
    const fetchTeachers = async () => {
        try {
            const response = await sasApi.get("/admin/teachers");
            setTeachers(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchTeachers();
    }, [])

    return (
        <div>
            {teachers?.map((item) => (
                <>
                    <p>{item?.username}</p>
                    <Link to={`/admin/teacher/view/${item.id}`}>View</Link>
                    <Link to={`/admin/teacher/edit/${item.id}`}>Edit</Link>
                    <Link to={`/admin/teacher/delete/${item.id}`}>Delete</Link>
                </>
            ))}
        </div>
    )
}

export default TeachersList