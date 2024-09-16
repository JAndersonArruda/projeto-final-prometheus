
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./account.css"

import FormUser from "../../components/FormUser/FormUser";

export default function Account() {
    const location = useLocation();
    const [action, setAction] = useState("login");

    useEffect(() => {
        if (location.pathname === "/account/login") setAction("login");
        else if (location.pathname === "/account/register") setAction("cadastro");
    }, [location]);

    return (
        <>
            <div className="container-account">
                <div className="container-title">
                    <h2>Eventos</h2>
                </div>
                <FormUser 
                    modo={action}
                    value={action === "login" ? "Entrar" : "Salvar"}
                />
                <div className="container-link">
                    {action === "login" ? (
                        <>
                            <p>Não possui uma conta?</p><Link to={"/account/register"}>Cadastre-se...</Link>
                        </>
                    ) : action === "cadastro" ? (
                        <>
                            <p>Já possui uma conta.</p><Link to={"/account/login"}>Login...</Link>
                        </>
                    ) : null}
                </div>
            </div>
        </>
    )
}
