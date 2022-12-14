import React from 'react'
import { Link, Outlet } from "react-router-dom"
export default function Layout() {
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/done'>Done list</Link>
                <Link to='/about'>About Me</Link>
                <Link to='/asdasdas'>Suprise</Link>
            </nav>
            <Outlet />
        </div>
    )
}
