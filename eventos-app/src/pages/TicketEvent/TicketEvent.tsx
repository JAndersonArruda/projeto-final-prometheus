// import React from 'react'
import { Link } from 'react-router-dom'

export default function TicketEvent() {
  return (
    <div>
        <h1>Inscrição Eventos</h1>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/profile"}>Perfil</Link>
        <Link to={"/events/view"}>ViewEvent</Link>
    </div>
  )
}
