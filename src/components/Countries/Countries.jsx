import { useState } from "react";
import { useEffect } from "react";
import Country from "../Country/Country";
import "./Countries.css";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const handelVisitedCountry = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handelVisitedFlags = (flags) => {
    const newVisitedFlags = [...visitedFlags, flags];
    setVisitedFlags(newVisitedFlags);

  }

  return (
    <>
    <h3>Countries</h3>
    {/* display visited country */}
      <div>
        <h5>Visited Countries:{visitedCountries.length}</h5>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.official}</li>
          ))}
        </ul>
      </div>
      <div className="flag-container">
        {
            visitedFlags.map((flag, idx) => <img  key={idx} src={flag} alt="" /> )
        }
      </div>
      {/* display countries */}
      <div className={`country-container`}>
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handelVisitedCountry={handelVisitedCountry}
            handelVisitedFlags  ={handelVisitedFlags}
          />
        ))}
      </div>
    </>
  );
}
