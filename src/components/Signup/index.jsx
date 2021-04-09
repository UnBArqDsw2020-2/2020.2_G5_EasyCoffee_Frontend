import React, { useState, useEffect } from "react";
import './styles.css';

export default function Signup() {

    return (
        <div class="master">
            <h1>Registre-se</h1>
            <p>Já é um membro? <a href="/signin">Login</a></p>
            <div class="login">
                <form></form>
                <label htmlFor="username">Nome de usuário </label>
                <input type="text" id="username" name="username" required />
                <label htmlFor="senha">Senha </label>
                <input type="text" id="senha" name="senha" required />
                <label htmlFor="email">E-mail </label>
                <input type="text" id="email" name="email" required/>
                <button type="submit" value="Login">Registra-se</button>
            </div>
        </div>
    );
};