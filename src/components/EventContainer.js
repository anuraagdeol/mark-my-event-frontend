import { useEffect, useState } from "react";
import '../index.css';

function EventContainer(props) {
  const { events, setEvents } = props;

  const getEvents = async () => {
    const response = await fetch('http://localhost:5000');

    if(response.ok) {
      const data = await response.json();
      setEvents(data);
    } else {
      setEvents([]);
      alert('Something went wrong!');
    }
  }

  useEffect(() => {
    getEvents();
  }, []);

  const showDate = (date) => {
    const d = new Date(date);
    return d.toDateString();
  }

  const handleDelete = async (eventId) => {
    if(eventId) {
      const response = await fetch(`http://localhost:5000/delete-event/${eventId}`, {
        method: 'DELETE',
      });
      console.log("DEBUG:: Delete response-->", response);
      if(response.ok) {
        alert("Success! Event deleted");
        getEvents();
      } else {
        alert("Error! Something went wrong");
      }
    } else {
      alert("Error: Event ID not found!");
    }
  }

  return (
    <div className="EventContainer">
        {events ? 
        events?.map((event, index) => {
          return (
            <div key={event?._id ?? index}>
              <div>
                Title: {event.title}<br/>
                Description: {event.description}<br/>
                Date: {showDate(event.date)}<br/>
                Organizer: {event.organizer}<br/>
                Price: {event.price>0 ? event.price : "Free :D"}<br/>
                Time: {event.time}<br/>
                Location: {event.location}<br/>
                _id: {event?._id}
              </div>
              <button key={event} onClick={() => handleDelete(event?._id)}>Delete</button>
              <hr/>
            </div>
          );
        })
        : <span>No Events</span>}
    </div>
  );
}

export default EventContainer;