// import React from 'react'
import "./cardEvent.css"

interface CardEventProps {
    id: number,  // id do evento, para uso na API de eventos
    title: string,
    image: string,
    dateTime: Date,
    localEvent: string
}

function CardEvent({ id, title, image, dateTime, localEvent } : CardEventProps) {
    return ( 
        <div className="card-event" id={id.toString()}>
            <h1>{title}</h1>
            <img src={image} alt=""/>
            <p>{dateTime.toString()}</p>
            <p><i>iconLocal</i>{localEvent}</p>
        </div>
    )
}

export default CardEvent