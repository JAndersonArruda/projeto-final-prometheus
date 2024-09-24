// import React from 'react'

import "./profile.css"

import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import CertificateItem from "../../components/CertificateItem/CertificateItem"

import { getLoggedUser } from '../../service/userAPI.ts'
import {useEffect, useState} from "react";
import CardEvent from "../../components/Card/CardEvent.tsx";
import {useNavigate} from "react-router-dom";
import {deleteEvent} from "../../service/eventAPI.ts";

export default function Profile() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [loggedUserId, setLoggedUserId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await getLoggedUser();
                setUserData(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const handleEventClick = (event) => {
        console.log(event);
        navigate(`/events/view/${event.id}`, { state: { eventId: event.id } });
    };

    const handleEdit = (eventId) => {
        alert(`Editar evento ${eventId}`);
    };

    const handleDelete = async (idEvento) => {
        try {
            await deleteEvent(idEvento);
            setUserData((prevEventos) => prevEventos.filter(event => event.id !== idEvento));
        } catch (error) {
            console.error("Erro ao excluir evento:", error);
        }
    };

    if (loading) {
        return <p>Carregando eventos...</p>;
    }

    if (error) {
        return <p>Erro ao carregar eventos: {error}</p>;
    }

    return (
        <>
            <Header />
            <div id="container-page" className="container-profile">
                <div className="area-profile">
                    <div className="content-data-personal">
                        <h4 className="title-section-personal">Dados Pessoais</h4>
                        <div className="personal">
                            <div className='data-image-user'>
                                <img className="image-prifile"
                                     src={userData?.file || "https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg"}
                                     alt="user-image"/>
                            </div>
                            <div className='data-account'>
                                <p id="mark-1">
                                    <span className="content-date-profile">Username: <span
                                        className="body-date-profile">{userData?.username}</span></span>
                                    <span className="content-date-profile">E-mail: <span
                                        className="body-date-profile">{userData?.email}</span></span>
                                </p>
                                <p id="mark-2">
                                    <span className="content-date-profile">Nome: <span className="body-date-profile">corpo do nome</span></span>
                                    <span className="content-date-profile">Tipo: <span
                                        className="body-date-profile">{userData?.tipo}</span></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="content-data-certificate">
                        <h4 className="title-section-certificate">Certificados</h4>
                        <div className="certificate">
                            {userData?.certificates && userData.certificates.length > 0 ? (
                                userData.certificates.map(cert => (
                                    console.log(cert),
                                    <CertificateItem
                                        key={cert.id}
                                        name={cert.name}
                                        date={cert.issueDate}
                                        validationCode={cert.validationCode}
                                    />
                                ))
                            ) : (
                                <p>Nenhum certificado encontrado.</p>
                            )}
                        </div>
                    </div>
                    <div className="content-data-events">
                        <h4 className="title-section-events">Eventos Criados</h4>
                        <div className="events-list">
                            {userData?.createdEvents && userData.createdEvents.length > 0 ? (
                                userData.createdEvents.map(event => (
                                    <CardEvent
                                        key={event.id}
                                        id={event.id}
                                        title={event.title}
                                        image={event.eventImage}
                                        dateTime={event.eventDate}
                                        localEvent={event.location}
                                        onClick={() => handleEventClick(event)}
                                        onEdit={() => handleEdit(event.id)}
                                        onDelete={() => handleDelete(event.id)}
                                        showEditDelete={event.creatorId === loggedUserId}
                                    />
                                ))
                            ) : (
                                <p>Nenhum evento criado.</p>
                            )}
                        </div>
                    </div>
                    <div className="content-data-events">
                        <h4 className="title-section-events">Eventos Inscritos</h4>
                        <div className="events-list">
                            {userData?.eventsAttended && userData.eventsAttended.length > 0 ? (
                                userData.eventsAttended.map(event => (
                                    <CardEvent
                                        key={event.id}
                                        id={event.id}
                                        title={event.title}
                                        image={event.eventImage}
                                        dateTime={event.eventDate}
                                        localEvent={event.location}
                                        onClick={() => handleEventClick(event)}
                                        onEdit={() => handleEdit(event.id)}
                                        onDelete={() => handleDelete(event.id)}
                                        showEditDelete={event.creatorId === loggedUserId}
                                    />
                                ))
                            ) : (
                                <p>Você não está inscrito em nenhum evento.</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="area-footer-profile">
                    <Footer/>
                </div>
            </div>
        </>
    )
}
