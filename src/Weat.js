import React from "react";
import Clear from "./Components/Images/clear.png";
import Clouds from "./Components/Images/cloud.png";
import Drizzle from "./Components/Images/drizzle.png";
import Humidity from "./Components/Images/humidity.png";
import Rain from "./Components/Images/rain.png";
import Snow from "./Components/Images/snow.png";
import Wind from "./Components/Images/wind.png";

const Weat = ({ weatherData, day }) => {
  const weather = {
    Clear: Clear,
    Clouds: Clouds,
    Drizzle: Drizzle,
    Rain: Rain,
    Snow: Snow,
  };

  return (
    <div className="m-auto">
      {weatherData.list ? (
        <div className="flex flex-col items-center justify-center mt-2 ">
          <div className="flex flex-col items-center align-top">
            <h1 className="text-white text-sm">
              {weatherData.list[day].dt_txt
                .split(/(?:[-\s]+)/, 3)
                .reverse()
                .join(".")}
            </h1>

            <img
              src={`${weather[weatherData.list[day].weather[0].main]}`}
              alt=""
              className="h-[80px]"
            />
            <h1 className="text-white text-lg">
              {weatherData.list[day].main.temp.toFixed(0)}&deg;C
            </h1>
            <h1 className="text-white text-lg">
              {weatherData.city.name} | {weatherData.city.country}
            </h1>
            <h1 className="text-white text-lg">
              {weatherData.list[day].weather[0].description
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
                <h1 className="">{weatherData.list[day].main.humidity}%</h1>
                <h1 className="">Humidity</h1>
              </div>
            </div>
            <div className="datas flex  items-center gap-3 bg-white bg-opacity-30 rounded-3xl px-6 py-2">
              <img src={Wind} alt="" className="h-[30px]" />
              <div className="data flex flex-col text-sm items-center">
                <h1 className="">{weatherData.list[day].wind.speed} Km/h</h1>
                <h1 className="">Wind Speed</h1>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Weat;
