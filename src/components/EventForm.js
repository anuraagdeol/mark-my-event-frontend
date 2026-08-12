import { useEffect, useState } from "react";

function EventForm() {
  const [data, setData] = useState({
    title: "",
    date: "",
    organizer: "",
    price: 0,
    time: "",
    location: "",
    description: ""
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("DEBUG:: form submit - final data", data);
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
          type="time"
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
          type="location"
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