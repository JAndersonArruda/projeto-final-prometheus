// import React from 'react'

import "./viewEvent.css"

import { ArrayTest } from "../../service/ArrayDados"

export default function ViewEvent() {
    const pathID = 1;
    const pathEvent = ArrayTest.find(element => element.id === pathID);

    const dateEvent = pathEvent?.dateTime.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
    const timeEvent = pathEvent?.dateTime.toLocaleTimeString([], {
        hour: "2-digit", 
        minute: "2-digit"
    });

    return (
        <>
            <div id="container-page" className="container-view-event">
                <div className="content-image">
                    <img src={pathEvent?.image} alt="imagem do evento" />
                </div>
                <div className="content-title">
                    <h2>{pathEvent?.title}</h2>
                </div>
                <div className="content-data">
                    <p className="location">{pathEvent?.localEvent}</p>
                    <p className="time-event">{timeEvent}<span className="date-event">{dateEvent}</span></p>
                </div>
                <div className="content-description">
                    {pathEvent?.description?.split("\n").map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
                <button className="button-ticket">Realizar Inscrição</button>
            </div>
        </>
    )
}

