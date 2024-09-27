// import React from 'react'

import ModalEvent from "../../components/ModalEvent/ModalEvent";

import "./editEvent.css"

export default function EditEvent() {
    return (
        <>
            <div id="container-page" className="container-edit-event">
                <ModalEvent modo="Editar" />
            </div>
        </>
    )
}
