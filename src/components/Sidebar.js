import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar({selectedTab , SetselectedTab}) {
  return (
    <div>
      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark mysidebar" >
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4 headingSidebar">Welcome!</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link to="/" className={`nav-link text-white ${selectedTab==='home' && 'active'}`} aria-current="page" onClick={()=>{SetselectedTab("home")}}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </Link>
      </li>
      <li>
        <Link to="/create-post" className={`nav-link text-white ${selectedTab==='create post' && 'active'}`} onClick={()=>{SetselectedTab("create post")}}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          Create Post
        </Link>
      </li>
    </ul>
  </div>
    </div>
  )
}
