import React from "react";
import axios from "axios";
import WeatClear from "./Components/Images/clear.png";
import WeatCloud from "./Components/Images/cloud.png";
import WeatDrizzle from "./Components/Images/drizzle.png";
import WeatHumidity from "./Components/Images/humidity.png";
import WeatRain from "./Components/Images/rain.png";
import Search from "./Components/Images/search.png";
import WeatSnow from "./Components/Images/snow.png";
import WeatWind from "./Components/Images/wind.png";
const WeatherApp = () => {
  let api_key = "d02c70fe49bf4a70b2f024a6aba89a19";
  return (
    <div className=" w-[607px] h-[829px] m-auto mt-20 rounded-md  bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="flex items-center justify-center gap-5">
        <input
          type="text"
          className=" rounded-lg p-4 my-10 bg-slate-300"
          placeholder="Name a City"
        />
        <img
          src={Search}
          alt=""
          className="flex bg-slate-300 rounded-full p-4"
        />
      </div>
      <div className="bg-white bg-opacity-20 w-[580px] h-[600px] rounded-md m-auto">
        <div className="flex flex-col items-center align-top">
          <img src={WeatCloud} alt="" className="" />
          <h1 className="text-white text-4xl">32&deg;C</h1>
          <h1 className="text-white text-4xl">London</h1>
        </div>
        <div className="element flex justify-between text-white m-20">
          <div className="datas">
            <img src={WeatHumidity} alt="" />
            <div className="data">
              <h1 className="">65%</h1>
              <h1 className="">Humidity</h1>
            </div>
          </div>
          <div className="datas">
            <img src={WeatWind} alt="" />
            <div className="data">
              <h1 className="">18km/h</h1>
              <h1 className="">Wind Speed</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
// https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=d02c70fe49bf4a70b2f024a6aba89a19
