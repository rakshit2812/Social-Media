import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({SetselectedTab}) {
  return (
    <div>
      <header className="p-3 text-bg-dark mynavbar">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-2 text-white" onClick={()=>SetselectedTab("home")}>Home</Link></li>
          <li><Link to="/create-post" className="nav-link px-2 text-white" onClick={()=>SetselectedTab("create post")}>Create Post</Link></li>
          <li><a href="#" className="nav-link px-2 text-white">About Us</a></li>
        </ul>
        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
    </div>
  )
}
