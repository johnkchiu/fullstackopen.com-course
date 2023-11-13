import React from "react";

const CountryOutput = ({ countries }) => {
  console.log("render CountryList");
  console.log(countries.length, " countries");

  if (countries.length === 1) {
    return <Country country={countries[0]} />;
  } else if (countries.length <= 10)
    return <CountryList countries={countries} />;
  else return <div> Too many matches, specify another filter</div>;
};

const CountryList = ({ countries }) => {
  if (!countries) return null;
  return (
    <div>
      {countries.map((c) => (
        <div key={c.cca3}>{c.name.common}</div>
      ))}
    </div>
  );
};

const Country = ({ country }) => (
  <div>
    <h1>{country.name.common}</h1>
    <div>capital {country.capital.map((c) => c)}</div>
    <div> area {country.area}</div>
    <h2>languages</h2>
    <ul>{Object.values(country.languages).map((l) => <li>{l}</li>)}</ul>
    <img src={country.flags.png} alt={country.flags.alt} />
  </div>
);

export default CountryOutput;
