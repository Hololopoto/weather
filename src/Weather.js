import React, { useEffect, useState } from "react";
import Clear from "./Components/Images/clear.png";
import Clouds from "./Components/Images/cloud.png";
import Drizzle from "./Components/Images/drizzle.png";
import Humidity from "./Components/Images/humidity.png";
import Rain from "./Components/Images/rain.png";
import Snow from "./Components/Images/snow.png";
import Wind from "./Components/Images/wind.png";

const Weather = ({ weatherData }) => {
  // const [main, setMain] = useState("");
  const weather = {
    Clear: Clear,
    Clouds: Clouds,
    Drizzle: Drizzle,
    Rain: Rain,
    Snow: Snow,
  };
  // console.log(weatherData.city.country);
  // useEffect(() => {
  //   setMain(weatherData.weather[0].main);
  //   console.log("Mainnn", main);
  // }, [weatherData]);
  return (
    <div>
      {weatherData.list ? (
        <div className="bg-white bg-opacity-20 w-[580px] h-[465px] rounded-md m-auto">
          <div className="flex flex-col items-center gap-[4px] align-top">
            <img
              src={`${weather[weatherData.list[0].weather[0].main]}`}
              alt=""
              className="h-[180px]"
            />
            <h1 className="text-white text-6xl">
              {weatherData.list[0].main.temp.toFixed(0)}&deg;C
            </h1>
            <h1 className="text-white text-4xl">
              {weatherData.city.name} | {weatherData.city.country}
            </h1>
            <h1 className="text-white text-lg">
              {weatherData.list[0].weather[0].description
                .split(" ")
                .map((word, index) =>
                  index === 1
                    ? word.charAt(0).toUpperCase() + word.slice(1)
                    : word.charAt(0).toUpperCase() + word.slice(1)
                )
                .join(" ")}
            </h1>

            <h1 className="text-white text-xl">
              {weatherData.list[0].dt_txt
                .split(/(?:[-\s]+)/, 3)
                .reverse()
                .join(".")}
            </h1>
          </div>
          <div className="element flex justify-between text-white mx-20 mb-10 mt-5">
            <div className="datas flex  items-center gap-3 bg-white bg-opacity-30 rounded-3xl px-6 py-2">
              <img src={Humidity} alt="" />
              <div className="data flex flex-col items-center ">
                <h1 className="">{weatherData.list[0].main.humidity}%</h1>
                <h1 className="">Humidity</h1>
              </div>
            </div>
            <div className="datas flex  items-center gap-3 bg-white bg-opacity-30 rounded-3xl px-6 py-2">
              <img src={Wind} alt="" />
              <div className="data flex flex-col items-center">
                <h1 className="">{weatherData.list[0].wind.speed} Km/h</h1>
                <h1 className="">Wind Speed</h1>
              </div>
            </div>
          </div>
          {/* 3 Günlük Tahmin */}
          <div className="bg-white bg-opacity-20 w-[580px] h-[325px] rounded-md flex m-auto">
            <div className="flex flex-col items-center justify-center mt-7 ">
              <div className="flex flex-col items-center align-top">
                <h1 className="text-white text-sm">
                  {weatherData.list[8].dt_txt
                    .split(/(?:[-\s]+)/, 3)
                    .reverse()
                    .join(".")}
                </h1>

                <img
                  src={`${weather[weatherData.list[8].weather[0].main]}`}
                  alt=""
                  className="h-[80px]"
                />
                <h1 className="text-white text-lg">
                  {weatherData.list[8].main.temp.toFixed(0)}&deg;C
                </h1>
                <h1 className="text-white text-lg">
                  {weatherData.city.name} | {weatherData.city.country}
                </h1>
                <h1 className="text-white text-lg">
                  {weatherData.list[8].weather[0].description
                    .split(" ")
                    .map((word, index) =>
                      index === 1
                        ? word.charAt(0).toUpperCase() + word.slice(1)
                        : word.charAt(0).toUpperCase() + word.slice(1)
                    )
                    .join(" ")}
                </h1>
              </div>
              <div className="element flex flex-col gap-3 text-white mx-10 mb-10">
                <div className="datas flex  items-center gap-3 bg-white bg-opacity-30 rounded-3xl px-6 py-2">
                  <img src={Humidity} alt="" className="h-[30px]" />
                  <div className="data flex flex-col text-sm items-center ">
                    <h1 className="">{weatherData.list[8].main.humidity}%</h1>
                    <h1 className="">Humidity</h1>
                  </div>
                </div>
                <div className="datas flex  items-center gap-3 bg-white bg-opacity-30 rounded-3xl px-6 py-2">
                  <img src={Wind} alt="" className="h-[30px]" />
                  <div className="data flex flex-col text-sm items-center">
                    <h1 className="">{weatherData.list[8].wind.speed} Km/h</h1>
                    <h1 className="">Wind Speed</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* 2.gün */}
            <div className="flex flex-col items-center justify-center mt-7 ">
              <div className="flex flex-col items-center align-top">
                <h1 className="text-white text-sm">
                  {weatherData.list[16].dt_txt
                    .split(/(?:[-\s]+)/, 3)
                    .reverse()
                    .join(".")}
                </h1>

                <img
                  src={`${weather[weatherData.list[16].weather[0].main]}`}
                  alt=""
                  className="h-[80px]"
                />
                <h1 className="text-white text-lg">
                  {weatherData.list[16].main.temp.toFixed(0)}&deg;C
                </h1>
                <h1 className="text-white text-lg">
                  {weatherData.city.name} | {weatherData.city.country}
                </h1>
                <h1 className="text-white text-lg">
                  {weatherData.list[16].weather[0].description
                    .split(" ")
                    .map((word, index) =>
                      index === 1
                        ? word.charAt(0).toUpperCase() + word.slice(1)
                        : word.charAt(0).toUpperCase() + word.slice(1)
                    )
                    .join(" ")}
                </h1>
              </div>
              <div className="element flex flex-col gap-3 text-white mx-20 mb-10">
                <div className="datas flex  items-center gap-3 bg-white bg-opacity-30 rounded-3xl px-6 py-2">
                  <img src={Humidity} alt="" className="h-[30px]" />
                  <div className="data flex flex-col text-sm items-center ">
                    <h1 className="">{weatherData.list[16].main.humidity}%</h1>
                    <h1 className="">Humidity</h1>
                  </div>
                </div>
                <div className="datas flex  items-center gap-3 bg-white bg-opacity-30 rounded-3xl px-6 py-2">
                  <img src={Wind} alt="" className="h-[30px]" />
                  <div className="data flex flex-col text-sm items-center">
                    <h1 className="">{weatherData.list[16].wind.speed} Km/h</h1>
                    <h1 className="">Wind Speed</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
