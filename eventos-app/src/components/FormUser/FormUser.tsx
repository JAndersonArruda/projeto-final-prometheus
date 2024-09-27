// import React from 'react'

import { useNavigate } from "react-router-dom"
import "./formUser.css"

import { login, register} from "../../service/authenticationAPI.ts";
import * as React from "react";

interface FormUserProps {
    modo: string,
    value: string 
}

export default function FormUser({ modo, value }: FormUserProps) {
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (value === "Entrar") {
            const email = document.querySelector<HTMLInputElement>("#email-imput");
            const senha = document.querySelector<HTMLInputElement>("#senha-imput");

            if (email?.value && senha?.value) {
                try {
                    const response = await login(email.value, senha.value);
                    console.log(response);
                    navigate("/events");
                } catch (error: any) {
                    console.error("Error details:", error);
                    alert(error.message || "Erro ao fazer login");
                }
            }
        }
        else if (value === "Salvar") {
            const userName = document.querySelector<HTMLInputElement>("#username-imput");
            const email = document.querySelector<HTMLInputElement>("#email-imput");
            const senha = document.querySelector<HTMLInputElement>("#senha-imput");
            const confirm  = document.querySelector<HTMLInputElement>("#confirm-senha-imput");
            const inputFoto = document.querySelector<HTMLInputElement>("#file-input");

            const opcoesUsuario = document.querySelector<HTMLInputElement>('input[name="user-mode"]:checked');
            
            let tipoUsuario = "";
            if (opcoesUsuario) {
                tipoUsuario = opcoesUsuario.id === "type-adm-imput" ? "ADMIN" : 
                opcoesUsuario.id === "type-user-imput" ? "USER" : "";
            }

            if (userName?.value && email?.value && senha?.value && confirm?.value && inputFoto?.files?.length && tipoUsuario) {
                if (senha.value !== confirm.value) {
                    alert("As senhas não coincidem");
                    return;
                }
                
                const foto = inputFoto.files[0];
                const formData = new FormData();
                formData.append('username', userName.value);
                formData.append('email', email.value);
                formData.append('password', senha.value);
            
                try {
                    const response = await register(userName.value, email.value, senha.value, tipoUsuario, foto);
                    console.log(response);
                    navigate("/account/login");
                } catch (error: any) {
                    alert(error.response?.data || "Erro ao registrar usuario.");
                }
            }
            else{
                alert("Por favor, preencha todos os campos");
            }
        }
    }

    return (
        <>
            <form action="" className="form-user">
                {modo === "login" ? (
                    <>
                        <div className="element-user">
                            <label htmlFor="email-imput">E-mail</label>
                            <input id="email-imput" type="email" name="email" placeholder="E-mail" required />
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
                        <div className="element-user">
                            <label htmlFor="file-input">Foto de perfil</label>
                            <input id="file-input" type="file" name="file" accept="image/*" required />
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
