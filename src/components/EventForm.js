import { useEffect, useState } from "react";
import '../index.css';

function EventForm(props) {
  const { events, setEvents } = props;
  const [data, setData] = useState({
    title: "",
    date: "",
    organizer: "",
    price: "",
    time: "",
    location: "",
    description: ""
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/submit-event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if(response.ok) {
      const newEventList = await fetch('http://localhost:5000');
      const data = await newEventList.json();
      setEvents(data);
    } else {
      alert('Something went wrong!');
    }
  }

  return (
    <form className="EventForm" onSubmit={handleSubmit}>
      <input 
        type="text"
        value={data?.title}
        onChange={(e) => {
          setData((prevState) => {
            return ({
              ...prevState,
              title: e.target.value
            });
          })
        }}
        placeholder="Event Title"
      />
      <input 
        type="date"
        value={data?.date}
        onChange={(e) => {
          setData((prevState) => {
            return ({
              ...prevState,
              date: e.target.value
            });
          })
        }}
        placeholder="Event Date"
      />
      <input 
        type="text"
        value={data?.organizer}
        onChange={(e) => {
          setData((prevState) => {
            return ({
              ...prevState,
              organizer: e.target.value
            });
          })
        }}
        placeholder="Event Organizer"
      />
      <input 
        type="number"
        value={data?.price}
        onChange={(e) => {
          setData((prevState) => {
            return ({
              ...prevState,
              price: e.target.value
            });
          })
        }}
        placeholder="Event Price"
      />
      <input 
        type="text"
        value={data?.time}
        onChange={(e) => {
          setData((prevState) => {
            return ({
              ...prevState,
              time: e.target.value
            });
          })
        }}
        placeholder="Event Time"
      />
      <input 
        type="text"
        value={data?.location}
        onChange={(e) => {
          setData((prevState) => {
            return ({
              ...prevState,
              location: e.target.value
            });
          })
        }}
        placeholder="Event Location"
      />
      <input 
        type="text"
        value={data?.description}
        onChange={(e) => {
          setData((prevState) => {
            return ({
              ...prevState,
              description: e.target.value
            });
          })
        }}
        placeholder="Event Description"
      />
      <button type="sumit">Submit</button>
    </form>
  );
}

export default EventForm;