import {use, useState} from "react";
import AddMeetingForm from "./AddMeetingForm"
import MeetingsList from "./MeetingsList";

export default function MeetingsPage({onSubmit}) {
    const [meetings, setMeetings] = useState([{"aaa":"aaa"}])

    function addmeeting(meeting) {
        setMeetings([...meetings, meeting])
    }
    return <div>
        <h2>Spotkania {meetings.length}</h2>
        <AddMeetingForm onSubmit={(meeting) => addmeeting(meeting)}/>
        <MeetingsList meetings={meetings}/>
    </div>
}