// import React from 'react'
import "./modalEvent.css";
import { createEvent } from "../../service/eventAPI"
//import { useNavigate } from "react-router-dom"

interface ModalEventProps {
    modo: string;
}

export default function ModalEvent({ modo }: ModalEventProps) {
    const handleEventClick = ()=>{
        //const navigate = useNavigate();
        
        const nome = (document.getElementById('nome-imput') as HTMLInputElement).value;
        const data = (document.getElementById('data-imput') as HTMLInputElement).value;
        const horario = (document.getElementById('horario-imput') as HTMLInputElement).value;
        const local = (document.getElementById('local-imput') as HTMLInputElement).value;
        const descricao = (document.getElementById('descricao-imput') as HTMLTextAreaElement).value;
        const inputFoto = (document.getElementById('imagem-imput') as HTMLInputElement);

        if (!nome || !data || !horario || !local || !descricao || !inputFoto.files?.[0]) {
            alert("Por favor, preencha todos os campos.");
        }
        else{
            const dataEvento: string = data + "T" + horario + ":00";

            const foto = inputFoto.files?.[0];
            try{
                
                if(modo==="Criar"){    
                    createEvent(nome, descricao, local, dataEvento, foto);
                }
                else if(modo==="Editar"){
                    alert("editando");
                    //EditEvent();
                }
                //navigate("/events");
            }
            catch (error: any){
                console.log(error);
            }
        }
        
    }

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
                    <input type="button" value="Salvar" onClick={handleEventClick}/>
                </div>
            </form>
        </div>
    );
}
