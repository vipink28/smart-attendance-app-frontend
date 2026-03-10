import { useEffect, useState } from "react";
import { useParams } from "react-router";
import sasApi from "../../utils/axiosInstance";

const Teacher = () => {
    const { id, action } = useParams();
    const [teacherData, setTeacherData] = useState(null);
    const fetchTeacherById = async () => {
        try {
            const response = await sasApi.get(`/admin/teachers/${id}`);
            setTeacherData(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchTeacherById();
    }, [])

    return (
        <div>
            Teacher
            {id}
            {action}
        </div>
    )
}

export default Teacher