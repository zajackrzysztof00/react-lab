import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";
import 'milligram';

export default function App() {
    const [email, setEmail] = useState('krzysztof@agh.edu.pl');
    const [authenticatedUserName, setauthenticatedUserName] = useState()
    function handleChange(event) {
        setEmail(event.target.value);}
    function onLogin(email) {
        setauthenticatedUserName(email)
    }
    function onLogout(email) {
        setauthenticatedUserName()
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {
                authenticatedUserName
                    ? <UserPanel username={authenticatedUserName} onLogout = {email} />
                    : <LoginForm onLogin={email} />
            }
        </div>
  );
}