import React, { useEffect, useState } from "react";

import './styles.css';

export default function Signin() {

    return (
        <div className="master">
            <h1>Login</h1>
            <p>Novo neste site? 
                <a href="/signup"> Registre-se</a>
            </p>
            <div className="login">
                <form></form>
                <label htmlFor="username">Nome de usuário </label>
                <input type="text" id="username" name="username" required/>
                <label htmlFor="senha">Senha</label>
                <input type="text" id="senha" name="senha" required/>
                <button type="submit" value="Login">Login</button>
            </div>
        </div>
    );
};