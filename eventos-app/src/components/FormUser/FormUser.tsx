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
        if (value === "Entrar") {
            const userName = document.querySelector<HTMLInputElement>("#username-imput");
            const senha = document.querySelector<HTMLInputElement>("#senha-imput");

            if (userName?.value && senha?.value) navigate("/events");
        }
        else if (value === "Salvar") {
            const userName = document.querySelector<HTMLInputElement>("#username-imput");
            const email = document.querySelector<HTMLInputElement>("#email-imput");
            const senha = document.querySelector<HTMLInputElement>("#senha-imput");
            const confirm  = document.querySelector<HTMLInputElement>("#confirm-senha-imput");

            if (userName?.value && email?.value && senha?.value && confirm?.value) navigate("/account/login");
        }
    }

    return (
        <>
            <form action="" className="form-user">
                {modo === "login" ? (
                    <>
                        <div className="element-user">
                            <label htmlFor="username">Usuário</label>
                            <input id="username-imput" type="text" name="username" placeholder="Username" required />
                        </div>
                        <div className="element-user">
                            <label htmlFor="senha">Senha</label>
                            <input id="senha-imput" type="password" name="senha" placeholder="Senha" required />
                        </div>
                    </>
                ) : modo === "cadastro" ? (
                    <>
                        <div className="element-user">
                            <label htmlFor="username">Username</label>
                            <input id="username-imput" type="text" name="username" placeholder="Username" required />
                        </div>
                        <div className="element-user">
                            <label htmlFor="email">Email</label>
                            <input id="email-imput" type="text" name="email" placeholder="Email" required />
                        </div>
                        <div className="element-user">
                            <label htmlFor="senha">Senha</label>
                            <input id="senha-imput" type="password" name="senha" placeholder="Senha" required />
                        </div>
                        <div className="element-user">
                            <label htmlFor="confirm-senha">Confirmar Senha</label>
                            <input id="confirm-senha-imput" type="password" name="confirm-senha" placeholder="Confirmar Senha" required />
                        </div>
                        <div className="element-type-user">
                            <div className="element-type-input">
                                <input id="type-user-imput" type="radio" name="user-mode" required />
                                <label htmlFor="type-user-imput">User</label>
                            </div>
                            <div className="element-type-input">
                                <input id="type-adm-imput" type="radio" name="user-mode" required />
                                <label htmlFor="type-adm-imput">Admin</label>
                            </div>
                        </div>
                    </>
                ): null}
                <div className="element-submit-user">
                    <input type="submit" value={value} onClick={handleSubmit}/>
                </div>
            </form>
        </>
    )
}
