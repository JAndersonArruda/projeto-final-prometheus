// import React from 'react'

import "./certificateItem.css"

interface CertificateItemProps {
    name: string,
    date: string,
    validationCode: string
}

function formatarData(stringData: string) {
    const objDate = new Date(stringData);
    const dia = String(objDate.getDate()).padStart(2, '0');
    const mes = String(objDate.getMonth() + 1).padStart(2, '0');
    const ano = objDate.getFullYear();
    
    return `${dia}/${mes}/${ano}`;
}

function formatarHora(stringData: string) {
    const objDate = new Date(stringData);
    const hora = String(objDate.getHours()).padStart(2, '0');
    const minutos = String(objDate.getMinutes()).padStart(2, '0');
    
    return `${hora}:${minutos}`;
}

function CertificateItem({ name, date, validationCode } : CertificateItemProps) {    
    return (
        <div className="container-certificate">
            <div className="content-icon">
                <img className="image-certificate" src="https://cdn.icon-icons.com/icons2/2735/PNG/512/certificate_icon_175697.png" alt="icone de certificado" />
            </div>
            <div className="content-info">
                <p className="name-event">{name}</p>
                <p className="date-certificate">
                    Emitido em: {formatarData(date)}  {/*Caso queira exibir o horario formatarHora(date) */}
                    <span className="time-line"> Código de validação:  
                        <span className="time-value">{validationCode}</span>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default CertificateItem