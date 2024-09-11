// import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
        <h1>Login</h1>
        <Link to={"/"}>Home</Link>
        <Link to={"/profile"}>Perfil</Link>
        <Link to={"/ticket-event"}>Inscrição</Link>
        <Link to={"/events/view"}>ViewEvent</Link>
    </div>
  )
}
