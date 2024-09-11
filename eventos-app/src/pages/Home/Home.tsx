// import React from 'react'

import "./home.css"

import Header from "../../components/Header/Header";
import CardEvent from "../../components/Card/CardEvent"

export default function Home() {
    let contID = 1;
    const arrayTest = [
        {
            id: contID ++,
            title: "Projeto POO",
            image: "https://blogs.uninassau.edu.br/sites/blogs.uninassau.edu.br/files/crop/capa/2021/07/evento.png",
            dateTime: new Date(2024, 8, 23, 9, 0), // class Date salva indice do mes 0 - 11. exp.: indice 8 = mes 9
            localEvent: "IFPB - Cajazeiras, Lab. 4"
        },
        {
            id: contID ++,
            title: "Projeto POO",
            image: "https://blogs.uninassau.edu.br/sites/blogs.uninassau.edu.br/files/crop/capa/2021/07/evento.png",
            dateTime: new Date(2024, 8, 23, 9, 0), // class Date salva indice do mes 0 - 11. exp.: indice 8 = mes 9
            localEvent: "IFPB - Cajazeiras, Lab. 4"
        },
        {
            id: contID ++,
            title: "Projeto POO",
            image: "https://blogs.uninassau.edu.br/sites/blogs.uninassau.edu.br/files/crop/capa/2021/07/evento.png",
            dateTime: new Date(2024, 8, 23, 9, 0), // class Date salva indice do mes 0 - 11. exp.: indice 8 = mes 9
            localEvent: "IFPB - Cajazeiras, Lab. 4"
        },
        {
            id: contID ++,
            title: "Projeto POO",
            image: "https://blogs.uninassau.edu.br/sites/blogs.uninassau.edu.br/files/crop/capa/2021/07/evento.png",
            dateTime: new Date(2024, 8, 23, 9, 0), // class Date salva indice do mes 0 - 11. exp.: indice 8 = mes 9
            localEvent: "IFPB - Cajazeiras, Lab. 4"
        }
    ];

    return (
        <>
            <Header />
            <div className="container-home">
                <h1>Home</h1>
                <p>Bem-vindo ao site!</p>
                <p>Aqui você pode ver eventos, se inscrever, verificar seu status, etc.</p>
                <div className="container-cards-event">
                    {arrayTest.map(eventDate => 
                        <CardEvent 
                            key={eventDate.id}
                            id={eventDate.id}
                            title={eventDate.title}
                            image={eventDate.image}
                            dateTime={eventDate.dateTime}
                            localEvent={eventDate.localEvent}
                        />
                    )}
                </div>
            </div>
        </>
        
    )
}
