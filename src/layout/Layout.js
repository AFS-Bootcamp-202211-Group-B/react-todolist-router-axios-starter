import React from 'react'
import { Outlet, Link } from 'react-router-dom'

import { Menu } from 'antd';

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
  }
];

export default function Layout() {
  return (

    <div>
          {/* <nav>
              <Link to="/">Homepage</Link>
              <Link to="/about">About Page</Link>
              <Link to="/done">Done page</Link>
          </nav> */}
            <Menu selectedKeys={[]} mode="horizontal" items={items} />
          <div className='content'> 
              <Outlet  />
          </div>

    </div>
  )
}
