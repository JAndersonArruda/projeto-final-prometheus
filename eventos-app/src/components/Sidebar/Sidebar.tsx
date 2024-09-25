// import React from 'react'
import { Link } from 'react-router-dom'
import { Home, AccountCircle, AddCircle } from '@mui/icons-material'

import "./sidebar.css"


function Sidebar() {
    return (
        <ul className='contianer-sidebar-elements'>
            <li><Link to={"/profile"}><AccountCircle /> Perfil</Link></li>
            <li><Link to={"/events"}><Home /> Home</Link></li>
            <li><Link to={"/events/create"}><AddCircle /> Criar Evento</Link></li>
        </ul>
    )
}

export default Sidebar