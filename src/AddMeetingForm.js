import {use, useState} from "react";

export default function AddMeetingForm({onSubmit}) {
    const [title, settitle] = useState();
    const [description, setdescription] = useState()

    let addbutton = <button type="button">Dodaj</button>

    function submit(event) {
        event.preventDefault();
        onSubmit({title, description});
    }
    return <div>
        <form onSubmit={submit}>
            <h3>Dodaj Spotkanie</h3>
            <label>Tytuł:</label>
            <input type="text" value={title}
                   onChange={(e) => settitle(e.target.value)}/>
            <label>Opis:</label>
            <textarea value={description}
                   onChange={(e) => setdescription(e.target.value)}/>
            <div>{addbutton}</div>
        </form>
    </div>;
}