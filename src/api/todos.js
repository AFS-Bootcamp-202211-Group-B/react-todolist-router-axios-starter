import React  from "react";
import axios from "axios";

const api = axios.create({
    baseURL: "https://63996b3529930e2bb3d236b1.mockapi.io/"
})

export const getTodos =() => {
    return api.get("/todos");
}


export const postTodos =(todo) => {
    return api.post('/todos',todo);
}

export const putTodo =(id ,done ) => {
    return api.put('/todos/'+id ,done)
    // .then(response => );
}
export const deletedo = (id) => {
    return api.delete("/todos/" + id);
}

export const putText = (id, todo) => {
    return api.put("/todos/"+id, todo);
}






// export default function Layout()
// {
//     return(
//         <div>

//         </div>
//     );
// }