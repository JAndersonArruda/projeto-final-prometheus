// import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Login, AccountCircle, Event, CreateOutlined, AddCircle, EditCalendar, DeleteOutlineOutlined } from '@mui/icons-material'

import "./sidebar.css"


interface SidebarProps {
    onCreateEvent: () => void; // Callback para abrir o modal de criar evento
}

function Sidebar({ onCreateEvent }: SidebarProps) {
    return (
        <ul className='contianer-sidebar-elements'>
            <li><Link to={"/events"}><Home /> Home</Link></li>
            <li><Link to={"/account/login"}><Login /> Login</Link></li>
            <li><Link to={"/profile"}><AccountCircle /> Perfil</Link></li>
            <li><Link to={"/ticket-event"}><EditCalendar /> Inscrição</Link></li>
            <li><Link to={"/events/view"}><Event /> View Eventos</Link></li>
            {/* O Link para Criar Evento com o onClick */}
            <li>
                <Link to={"/events/create"} onClick={(e) => { e.preventDefault(); onCreateEvent(); }}>
                    <AddCircle /> Criar Evento
                </Link>
            </li>
            <li><Link to={"/events/edit/1"}><CreateOutlined /> Editar Evento</Link></li>
            <li><Link to={""}><DeleteOutlineOutlined /> Deletar Evento</Link></li>
        </ul>
    )
}

export default Sidebar