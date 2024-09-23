// import React from 'react'

import "./viewEvent.css"

import { ArrayTest } from "../../service/ArrayDados"

export default function ViewEvent({ event, onClose }) {
    const dateEvent = new Date(event.eventDate).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });

    const timeEvent = new Date(event.eventDate).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });

    return (
        <>
            <div className="overlay" onClick={onClose} />
            <div id="container-page" className="container-view-event">
                <button className="close-button" onClick={onClose}>Fechar</button>
                <div className="content-image">
                    <img src={event.eventImage} alt="imagem do evento" />
                </div>
                <div className="content-title">
                    <h2>{event.title}</h2>
                </div>
                <div className="content-data">
                    <p className="location">{event.location}</p>
                    <p className="time-event">{timeEvent}<span className="date-event">{dateEvent}</span></p>
                </div>
                <div className="content-description">
                    {event.description?.split("\n").map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
                <button className="button-ticket">Realizar Inscrição</button>
            </div>
        </>
    );
}
