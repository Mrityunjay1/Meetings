import React ,{useState,useEffect}from 'react'
import MeetupList from '../Components/meetups/MeetupList'

export default function AllMeetup() {
  const[isLoading,setIsLoading]=useState(true);
  const[LoadedMeetups,setLoadedMeetups]=useState([]);

  useEffect(()=>{
    setIsLoading(true);
    fetch("https://react-meetup-75267-default-rtdb.firebaseio.com/meetups.json").then(response =>{
      return response.json();
    }).then(data=>{
      const meetups=[];
      for(const key in data){
        const meetup ={
          id:key,
          ...data[key]
        };
        meetups.push(meetup);
      }
        setIsLoading(false);
        setLoadedMeetups(meetups);
    });
  },[]);
    
    if (isLoading){
      return (
        <section>
          <p>Loading.....</p>
        </section>
      )
    }
    return (
        <div>
            <h1>AllMeetup</h1>
            <MeetupList meetups={LoadedMeetups} />
        </div>
    )
}
