import React from 'react'
import NewMeetupForm from '../Components/meetups/NewMeetupForm'
import {useHistory} from 'react-router-dom'
export default function Favorites() {
    const history=useHistory();
    function addMeetupHandler(meetupData){
        fetch("https://react-meetup-75267-default-rtdb.firebaseio.com/meetups.json",{method:'POST', body:JSON.stringify(meetupData), headers:{'Content-Type':'application/json'}
    }).then(()=>{
        history.replace('/');
    })
    }
    return (
        <div>
            <h1>New meetups</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </div>
    )
}
