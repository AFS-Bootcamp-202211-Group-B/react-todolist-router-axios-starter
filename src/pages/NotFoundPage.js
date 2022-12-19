import React from 'react'
import notFound from "./notFound.jpg";
export default function NotFoundPage() {
  return (
    <div>
        404 Not Found<br/>
        <img src={notFound} ></img>
    </div>
  )
}
