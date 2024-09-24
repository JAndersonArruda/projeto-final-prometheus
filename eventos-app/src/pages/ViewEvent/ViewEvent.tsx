// import React from 'react'

import "./viewEvent.css"

import { ArrayTest } from "../../service/ArrayDados"
import { joinEvent } from "../../service/eventAPI"
import {useLocation} from "react-router-dom";
import Header from "../../components/Header/Header.tsx";

export default function ViewEvent() {
    const location = useLocation();
    const event = location.state?.event;

    const dateEvent = new Date(event.eventDate).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });

    const timeEvent = new Date(event.eventDate).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });

    const handleEventSubscription = () =>{
        joinEvent(event.id);
    }

    return (
        <>
            <Header />
            <div id="container-page" className="container-view-event">
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
                <button className="button-ticket" onClick={handleEventSubscription}>Realizar Inscrição</button>
            </div>
        </>
    );
}
