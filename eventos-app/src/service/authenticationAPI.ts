const API_BASE_URL = "http://localhost:8080/auth";

export async function login(email: string, password: string) {
    console.log("Tentando fazer login com:", email, password);
    const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error("Login falhou: " + errorText);
    }

    const data = await response.json();

    if (data.token) {
        localStorage.setItem('token', data.token);
    } else {
        throw new Error("Token não encontrado na resposta.");
    }

    return data;
}



// Função para registro de usuário
export async function register(username: string, email: string, password: string, tipo: string, file: File) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("tipo", tipo);

    const response = await fetch(`${API_BASE_URL}/register`, {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        throw new Error("Registro falhou");
    }

    return response.text(); // Retorna a mensagem de sucesso
}
