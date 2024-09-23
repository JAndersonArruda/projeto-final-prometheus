// import React from 'react'
import "./home.css";
import Header from "../../components/Header/Header";
import CardEvent from "../../components/Card/CardEvent";
import Footer from "../../components/Footer/Footer";
import { getEventos } from "../../service/apiService.ts";
import { useEffect, useState } from "react";
import ModalEvent from "../../components/ModalEvent/ModalEvent.tsx";

export default function Home() {
    const [eventos, setEventos] = useState([]); // Estado para armazenar os eventos
    const [loading, setLoading] = useState(true); // Estado para controle de loading
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false); // Estado para controle do modal
    const [modalMode, setModalMode] = useState("create"); // Estado para definir o modo do modal

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

    // Função para abrir o modal com o modo "Criar"
    const handleCreateEvent = () => {
        setModalMode("create");
        setShowModal(true);
    };

    // Função para fechar o modal
    const handleCloseModal = () => {
        setShowModal(false);
    };

    // Função chamada ao submeter o formulário de criação/edição
    const handleSaveEvent = () => {
        // Lógica para salvar o evento...
        setShowModal(false); // Fecha o modal ao salvar
    };

    if (loading) {
        return <p>Carregando eventos...</p>;
    }

    if (error) {
        return <p>Erro ao carregar eventos: {error}</p>;
    }

    return (
        <>
            <Header onCreateEvent={handleCreateEvent} />
            <div id="container-page" className="container-home">
                {showModal && (
                    <ModalEvent modo={modalMode} onSave={handleSaveEvent} onClose={handleCloseModal} />
                )}
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
