import React from 'react'
import { Link } from 'react-router-dom'

export default function ViewEvent() {
  return (
    <div>
        <h1>View Eventos</h1>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/profile"}>Perfil</Link>
        <Link to={"/ticket-event"}>Inscrição</Link>
    </div>
  )
}

