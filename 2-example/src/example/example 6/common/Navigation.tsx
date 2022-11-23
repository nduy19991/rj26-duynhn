import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to={"/home"} className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/list"} className="nav-link">User List</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/form"} className="nav-link">User Form</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation