import React from 'react'
import { Link } from "react-router-dom"

export default function AboutPage() {
    return (
        <div>
            <h1>AboutPage</h1>
            <p> are you expecting anything from this page? hope you are not</p>
            <br/><Link to='/'>take me back to home</Link>
        </div>
    )
}
