import axios from "axios";

export const getUsersAnalytics = async ()=>{
    const response = await axios.get("http://localhost:5000/userAnalytics");
    return response.data
}