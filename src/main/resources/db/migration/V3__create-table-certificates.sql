CREATE TABLE certificates (
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    data_emissao TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    codigo_validacao VARCHAR(255) UNIQUE NOT NULL,
    usuario INTEGER NOT NULL,
    evento INTEGER NOT NULL,
    CONSTRAINT certificatesPK PRIMARY KEY(usuario, evento),
    CONSTRAINT usuarioFK FOREIGN KEY(usuario) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT emissorFK FOREIGN KEY(evento) REFERENCES events(id) ON DELETE CASCADE
);