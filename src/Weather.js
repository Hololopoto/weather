import React from "react";
import WeatClear from "./Components/Images/clear.png";
import WeatCloud from "./Components/Images/cloud.png";
import WeatDrizzle from "./Components/Images/drizzle.png";
import WeatHumidity from "./Components/Images/humidity.png";
import WeatRain from "./Components/Images/rain.png";
import WeatSnow from "./Components/Images/snow.png";
import WeatWind from "./Components/Images/wind.png";

const Weather = ({ weatherData }) => {
  console.log(weatherData);
  return (
    <div>
      <div className="bg-white bg-opacity-20 w-[580px] h-[600px] rounded-md m-auto">
        <div className="flex flex-col items-center align-top gap-4">
          <img src={WeatCloud} alt="" className="" />
          <h1 className="text-white text-8xl">32&deg;C</h1>
          <h1 className="text-white text-5xl">Samsun</h1>
        </div>
        <div className="element flex justify-between text-white m-20">
          <div className="datas flex  items-center gap-3 bg-white bg-opacity-20 rounded-3xl px-6 py-2">
            <img src={WeatHumidity} alt="" />
            <div className="data flex flex-col items-center ">
              <h1 className="">65%</h1>
              <h1 className="">Humidity</h1>
            </div>
          </div>
          <div className="datas flex  items-center gap-3 bg-white bg-opacity-20 rounded-3xl px-6 py-2">
            <img src={WeatWind} alt="" />
            <div className="data flex flex-col items-center">
              <h1 className="">18km/h</h1>
              <h1 className="">Wind Speed</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
