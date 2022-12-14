import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Radio } from "antd";

export default function Layout() {
    const navigate = useNavigate();
    const [page, setPage] = useState("/"); // default is 'middle'
    const onChangePage = (e) => {
        setPage(e.target.value);
        navigate(e.target.value, { replace: true });
    };
    return (
        <div>
            <nav>
                <Radio.Group value={page} onChange={onChangePage}>
                    <Radio.Button value="/">Home</Radio.Button>
                    <Radio.Button value="/about">About</Radio.Button>
                    <Radio.Button value="/done">Done List</Radio.Button>
                </Radio.Group>
            </nav>
            <Outlet />
        </div>
    );
}
