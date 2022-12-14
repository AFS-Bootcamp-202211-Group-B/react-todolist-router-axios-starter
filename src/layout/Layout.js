import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <nav>
            <Link to="/">Homepage</Link>
            <Link to="/about">About Page</Link>
            <Link to="/done">Done page</Link>
        </nav>
        <div className='content'> 
            <Outlet  />
        </div>
    </div>
  )
}
