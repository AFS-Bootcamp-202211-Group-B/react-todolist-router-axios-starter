import axios from "axios";

const api = axios.create({
    baseURL:"https://63996b3416b0fdad773c1841.mockapi.io/"
});

export const getTodos = () => {
    return api.get("/todos");
};
