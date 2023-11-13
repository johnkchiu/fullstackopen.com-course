import React, { useEffect, useState } from "react";
import CountryForm from "./components/CountryForm";
import CountryOutput from "./components/CountryOutput";
import countriesService from "./services/countries";

const App = () => {
  const [found, setFound] = useState([]);
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    countriesService.getAll().then((initCountries) => {
      setCountries(initCountries);
    });
  }, []);

  const handleChange = (event) => {
    // setCountry(event.target.value);
    console.log(event.target.value);
    setFound(
      countries.filter((c) =>
        c.name.common.toLowerCase().includes(event.target.value)
      )
    );
  };

  console.log("render App");
  return (
    <div>
      <CountryForm handleChange={handleChange} />
      <CountryOutput countries={found} />
    </div>
  );
};

export default App;
