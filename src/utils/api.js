import axios from "axios";

//on va faire lappel et instence de axios (l client http mte3na)
const api=axios.create(
    {
        baseURL:`${process.env.REACT_APP_API_URL}/`,
    }
);


export default api;