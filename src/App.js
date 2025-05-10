import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import LoginForm from "./LoginForm";
import 'milligram';

export default function App() {
    const [email, setEmail] = useState('krzysztof@agh.edu.pl');
    const [authenticatedUserName, setauthenticatedUserName] = useState()
    let message = '';
    function handleChange(event) {
        setEmail(event.target.value);}
    if (email.length < 10) {
        message = "E-mail jest zbyt krótki !!!";
    } else if (email.length >= 10 && email.length <= 30){
        message = "Twój E-mail jest OK";
    } else {
        message = "E-mail jest zbyt długi !!!";
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {!authenticatedUserName && (<div>
                    <h2>Twój e-mail to {email}</h2>
                    <div>{message}</div>
                    <input type="text" value={email} onChange={handleChange}/>
                    <p>
                        <button type="loginButton" onClick={() => {setauthenticatedUserName(email);
                        }
                        }>Wchodzę</button>
                    </p>
                </div>)}
            {authenticatedUserName && (<div id='2'>
                    <h2>Witaj {email}</h2>
                    <button onClick={() => {setauthenticatedUserName();
                    }
                    }>Wyjdź</button>
                </div>)
            }
        </div>
  );
}