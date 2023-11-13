import React from "react";

const CountryForm = ({ country, handleChange }) => (
  <div>
    find countries <input value={country} onChange={handleChange} />
  </div>
);

export default CountryForm;
