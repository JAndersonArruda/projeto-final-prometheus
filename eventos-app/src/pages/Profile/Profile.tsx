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
                        <div className='data-user'>
                            <img className="image-prifile" src="https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg" alt="user-image" />
                        </div>
                        <div className='data-account'>
                            <h3>UserName</h3>
                            <p>Nome do Usuário</p>
                            <p>E-mail: </p>
                        </div>
                    </div>
                    <div className="content-data-certificate">
                        <div>
                            <h3>Certificados</h3>
                            <div className="certificate">
                                <CertificateItem
                                    name={"Evento 00371291173"}
                                    date={"20/10/2024"}
                                    timeLine={"3:00"}
                                />
                                <CertificateItem
                                    name={"Evento 00371291173"}
                                    date={"20/10/2024"}
                                    timeLine={"3:00"}
                                />
                                <CertificateItem
                                    name={"Evento 00371291173"}
                                    date={"20/10/2024"}
                                    timeLine={"3:00"}
                                />
                                <CertificateItem
                                    name={"Evento 00371291173"}
                                    date={"20/10/2024"}
                                    timeLine={"3:00"}
                                />
                                <CertificateItem
                                    name={"Evento 00371291173"}
                                    date={"20/10/2024"}
                                    timeLine={"3:00"}
                                />
                            </div>
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
