import {useState} from "react";

export default function UserPanel(props) {
    const [email, setEmail] = useState('');

    return <div>
        <h2>Witaj {email}</h2>
        <button onClick={() => props.onLogout(email)}
        >Wyjdź</button>
    </div>;
}