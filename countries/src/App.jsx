import React, { useEffect, useState } from "react";
import CountryForm from "./components/CountryForm";
import CountryOutput from "./components/CountryOutput";
import countriesService from "./services/countries";

const App = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    countriesService.getAll().then((initCountries) => {
      setCountries(initCountries);
    });
  }, []);

  const handleChange = (event) => {
    console.log(event.target.value);
    setCountry(event.target.value);
  };

  let filterCountries = countries.filter((c) =>
    c.name.common.toLowerCase().includes(country.toLocaleLowerCase())
  );

  console.log("render App");
  return (
    <div>
      <CountryForm country={country} handleChange={handleChange} />
      <CountryOutput countries={filterCountries} setCountry={setCountry} />
    </div>
  );
};

export default App;
