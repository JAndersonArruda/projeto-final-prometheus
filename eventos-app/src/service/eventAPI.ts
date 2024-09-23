// src/service/eventoService.js

const API_BASE_URL = 'http://localhost:8080/events';


export async function createEvent(eventData: FormData) {
    const response = await fetch(`${API_BASE_URL}/create`, {
        method: "POST",
        body: eventData
    });
    if (!response.ok) {
        throw new Error("Erro ao criar o evento");
    }
    return response.json();
}

export const getEventos = async () => {
    try {
        const response = await fetch(API_BASE_URL);

        if (!response.ok) {
            throw new Error('Erro ao buscar eventos');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro na requisição:', error.message);
        throw error;
    }
};

