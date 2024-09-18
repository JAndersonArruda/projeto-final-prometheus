// import React from 'react'

import "./ticketEvent.css"


export default function TicketEvent() {
    return (
        <>
            <div id="container-page" className="container-ticket">
                <form action="" className="form-ticket">
                    <div className="data-event">
                        <h3>Titulo do Evento</h3>
                        <div className="content-data-event">
                            <p className="data-event-location">Local</p>
                            <p className="data-event-date">Data<span className="data-event-time">Hora</span></p>
                        </div>
                    </div>
                    <div className="element-ticket">
                        <label htmlFor="name">Nome</label>
                        <input id="name-imput" type="text" name="name" placeholder="Nome" required />
                    </div>
                    <div className="element-ticket">
                        <label htmlFor="firtname">Sobrenome</label>
                        <input id="firtname-imput" type="text" name="firtname" placeholder="Sobrenome" required />
                    </div>
                    <div className="element-ticket">
                        <label htmlFor="email">E-mail</label>
                        <input id="email-imput" type="text" name="email" placeholder="Email" required />
                    </div>
                    <div className="element-ticket">
                        <label htmlFor="namecerty">Nome no Certificado</label>
                        <input id="namecerty-imput" type="text" name="namecerty" placeholder="Nome no certificado" required />
                    </div>
                    <div className="element-ticket">
                        <label htmlFor="phone">Telefone</label>
                        <input id="phonesenha-imput" type="tel" name="phone" placeholder="Telefone" required />
                    </div>
                    <div className="element-ticket">
                        <label htmlFor="confirm-phone">Confirmar Telefone</label>
                        <input id="confirm-phone-imput" type="tel" name="confirm-phone" placeholder="Confirmar Telefone" required />
                    </div>

                    <div className="element-submit-ticket">
                        <input type="submit" value="Inscrever-se" />
                    </div>
                </form>
            </div>
        </>
    )
}
