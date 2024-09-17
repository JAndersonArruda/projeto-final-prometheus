// import React from 'react'

import { useNavigate } from "react-router-dom"
import "./formUser.css"

interface FormUserProps {
    modo: string,
    value: string 
}

export default function FormUser({ modo, value }: FormUserProps) {
    const navigate = useNavigate();
    const handleSubmit = () => {
        if (value === "Entrar") navigate("/events");
        else if (value === "Salvar") navigate("/account/login");
    }

    return (
        <>
            <form action="" className="form">
                {modo === "login" ? (
                    <>
                        <div className="element">
                            <label htmlFor="username">Usuário</label>
                            <input id="username-imput" type="text" name="username" placeholder="Username" />
                        </div>
                        <div className="element">
                            <label htmlFor="senha">Senha</label>
                            <input id="senha-imput" type="password" name="nome" placeholder="Senha" />
                        </div>
                    </>
                ) : modo === "cadastro" ? (
                    <>
                        <div className="element">
                            <label htmlFor="username">Username</label>
                            <input id="usernema-imput" type="text" name="username" placeholder="Username" />
                        </div>
                        <div className="element">
                            <label htmlFor="email">Email</label>
                            <input id="email-imput" type="text" name="email" placeholder="Email" />
                        </div>
                        <div className="element">
                            <label htmlFor="senha">Senha</label>
                            <input id="senha-imput" type="password" name="senha" placeholder="Senha" />
                        </div>
                        <div className="element">
                            <label htmlFor="confirm-senha">Confirmar Senha</label>
                            <input id="confirm-senha-imput" type="password" name="confirm-senha" placeholder="Confirmar Senha" />
                        </div>
                    </>
                ): null}
                <div className="element-submit">
                    <input type="button" value={value} onClick={handleSubmit}/>
                </div>
            </form>
        </>
    )
}
