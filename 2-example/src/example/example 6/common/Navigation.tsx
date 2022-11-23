import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../images/barlogo.png'
function Navigation() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm justify-content-left">
            <img className='logo' src={logo}/>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to={"/home"} className="nav-link" style={{color: "black"}}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/list"} className="nav-link" style={{color: "black"}}>User List</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/form"} className="nav-link" style={{color: "black"}}>User Form</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation