// import React from 'react'
import "./home.css";
import Header from "../../components/Header/Header";
import CardEvent from "../../components/Card/CardEvent";
import Footer from "../../components/Footer/Footer";

import { getEventos } from "../../service/eventAPI.ts";
import {useEffect, useState} from "react";
import ModalEvent from "../../components/ModalEvent/ModalEvent.tsx";
import ViewEvent from "../ViewEvent/ViewEvent.tsx";

export default function Home() {
    const [eventos, setEventos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const data = await getEventos();
                setEventos(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEventos();
    }, []);

    const handleEventClick = (event) => {
        setSelectedEvent(event); // Armazena o evento clicado
    };

    const handleCloseView = () => {
        setSelectedEvent(null); // Reseta o evento selecionado ao fechar
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
            <div id="container-page" className="container-home">
                {selectedEvent ? (
                    <ViewEvent event={selectedEvent} onClose={handleCloseView} />
                ) : (
                    <div>
                        <div className="container-cards-event">
                            {eventos.length > 0 ? (
                                eventos.map((eventDate) => (
                                    <CardEvent
                                        key={eventDate.id}
                                        id={eventDate.id}
                                        title={eventDate.title}
                                        image={eventDate.eventImage}
                                        dateTime={eventDate.eventDate}
                                        localEvent={eventDate.location}
                                        onClick={() => handleEventClick(eventDate)} // Chama a função ao clicar
                                    />
                                ))
                            ) : (
                                <p>Nenhum evento disponível.</p>
                            )}
                        </div>
                        <div className="area-home">
                            <Footer />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
