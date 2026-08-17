import EventForm from "./components/EventForm";
import EventContainer from "./components/EventContainer";
import { useState } from "react";

function App() {
  const [events, setEvents] = useState([]);

  return (
    <div className="App">
      <EventForm events={events} setEvents={setEvents} />
      <EventContainer events={events} setEvents={setEvents} />
    </div>
  );
}

export default App;