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
    {
        label: 'Not Found Page',
        key: 'NotFoundPage',
        icon: <Link to="*" />,
    },
]
export default function Layout() {
    const [current, setCurrent] = useState('homepage');
    const onClick = (e) => {
        setCurrent(e.key);
    };
    return (
        <div>
            <Menu theme="dark" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}
