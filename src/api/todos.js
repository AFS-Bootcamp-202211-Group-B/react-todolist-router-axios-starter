import React  from "react";
import axios from "axios";

const api = axios.create({
    baseURL: "https://63996b3529930e2bb3d236b1.mockapi.io/"
})

export const getTodos =() => {
    return api.get("/todos");
}



// export default function Layout()
// {
//     return(
//         <div>

//         </div>
//     );
// }