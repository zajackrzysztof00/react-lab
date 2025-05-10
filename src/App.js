import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import LoginForm from "./LoginForm";
import 'milligram';

export default function App() {
    const [email, setEmail] = useState('krzysztof@agh.edu.pl');
    let message = '1';
    function handleChange(event) {
        setEmail(event.target.value);}
    if (email.length < 10) {
        message = "E-mail jest zbyt krótki !!!";
    } else if (email.length >= 10 && email.length <= 30){
        message = "Twój E-mail jest OK";
    } else {
        message = "E-mail jest zbyt długi !!!";
    }

    function loginClick(event) {
        alert(email)
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój e-mail to {email}</h2>
            <div>{message}</div>
            <input type="text" onChange={handleChange}/>
            <p>
                <button type="loginButton" onClick={loginClick}>
                    Zaloguj
                </button>
            </p>
        </div>
  );
}