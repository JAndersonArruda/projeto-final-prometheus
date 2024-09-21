// src/service/eventoService.js

const API_URL = 'http://localhost:8080/events';

export const getEventos = async () => {
    try {
        const response = await fetch(API_URL);

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

