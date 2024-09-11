// import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/login"}>Login</Link></li>
            <li><Link to={"/profile"}>Perfil</Link></li>
            <li><Link to={"/ticket-event"}>Inscrição</Link></li>
            <li><Link to={"/events/view"}>View Eventos</Link></li>
        </ul>
    )
}

export default Sidebar