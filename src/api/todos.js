import axios from "axios";

const api = axios.create({
    baseURL: "https://63996b3729930e2bb3d236ed.mockapi.io/",
});

export const getTodos = () => {
    return api.get("/todos");
};
