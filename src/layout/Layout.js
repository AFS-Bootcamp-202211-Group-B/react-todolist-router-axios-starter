import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <nav>
                <Link to="/">Home Page</Link>
                <span>&nbsp;|&nbsp;</span>
                <Link to="/about">About Page</Link>
                <span>&nbsp;|&nbsp;</span>
                <Link to="/done">Done Page</Link>
            </nav>
            <Outlet />
        </div>
    );
}
