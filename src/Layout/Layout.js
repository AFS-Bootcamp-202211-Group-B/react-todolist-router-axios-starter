import {React,useState} from 'react'
import { Link, Outlet } from 'react-router-dom'
import { HomeOutlined,QuestionCircleOutlined,FileDoneOutlined,MenuUnfoldOutlined,MenuFoldOutlined} from '@ant-design/icons';
import { Button,Menu } from 'antd'
import "./Layout.css"
function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
export default function Layout() {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const items = [
        getItem("Home","home",<Link to="/"/> ),
        getItem("About","about",<Link to="/about"/>),
        getItem("Done List","done",<Link to="/done"/> )
    ]
  return (
    <div>
        <div className="menu">
            
        <Button
            type="primary"
            onClick={toggleCollapsed}
            style={{
            marginBottom: 16,
              
            }}
            className="button"
        >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
        mode="inline"
        items={items}
        inlineCollapsed={collapsed}
        />
            {/* <nav>
                <Link to="/">Homepage</Link>
                <Link to="/about">About Page</Link>
                <Link to="/done">Done Page</Link>
            </nav> */}
        </div>
        <div className='content'>
            <Outlet />
        </div>
    </div>
  )
}
