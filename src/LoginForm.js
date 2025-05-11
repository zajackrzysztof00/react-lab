import {useState} from "react";

export default function LoginForm(props) {
    const [email, setEmail] = useState('');
    let message = '';
    let enterbutton = '';

    if (email.length < 10) {
        message = "E-mail jest zbyt krótki !!!";
    } else if (email.length >= 10 && email.length <= 30){
        message = "Twój E-mail jest OK";
        enterbutton =<button type="button" onClick={() => props.onLogin(email)}>Wchodzę</button>
    } else {
        message = "E-mail jest zbyt długi !!!";
    }
    function submit(event) {
        event.preventDefault();
        props.onLogin(email);
    }
    return <form onSubmit={submit}>
        <div>
            <label>Zaloguj się e-mailem</label>
            <div>{message}</div>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <div>{enterbutton}</div>
        </div>;
    </form>
}