import React, { useState } from "react";
import './styles.css';

export default function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        class User {
            constructor(username, password, email) {
                this.username = username;
                this.email = email;
                this.password = password;
            }
        }

        let user = new User(username, password, email);
        
        var DecoratedUser = function(user) {
            this.user = user;

            this.formatData = function() {
                user.email = user.email.toLowerCase(user.email);
            };
        }

        let decorated = new DecoratedUser(user);
        decorated.formatData();

        registerUser(user);

    }

    const registerUser = async user => {
        const response = await fetch('http://localhost:3333/api/auth/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(user)
        });

        console.log(response);
    }

    return (
        <div className="master">
            <h1>Registre-se</h1>
            <p>Já é um membro? <a href="/signin">Login</a></p>
            <div className="login">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Nome de usuário </label>
                    <input 
                        type="text" 
                        id="username" 
                        value={username}
                        name="username" 
                        onChange={event => setUsername(event.target.value)}
                        required 
                    />
                    <label htmlFor="senha">Senha </label>
                    <input 
                        type="password" 
                        id="senha" 
                        value={password}
                        name="senha" 
                        onChange={event => setPassword(event.target.value)}
                        required 
                    />
                    <label htmlFor="email">E-mail </label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email}
                        name="email" 
                        onChange={event => setEmail(event.target.value)}
                        required 
                    />
                    <button type="submit" value="Login">Registra-se</button>
                </form>
            </div>
        </div>
    );
};