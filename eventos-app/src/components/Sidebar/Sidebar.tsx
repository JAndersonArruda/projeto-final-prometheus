// import React from 'react'
import { Link } from 'react-router-dom'

import "./sidebar.css"

function Sidebar() {
    return (
        <ul className='contianer-sidebar-elements'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/account/login"}>Login</Link></li>
            <li><Link to={"/profile"}>Perfil</Link></li>
            <li><Link to={"/ticket-event"}>Inscrição</Link></li>
            <li><Link to={"/events/view"}>View Eventos</Link></li>
        </ul>
    )
}

export default Sidebar