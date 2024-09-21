// import React from 'react'

import "./home.css"

import Header from "../../components/Header/Header";
import CardEvent from "../../components/Card/CardEvent"
import Footer from "../../components/Footer/Footer";

//Utilizado para testes
import { ArrayTest } from "../../service/ArrayDados";
import { getEventos } from "../../service/apiService.ts";
import {useEffect, useState} from "react";

export default function Home() {
    const [eventos, setEventos] = useState([]); // Estado para armazenar os eventos
    const [loading, setLoading] = useState(true); // Estado para controle de loading
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const data = await getEventos();
                console.log(data);
                setEventos(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEventos();
    }, []);

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
                            />
                        ))
                    ) : (
                        <p>Nenhum evento disponível.</p>
                    )}
                </div>
                <Footer />
            </div>
        </>
    );
}
