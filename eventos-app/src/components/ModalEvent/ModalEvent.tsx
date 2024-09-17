// import React from 'react'

import "./modalEvent.css"

interface ModalEventProps {
    modo : string,    
}

export default function ModalEvent({ modo } : ModalEventProps) {
    return (
        <div className='container-modal-event'>
            <form action="" className="form-modal">
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
                    <input type="submit" value="Salvar" />
                </div>
            </form>
        </div>
    )
}
