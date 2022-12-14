import React  from "react";
import { Link, Outlet, NavLink   } from "react-router-dom";
import {Menu } from 'antd';



export default function Layout()
{
    return(
        <div>
            <Menu 
                        mode="horizontal  "
                        style={{ height: "100%", borderRight: 0 }}
                    >
                        <Menu.Item key="/">
                            <NavLink to="/" className="nav-text">
                            Homepage
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="/about">
                            <NavLink to="/about" className="nav-text">
                            About
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="/done">
                            <NavLink to="/done" className="nav-text">
                            Done Page
                            </NavLink>
                        </Menu.Item>
                    </Menu>
            <Outlet />
        </div>
    );
}

