// import React from 'react'

import "./header.css"

import Sidebar from '../Sidebar/Sidebar'
import {useEffect, useState} from "react";
import {getEventos} from "../../service/eventAPI.ts";
import {getLoggedUser} from "../../service/userAPI.ts";

function Header() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLoggedUser = async () => {
            try {
                const user = await getLoggedUser();
                console.log(user)
                setUser(user);
            } catch (error) {
                setError("Erro ao buscar usuário logado");
            }
        };

        fetchLoggedUser();
    }, []);


    return (
        <div className="container-header">
            <nav className="container-nav">
                <div className="container-logo">
                    <img className="image-logo" src="https://www.veryicon.com/download/png/miscellaneous/2022-complete-collection-of-alibaba-cloud/prometheus-prometheus-monitoring-service-1?s=256" alt="" />
                    <h3 className="name-logo">Prometheus <span id="span-second-titulo-logo">Eventos</span></h3>
                </div>
                <Sidebar tipoUser={user?.tipo} />
            </nav>
        </div>
    )
}

export default Header
