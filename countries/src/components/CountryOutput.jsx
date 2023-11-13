import React, { useEffect, useState } from "react";
import weatherService from "../services/weather";

const CountryOutput = ({ countries, setCountry }) => {
  console.log("render CountryList");
  console.log(countries.length, " countries");

  if (countries.length === 1) {
    return <Country country={countries[0]} />;
  } else if (countries.length <= 10)
    return <CountryList countries={countries} setCountry={setCountry} />;
  else return <div> Too many matches, specify another filter</div>;
};

const CountryList = ({ countries, setCountry }) => {
  if (!countries) return null;
  return (
    <div>
      {countries.map((c) => (
        <div key={c.cca3}>
          {c.name.common}{" "}
          <button onClick={() => setCountry(c.name.common)}>show</button>
        </div>
      ))}
    </div>
  );
};

const Country = ({ country }) => {
  const [weather, setWeather] = useState();

  useEffect(() => {
    weatherService
      .getWeather(country.latlng[0], country.latlng[1])
      .then((initWeather) => {
        console.log(initWeather);
        setWeather(initWeather);
      });
  }, []);

  if (!weather) return "";

  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>capital {country.capital.map((c) => c)}</div>
      <div> area {country.area}</div>
      <h2>languages</h2>
      <ul>
        {Object.values(country.languages).map((l) => (
          <li>{l}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />

      <h1>Weather in {country.name.common}</h1>
      <div>
        temperature {weather.current.temperature_2m}{" "}
        {weather.current_units.temperature_2m}
      </div>
      <div>
        wind {weather.current.wind_speed_10m}{" "}
        {weather.current_units.wind_speed_10m}
      </div>
    </div>
  );
};

export default CountryOutput;
