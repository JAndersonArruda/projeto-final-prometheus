// import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Login, AccountCircle, CreateOutlined, AddCircle, EditCalendar } from '@mui/icons-material'

import "./sidebar.css"


function Sidebar() {
    return (
        <ul className='contianer-sidebar-elements'>
            <li><Link to={"/events"}><Home /> Home</Link></li>
            <li><Link to={"/account/login"}><Login /> Login</Link></li>
            <li><Link to={"/profile"}><AccountCircle /> Perfil</Link></li>
            <li><Link to={"/ticket-event"}><EditCalendar /> Inscrição</Link></li>
            <li><Link to={"/events/create"}><AddCircle /> Criar Evento</Link></li>
            <li><Link to={"/events/edit/1"}><CreateOutlined /> Editar Evento</Link></li>
        </ul>
    )
}

export default Sidebar