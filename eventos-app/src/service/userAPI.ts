const API_BASE_URL = 'http://localhost:8080/users';

export async function getLoggedUser() {
    const token = localStorage.getItem('token');

    const response = await fetch(`${API_BASE_URL}/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Erro ao buscar usuário logado");
    }

    return response.json();
}

