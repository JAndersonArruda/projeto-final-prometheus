// import React from 'react'
import "./modalEvent.css";
import { createEvent, editEvent } from "../../service/eventAPI"
import { useNavigate, useParams } from "react-router-dom"

interface ModalEventProps {
    modo: string;
}

export default function ModalEvent({ modo }: ModalEventProps) {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const handleEventClick = async ()=>{
        
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
                    const response = await createEvent(nome, descricao, local, dataEvento, foto);
                    console.log(response);
                }
                else if(modo==="Editar"){
                    if (id) {
                        const eventID = BigInt(id);
                        const response = await editEvent(eventID, nome, descricao, local, dataEvento, foto);
                        console.log(response);
                    } else {
                        console.error("ID não encontrado.");
                    }
                }
                navigate("/events");
            }
            catch (error: any){
                console.log(error);
            }
        }
        
    }

    return (
        <>
            <form className="form-modal">
                <div className="data-event">
                    <h3>{modo} Evento</h3>
                </div>
                <div className="element-modal">
                    <label htmlFor="nome">Nome</label>
                    <input id="nome-imput" type="text" name="nome" placeholder="Nome" required />
                </div>
                <div className="element-date-modal">
                    <div className="element-modal">
                        <label htmlFor="data">Data</label>
                        <input id="data-imput" type="date" name="data" required />
                    </div>
                    <div className="element-modal">
                        <label htmlFor="horario">Horário</label>
                        <input id="horario-imput" type="time" name="horario" required />
                    </div>
                </div>
                <div className="element-modal">
                    <label htmlFor="local">Local</label>
                    <input id="local-imput" type="text" name="local" placeholder="Local" required />
                </div>
                <div className="element-modal">
                    <label htmlFor="descricao">Descrição</label>
                    <textarea id="descricao-imput" name="descricao" rows={10} placeholder="Descrição" required />
                </div>
                <div className="element-modal">
                    <label htmlFor="imagem">Imagem</label>
                    <input id="imagem-imput" type="file" name="imagem" required />
                </div>

                <div className="element-submit-modal">
                    <input type="button" value="Salvar" onClick={handleEventClick} />
                </div>
            </form>

            {/* <form className="form-modal">
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
            </form> */}
        </>
        
    );
}
