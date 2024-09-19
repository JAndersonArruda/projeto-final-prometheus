// import React from 'react'

import "./certificateItem.css"

interface CertificateItemProps {
    name: string,
    // date: Date,
    date: string,
    timeLine: string
}

function CertificateItem({ name, date, timeLine } : CertificateItemProps) {
    // const dateCertificate = date?.dateTime.toLocaleDateString("pt-BR", {
    //     day: "2-digit",
    //     month: "2-digit",
    //     year: "numeric"
    // });
    
    return (
        <div className="container-certificate">
            <div className="content-icon">
                <img className="image-certificate" src="" alt="icone de certificado" />
            </div>
            <div className="content-info">
                <p className="name-event">{name}</p>
                <p className="date-certificate">{date} <span className="time-line">Carga Horaria: <span className="time-value">{timeLine}</span></span></p>
            </div>
        </div>
    )
}

export default CertificateItem