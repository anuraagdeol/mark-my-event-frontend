import { useEffect, useState } from "react";

function EventForm() {
  const [data, setData] = useState({
    title: ""
  });

  useEffect(() => {
    console.log("DEBUG:: useEffect hook called. Dependency array = []. Value of \"data\" state variable is =", data);
  }, []);
  useEffect(() => {
    console.log("DEBUG:: useEffect hook called. Dependency array = [data]. Value of \"data\" state variable is =", data);
  }, [data]);

  const handleChange = (e) => {
    setData((prevState) => {
      return ({
        ...prevState,
        name: e.target.value
      });
    });
  }

  return (
    <form className="EventForm">
        <input 
          type="text"
          value={data?.title}
          onChange={handleChange}
          placeholder="Event Title"
        />
    </form>
  );
}

export default EventForm;