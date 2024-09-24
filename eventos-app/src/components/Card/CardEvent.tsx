// import React from 'react'
import { CalendarToday, LocationOn, Edit, Delete } from "@mui/icons-material";
import "./cardEvent.css"

interface CardEventProps {
    id: number;  // id do evento, para uso na API de eventos
    title: string;
    image: string;
    dateTime: string; // O tipo agora é string, que representa uma data em formato ISO
    localEvent: string;
    onClick: () => void; // Adicionando a propriedade onClick
    onEdit: () => void;
    onDelete: () => void;
}

function CardEvent({ id, title, image, dateTime, localEvent, onClick, onEdit, onDelete, showEditDelete } : CardEventProps) {
    const dateTimeEvent = new Date(dateTime).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit", 
        minute: "2-digit"
    });

    return (
        <div id={id.toString()} className="card-event" onClick={onClick}>
            <div className="card-event-icons">
                {showEditDelete && (
                    <>
                        <Edit className="icon-button" onClick={(e) => {
                            e.stopPropagation();
                            onEdit();
                        }}/>
                        <Delete className="icon-button" onClick={(e) => {
                            e.stopPropagation();
                            onDelete();
                        }}/>
                    </>
                )}
            </div>
            <img src={image} alt={`Imagem do evento ${title}`}/>
            <div className="card-event-body">
                <h2>{title}</h2>
                <p className="date-time-card"><CalendarToday/> {dateTimeEvent}</p>
                <p><LocationOn/>{localEvent}</p>
            </div>
        </div>
    );
}

export default CardEvent;
