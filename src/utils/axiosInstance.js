import axios from "axios";

const sasUser = JSON.parse(localStorage.getItem("sasuser"));

const sasApi = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        "Authorization": `Bearer ${sasUser.token}`
    }
});

export default sasApi;