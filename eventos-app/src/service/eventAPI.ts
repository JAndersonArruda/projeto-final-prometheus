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

export async function joinEvent(id: bigint) {
    const token: string = localStorage.getItem("token") ?? "";
    const response = await fetch(`${API_BASE_URL}/join`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ id }),
    });

    if (!response.ok) {
        alert("Um erro ocorreu. Não foi possível se registrar nesse evento.");
        throw new Error("Não foi possível registrar o usuário nesse evento");
    }
    else {
        alert("Registrado no evento com sucesso!");
    }

    return response.text();
}

export async function leaveEvent(id: bigint) {
    const token: string = localStorage.getItem("token") ?? "";
    const response = await fetch(`${API_BASE_URL}/leave`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ id }),
    });

    if (!response.ok) {
        alert("Um erro ocorreu. Não foi possível cancelar inscrição no evento.");
        throw new Error("Não foi possível cancelar inscrição no evento.");
    }
    else {
        alert("Registrado no evento com sucesso!");
    }

    return response.text();
}

export async function deleteEvent(id: bigint) {
    const token: string = localStorage.getItem("token") ?? "";
    const response = await fetch(`${API_BASE_URL}/delete`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ id }),
    });

    if (!response.ok) {
        alert("Você não tem permissão para deletar eventos");
        throw new Error("Usuario não tem permissão para deletar eventos");
    }
    else {
        alert("Evento deletado com sucesso");
    }

    return response.text();
}

export async function getEventDetails(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/id/${id}`);

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};
