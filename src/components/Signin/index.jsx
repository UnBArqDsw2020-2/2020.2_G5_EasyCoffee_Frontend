import React, { useState } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
import { useHistory } from "react-router-dom";

import './styles.css';

export default function Signin() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    let history = useHistory();

    const handleSubmit = async event => {
        event.preventDefault();


        const data = {
            username,
            password
        }

        console.log(data);

        signin(data);

        history.push("/");



    }

    const signin = async data => {
        /*fetch('http://localhost:3333/api/auth/signin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        }).then(response => console.log(response.json()))
        .catch(error => console.log(error));*/

        const response = await axios.post('http://localhost:3333/api/auth/signin', data);
        console.log(response.data);
        
        const token = await jwt.decode(response.data.accessToken);

        console.log(token);

        localStorage.setItem('@EasyCoffee:token', JSON.stringify(token));


    }

    return (
        <div className="master">
            <h1>Login</h1>
            <p>Novo neste site? 
                <a href="/signup"> Registre-se</a>
            </p>
            <div className="login">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Nome de usuário </label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                        required/>
                    <label htmlFor="senha">Senha</label>
                    <input 
                        type="text" 
                        id="senha" 
                        name="senha" 
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        required/>
                    <button type="submit" value="Login">Login</button>
                </form>
            </div>
        </div>
    );
};