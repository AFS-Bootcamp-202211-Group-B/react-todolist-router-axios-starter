import React from 'react'
import { Link, Outlet } from "react-router-dom"

//ant design
import { Menu } from 'antd';
//---


const items = [
    {
        label: 'Home',
        key: 'home',
        icon: <Link to='/'/>,
    },
    {
        label: 'Done list',
        key: 'done',
        icon: <Link to='/done'/>,
    },
    {
        label: 'About',
        key: 'about',
        icon: <Link to='/about'/>,
    },
    {
        label: 'Surpise',
        key: 'suprise',
        icon: <Link to='/adsadas'/>,
    }
];

export default function Layout() {
    return (
        <div>
            <Menu selectedKeys={[]} mode="horizontal" items={items} />
            <Outlet />
        </div>
    )
}
