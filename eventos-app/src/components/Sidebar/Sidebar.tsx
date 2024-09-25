// import React from 'react'
import { Link } from 'react-router-dom'
import { Home, AccountCircle, AddCircle } from '@mui/icons-material'

import "./sidebar.css"

interface SidebarProps {
    tipoUser: string
}

function Sidebar({ tipoUser }: SidebarProps) {
    return (
        <ul className='contianer-sidebar-elements'>
            <li><Link to={"/profile"}><AccountCircle /> <span>Perfil</span></Link></li>
            <li><Link to={"/events"}><Home /> <span>Home</span></Link></li>
            {tipoUser === 'ADMIN' && (
            <li><Link to={"/events/create"}><AddCircle /> <span>Add Evento</span></Link></li>
            )}
        </ul>
    )
}

export default Sidebar