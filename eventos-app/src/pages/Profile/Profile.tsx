// import React from 'react'

import "./profile.css"

import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import CertificateItem from "../../components/CertificateItem/CertificateItem"

export default function Profile() {
    return (
        <>
            <Header />
            <div id="container-page" className="container-profile">
                <div className="area-profile">
                    <div className="content-data-personal">
                        <h4 className="title-section-personal">Dados Pessoais</h4>
                        <div className="personal">
                            <div className='data-image-user'>
                                <img className="image-prifile" src="https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg" alt="user-image" />
                            </div>
                            <div className='data-account'>
                                <p id="mark-1">
                                    <span className="content-date-profile">Username: <span className="body-date-profile">corpo do username</span></span>
                                    <span className="content-date-profile">E-mail: <span className="body-date-profile">corpo do email</span></span>
                                </p>
                                <p id="mark-2">
                                    <span className="content-date-profile">Nome: <span className="body-date-profile">corpo do nome</span></span>
                                    <span className="content-date-profile">Tipo: <span className="body-date-profile">corpo do tipo</span></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="content-data-certificate">
                        <h4 className="title-section-certificate">Certificados</h4>
                        <div className="certificate">
                            <CertificateItem
                                name={"Certificado 00371291173"}
                                date={"20/10/2024"}
                                timeLine={"3:00"}
                            />
                            <CertificateItem
                                name={"Certificado 00371291173"}
                                date={"20/10/2024"}
                                timeLine={"3:00"}
                            />
                            <CertificateItem
                                name={"Certificado 00371291173"}
                                date={"20/10/2024"}
                                timeLine={"3:00"}
                            />
                            <CertificateItem
                                name={"Certificado 00371291173"}
                                date={"20/10/2024"}
                                timeLine={"3:00"}
                            />
                            <CertificateItem
                                name={"Certificado 00371291173"}
                                date={"20/10/2024"}
                                timeLine={"3:00"}
                            />
                        </div>
                    </div>
                </div>
                <div className="area-footer-profile">   
                    <Footer />
                </div>
            </div>
        </>
    )
}
