import React, { useState } from "react";
import axios from "axios";
import Search from "./Components/Images/search.png";
import Weather from "./Weather";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const api_key = "d02c70fe49bf4a70b2f024a6aba89a19";
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${api_key}`;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${api_key}`;
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      if (location !== "") {
        axios.get(url).then((response) => {
          setData(response.data);
          console.log(response.data);
        });
        setLocation("");
      }
    }
  };
  const searchClickLocation = () => {
    if (location !== "") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className=" w-[607px] h-[880px] m-auto mt-1 rounded-md  bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="flex items-center animate-pulse focus-within:animate-none  justify-center">
        <input
          type="text"
          className=" city shadow-2xl placeholder:text-gray-500 focus:outline-none rounded-l-lg p-4 my-4 bg-white"
          placeholder="Name a City"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDownCapture={searchLocation}
        />
        <img
          src={Search}
          alt=""
          className="flex bg-white rounded-r-full cursor-pointer p-[17.5px]"
          onClick={searchClickLocation}
        />
      </div>
      <Weather weatherData={data} />
    </div>
  );
}

export default App;
