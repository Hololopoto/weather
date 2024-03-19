import React, { useState } from "react";
import axios from "axios";
import Search from "./Components/Images/search.png";
import Weather from "./Weather";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const api_key = "d02c70fe49bf4a70b2f024a6aba89a19";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${api_key}`;
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

  return (
    <div className=" w-[607px] h-[829px] m-auto mt-20 rounded-md  bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="flex items-center justify-center gap-5">
        <input
          type="text"
          className=" city rounded-lg p-4 my-10 bg-white"
          placeholder="Name a City"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDownCapture={searchLocation}
        />
        <div className="">
          <img
            src={Search}
            alt=""
            className="flex bg-slate-300 rounded-full p-4"
          />
        </div>
      </div>
      <Weather weatherData={data} />
    </div>
  );
}

export default App;
