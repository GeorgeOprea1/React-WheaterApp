import "./App.css";
import Temperature from "./components/Temperature";
import Highlights from "./components/Highlights";
import { useState, useEffect } from "react";

function App() {
  const [city, setCity] = useState("Bucuresti");
  const [weatherData, setWeatherData] = useState(null);
  const apiURL = `https://api.weatherapi.com/v1/current.json?key=1aaeafd95fe84144a2f132502240902&q=${city}&aqi=no`;
  const [cityInput, setCityInput] = useState("Bucuresti");

  useEffect(() => {
    fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city, apiURL]);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const long = position.coords.longitude;
        const lat = position.coords.latitude;
        const url = `https://api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}`;

        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setCity(data.city);
            setCityInput(data.city);
          });
      });
    }
  }

  return (
    <>
      <div className="bg-slate-800 h-screen flex justify-center items-center">
        <div className="w-full sm:w-[80%] h-[100%] sm:h-[70%] flex flex-col sm:flex-row justify-start items-start overflow-y-auto">
          <div className="w-full sm:w-[50%] h-[100%]">
            {weatherData && (
              <Temperature
                getLocation={getLocation}
                setCity={setCity}
                setCityInput={setCityInput}
                cityInput={cityInput}
                stats={{
                  temp: weatherData.current.temp_c,
                  temp_f: weatherData.current.temp_f,
                  condition: weatherData.current.condition.text,
                  isDay: weatherData.current.is_day,
                  location: weatherData.location.name,
                  time: weatherData.location.localtime,
                }}
              />
            )}
          </div>

          <div
            className="w-full sm:w-[50%] h-[100%] p-10 grid grid-cols-2  
           gap-6"
          >
            <h1 className="w-full text-slate-200 text-center text-2xl col-span-2 pt-4">
              Today&apos;s Highlights
            </h1>
            {weatherData && (
              <>
                <Highlights
                  stats={{
                    title: "Wind Status",
                    value: weatherData.current.wind_mph,
                    unit: "mph",
                    direction: weatherData.current.wind_dir,
                  }}
                />
                <Highlights
                  stats={{
                    title: "Humidity",
                    value: weatherData.current.humidity,
                    unit: "%",
                  }}
                />
                <Highlights
                  stats={{
                    title: "Visibility",
                    value: weatherData.current.vis_miles,
                    unit: "miles",
                  }}
                />
                <Highlights
                  stats={{
                    title: "Air Pressure",
                    value: weatherData.current.pressure_mb,
                    unit: "mb",
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
