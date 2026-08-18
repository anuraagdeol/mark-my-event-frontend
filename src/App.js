import EventForm from "./components/EventForm";
import EventContainer from "./components/EventContainer";
import { useState } from "react";

function App() {
  const [events, setEvents] = useState([]);

  return (
    <div className="App">
      <h1 className="AppHeading">Mark my event</h1>
      <EventForm events={events} setEvents={setEvents} />
      <EventContainer events={events} setEvents={setEvents} />
    </div>
  );
}

export default App;