import React from 'react'
import { Link } from 'react-router-dom'

export default function Profile() {
  return (
    <div>
        <h1>Perfil</h1>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/ticket-event"}>Inscrição</Link>
        <Link to={"/events/view"}>ViewEvent</Link>
    </div>
  )
}
