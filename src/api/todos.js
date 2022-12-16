import React  from "react";
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080"
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