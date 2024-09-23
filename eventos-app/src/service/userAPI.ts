const API_BASE_URL = 'http://localhost:8080/users';

export async function getLoggedUser() {
    const response = await fetch(`${API_BASE_URL}/me`);
    if (!response.ok) {
        throw new Error("Erro ao buscar usuário logado");
    }
    return response.json();
}
