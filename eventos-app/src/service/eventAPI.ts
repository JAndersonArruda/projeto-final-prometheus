// src/service/eventoService.js

const API_BASE_URL = 'http://localhost:8080/events';

export async function createEvent(title: string, description: string, location: string, eventDate: string, file: File) {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("eventDate", eventDate);
    formData.append("file", file);

    console.log(formData);
    console.log(title, " ", description, " ", location, " ", eventDate);

    const token: string = localStorage.getItem("token") ?? "";
    const response = await fetch(`${API_BASE_URL}/create`, {
        method: "POST",
        headers: {
            //"Content-Type": "application/json",
            "Authorization": `${token}`,
        },
        body: formData,
    });

    console.log(response);

    if (!response.ok) {
        alert("Você não tem permissão para criar eventos");
        throw new Error("Usuario não tem permissão para criar eventos");
    }
    else {
        alert("Evento criado com sucesso");
    }

    return response.text();
}

export async function editEvent(eventID: bigint, title: string, description: string, location: string, eventDate: string, file: File) {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("eventDate", eventDate);
    formData.append("file", file);

    console.log(formData);
    console.log(title, " ", description, " ", location, " ", eventDate);

    const token: string = localStorage.getItem("token") ?? "";
    const response = await fetch(`${API_BASE_URL}/edit/${eventID}`, {
        method: "POST",
        headers: {
            //"Content-Type": "application/json",
            "Authorization": `${token}`,
        },
        body: formData,
    });

    console.log(response);

    if (!response.ok) {
        alert("Usuario não tem permissão para editar esse evento");
        throw new Error("Usuario não tem permissão para editar esse evento");
    }
    else {
        alert("Evento editado com sucesso");
    }

    return response.text();
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

export async function issueCertificates(eventId) {
    const token = localStorage.getItem("token") ?? "";

    const response = await fetch(`${API_BASE_URL}/${eventId}/issue-certificates`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        alert("Erro ao emitir certificados. Você não tem permissão ou houve um problema.");
        throw new Error("Não foi possível emitir os certificados");
    } else {
        alert("Certificados emitidos com sucesso!");
    }

    return response.text();
}
