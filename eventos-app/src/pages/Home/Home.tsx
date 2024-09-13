// import React from 'react'

import "./home.css"

import Header from "../../components/Header/Header";
import CardEvent from "../../components/Card/CardEvent"

//Utilizado para testes
import { ArrayTest } from "../../service/ArrayDados";

export default function Home() {
    return (
        <>
            <Header />
            <div className="container-home">
                <div className="container-cards-event">
                    {ArrayTest.map(eventDate => 
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
