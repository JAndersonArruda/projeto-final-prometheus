// import React from 'react'

import "./header.css"

import Sidebar from '../Sidebar/Sidebar'

interface HeaderProps {
    onCreateEvent: () => void; // Callback para passar ao Sidebar
}

function Header({ onCreateEvent }: HeaderProps) {
    return (
        <div className="container-header">
            <nav className="container-nav">
                <div className="container-logo">
                    <img className="image-logo" src="https://www.veryicon.com/download/png/miscellaneous/2022-complete-collection-of-alibaba-cloud/prometheus-prometheus-monitoring-service-1?s=256" alt="" />
                    <h3 className="name-logo">Promethes <span id="span-second-titulo-logo">Eventos</span></h3>
                </div>
                <Sidebar onCreateEvent={onCreateEvent} /> {/* Passa a função para o Sidebar */}
            </nav>
        </div>
    )
}

export default Header
