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

        <Menu
        mode="horizontal"
        items={items}
         style={{textAlign:"center"}}/>

        <div className='content'>
            <Outlet />
        </div>
    </div>
  )
}
