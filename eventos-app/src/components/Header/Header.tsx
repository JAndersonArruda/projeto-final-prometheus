// import React from 'react'

import "./header.css"

import Sidebar from '../Sidebar/Sidebar'

function Header() {
    return (
        <header className="container-header">
            <nav className="container-nav">
                <div className="container-logo">
                    <img className="image-logo" src="https://www.veryicon.com/download/png/miscellaneous/2022-complete-collection-of-alibaba-cloud/prometheus-prometheus-monitoring-service-1?s=256" alt="" />
                    <h3 className="name-logo">Promethes <span id="span-second-titulo-logo">Eventos</span></h3>
                </div>
                <Sidebar />
            </nav>
        </header>
    )
}

export default Header
