import React from 'react'
import { Link, Outlet } from "react-router-dom"
import { Menu } from "antd"
import { useState } from 'react'
const items = [
    {
        label: 'Homepage',
        key: 'homepage',
        icon: <Link to="/" />,
    },
    {
        label: 'About Page',
        key: 'AboutPage',
        icon: <Link to="/about" />,
    },
    {
        label: 'Done Page',
        key: 'DonePage',
        icon: <Link to="/done" />,
    },
]
export default function Layout() {
    const [current, setCurrent] = useState('homepage');
    const onClick = (e) => {
        setCurrent(e.key);
    };
    return (
        <div>
            {/* <nav>
                <Link to="/">Homepage</Link>
                <Link to="/about">About Page</Link>
                <Link to="/done">Done Page</Link>
            </nav>
            */}
            <Menu theme="dark" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}
