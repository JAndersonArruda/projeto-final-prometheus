import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getEventDetails, joinEvent } from "../../service/eventAPI";
import { getLoggedUser } from "../../service/userAPI";
import Header from "../../components/Header/Header.tsx";
import "./viewEvent.css";

export default function ViewEvent() {
    const location = useLocation();
    const eventId = location.state?.eventId;
    const [event, setEvent] = useState(null);
    const [userData, setUserData] = useState(null);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [loggedUserId, setLoggedUserId] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Event ID:", eventId); // Para depuração

        const fetchEventDetails = async () => {
            if (!eventId) {
                setError("ID do evento não está definido.");
                setLoading(false);
                return;
            }
            try {
                const eventData = await getEventDetails(eventId);
                setEvent(eventData);
            } catch (error) {
                console.error("Erro ao buscar detalhes do evento:", error);
                setError("Falha ao buscar detalhes do evento.");
            } finally {
                setLoading(false);
            }
        };

        const fetchUserData = async () => {
            try {
                const data = await getLoggedUser();
                setUserData(data);
                setLoggedUserId(data.id);
                if (data.eventsAttended && data.eventsAttended.some(e => e.id === eventId)) {
                    setIsSubscribed(true);
                }
            } catch (error) {
                console.error("Erro ao buscar dados do usuário:", error);
            }
        };

        fetchUserData();
        fetchEventDetails();
    }, [eventId]);

    // Verifique se o evento está carregado
    if (loading) {
        return <p>Carregando...</p>; // Mensagem de carregamento
    }

    if (error) {
        return <p>{error}</p>; // Mensagem de erro
    }

    if (!event) {
        return <p>Evento não encontrado.</p>; // Mensagem se o evento não for encontrado
    }

    // Formatação das datas
    const dateEvent = new Date(event.eventDate).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });

    const timeEvent = new Date(event.eventDate).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });

    const handleEventSubscription = async () => {
        await joinEvent(event.id);
        setIsSubscribed(true);
    };

    const isCreator = event.creatorId === loggedUserId;

    return (
        <>
            <Header />
            <div id="container-page" className="container-view-event">
                <div className="content-image">
                    <img src={event.eventImage} alt="imagem do evento"/>
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
                {!isSubscribed && !isCreator && (
                    <button className="button-ticket" onClick={handleEventSubscription}>Realizar Inscrição</button>
                )}
                <div className="participants">
                    <h3>Participantes:</h3>
                    <ul>
                        {event.participants.map(participant => (
                            <li key={participant.id}>
                                <p>{participant.username} - {participant.email}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
