// import React from 'react'
import "./modalEvent.css";

interface ModalEventProps {
    modo: string;
    onSave: () => void;  // Callback para quando o evento for salvo
    onClose: () => void; // Callback para fechar o modal
}

export default function ModalEvent({ modo, onSave, onClose }: ModalEventProps) {
    const handleSaveClick = () => {
        // Lógica de salvar aqui (pode incluir validação de formulário e outras operações)
        onSave(); // Chama a função de salvar
        onClose(); // Fecha o modal logo após o salvar
    };

    return (
        <div className="container-modal-event">
            <form className="form-modal">
                <h2>{modo} Evento</h2>
                <div className="element-modal">
                    <label htmlFor="nome">Nome</label>
                    <input id="nome-imput" type="text" name="nome" placeholder="Nome" />
                </div>
                <div className="element-date-modal">
                    <div className="element-modal">
                        <label htmlFor="data">Data</label>
                        <input id="data-imput" type="date" name="data" />
                    </div>
                    <div className="element-modal">
                        <label htmlFor="horario">Horário</label>
                        <input id="horario-imput" type="time" name="horario" />
                    </div>
                </div>
                <div className="element-modal">
                    <label htmlFor="local">Local</label>
                    <input id="local-imput" type="text" name="local" placeholder="Local" />
                </div>
                <div className="element-modal">
                    <label htmlFor="descricao">Descrição</label>
                    <textarea id="descricao-imput" name="descricao" rows={10} placeholder="Descrição" />
                </div>
                <div className="element-modal">
                    <label htmlFor="imagem">Imagem</label>
                    <input id="imagem-imput" type="file" name="imagem" />
                </div>
                <div className="element-submit-modal">
                    {/* Substituímos o botão por input type="button" */}
                    <input type="button" value="Salvar" onClick={handleSaveClick} />
                    <input type="button" value="Fechar" onClick={onClose} />
                </div>
            </form>
        </div>
    );
}
