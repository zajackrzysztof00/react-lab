import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";
import 'milligram';

export default function App() {
    const [username, setusername] = useState()

    function login(email) {
        setusername(email)
    }
    function logout() {
        setusername(null)
    }
    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {
                username
                    ? <UserPanel username={username} onLogout = {() => logout()} />
                    : <LoginForm onLogin={(username) => login(username)} />
            }
        </div>
  );
}