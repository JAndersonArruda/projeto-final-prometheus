// import React from 'react'
import { CalendarToday, LocationOn } from "@mui/icons-material";
import "./cardEvent.css"

interface CardEventProps {
    id: number,  // id do evento, para uso na API de eventos
    title: string,
    image: string,
    dateTime: string, // O tipo agora é string, que representa uma data em formato ISO
    localEvent: string
}

function CardEvent({ id, title, image, dateTime, localEvent } : CardEventProps) {
    const dateTimeEvent = new Date(dateTime).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit", 
        minute: "2-digit"
    });

    return ( 
        <div id={id.toString()} className="card-event">
            <img src={image} alt={`Imagem do evento ${title}`} />
            <div className="card-event-body">
                <h2>{title}</h2>
                <p className="date-time-card"><CalendarToday /> {dateTimeEvent}</p>
                <p><LocationOn />{localEvent}</p>
            </div>
        </div>
    );
}

export default CardEvent;
