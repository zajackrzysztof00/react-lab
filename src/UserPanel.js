import {useState} from "react";
import MeetingsPage from "./MeetingsPage";

export default function UserPanel(props) {

    return <div>
        <h2>Witaj {props.username}</h2>
        <button onClick={() => props.onLogout()}>Wyjdź</button>
        <MeetingsPage />
    </div>;
}