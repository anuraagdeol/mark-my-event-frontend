import { useEffect, useState } from "react";

function EventContainer(props) {
  const { events, setEvents } = props;

  const getEvents = async () => {
    const response = await fetch('http://localhost:5000');
    const data = await response.json();
    setEvents(data);
  }

  useEffect(() => {
    getEvents();
  }, []);

  const showDate = (date) => {
    const d = new Date(date);
    // console.log('DEBUG:: date-', events[0]?.date);
    return d.toDateString();
  }

  return (
    <div className="EventContainer">
        {events ? 
        events?.map((event, index) => {
          return (
            <div key={event?._id ?? index}>
              Title: {event.title}<br/>
              Description: {event.description}<br/>
              Date: {showDate(event.date)}<br/>
              Organizer: {event.organizer}<br/>
              Price: {event.price>0 ? event.price : "Free :D"}<br/>
              Time: {event.time}<br/>
              Location: {event.location}<br/>
              <hr/>
            </div>
          );
        })
        : <span>No Events</span>}
    </div>
  );
}

export default EventContainer;