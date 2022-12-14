import axios from "axios";

const api = axios.create({
    baseURL: "https://63996b7a16b0fdad773c200d.mockapi.io"
});

export const getTodos = () => {
    return api.get("/todos");
};