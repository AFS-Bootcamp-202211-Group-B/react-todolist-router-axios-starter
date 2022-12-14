import axios from "axios";

const api = axios.create({
    baseURL: "https://63996dd416b0fdad773c6c12.mockapi.io",
});

export const getTodos = () => {
    return api.get("/todos"); 
};

