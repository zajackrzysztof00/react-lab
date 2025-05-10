import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import LoginForm from "./LoginForm";

function App() {
    const [email, setEmail] = useState('krzysztof@agh.edu.pl');

    function handleChange(event) {
        setEmail(event.target.value);
    }
    function handleClick(event) {
        setEmail(event.target.value);
    }
    function loginClick(event) {
        alert(email)
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój e-mail to {email}</h2>
            <input type="text" value={email} onChange={handleChange}/>
            <p>
                <button type="loginButton" onClick={loginClick}>Zaloguj</button>
            </p>
        </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo"/>
    //     <p>
    //       {/*Edit <code>src/App.js</code> and save to reload.*/}
        // </p>
    //     {/*<a*/}
    //     {/*  className="App-link"*/}
    //     {/*  href="https://reactjs.org"*/}
    //     {/*  target="_blank"*/}
    //     {/*  rel="noopener noreferrer"*/}
    //     {/*>*/}
    //     {/*  Learn React*/}
    //     {/*</a>*/}
    // {/*  </header>*/}

    // {/*</div>*/}
  );
}

export default App;
