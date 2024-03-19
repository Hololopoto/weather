import React, { useEffect, useState } from "react";
import Clear from "./Components/Images/clear.png";
import Clouds from "./Components/Images/cloud.png";
import Drizzle from "./Components/Images/drizzle.png";
import Humidity from "./Components/Images/humidity.png";
import Rain from "./Components/Images/rain.png";
import Snow from "./Components/Images/snow.png";
import Wind from "./Components/Images/wind.png";

const Weather = ({ weatherData }) => {
  const [main, setMain] = useState("");
  console.log(weatherData.weather[0].main);
  const weather = {
    Clear: Clear,
    Clouds: Clouds,
    Drizzle: Drizzle,
    Rain: Rain,
    Snow: Snow,
  };

  useEffect(() => {
    setMain(weatherData.weather[0].main);
    console.log("Mainnn", main);
  }, [weatherData]);
  return (
    <div>
      {weatherData.weather ? (
        <div className="bg-white bg-opacity-20 w-[580px] h-[600px] rounded-md m-auto">
          <div className="flex flex-col items-center align-top gap-4">
            <img
              src={`${weather[weatherData.weather[0].main]}`}
              alt=""
              className=""
            />
            <h1 className="text-white text-8xl">
              {weatherData.main.temp.toFixed(0)}&deg;C
            </h1>
            <h1 className="text-white text-5xl">
              {weatherData.name},{weatherData.sys.country}
            </h1>
          </div>
          <div className="element flex justify-between text-white m-20">
            <div className="datas flex  items-center gap-3 bg-white bg-opacity-20 rounded-3xl px-6 py-2">
              <img src={Humidity} alt="" />
              <div className="data flex flex-col items-center ">
                <h1 className="">{weatherData.main.humidity}%</h1>
                <h1 className="">Humidity</h1>
              </div>
            </div>
            <div className="datas flex  items-center gap-3 bg-white bg-opacity-20 rounded-3xl px-6 py-2">
              <img src={Wind} alt="" />
              <div className="data flex flex-col items-center">
                <h1 className="">{weatherData.wind.speed} Km/h</h1>
                <h1 className="">Wind Speed</h1>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
