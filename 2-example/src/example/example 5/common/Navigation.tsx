import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../images/barlogo.png'

function Navigation() {
    return (
        <div className='bgbar'>
            <img  className='logo' src={logo}/>
            <div className='bgnav'>
            <nav className="navbar navbar-expand-sm justify-content-center">
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
            
        </div>
    )
}

export default Navigation