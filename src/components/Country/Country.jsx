import { useState } from "react";
import "./Country.css";
import CountryDetail from "../CountryDetail/CountryDetail";
export default function Country({
  country,
  handelVisitedCountry,
  handelVisitedFlags,
}) {
  const { name, flags, population, area, cca3 } = country;
  // console.log(setVisitedCountries);
  const [visited, setVisited] = useState(false);
  return (
    <div className={`country ${visited && "visited"}`}>
      <h3 style={{ color: visited ? "purple" : "white" }}>
        Name: {name?.common}
      </h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => handelVisitedFlags(country.flags.png)}>
        Add Flag
      </button>
      <button onClick={() => handelVisitedCountry(country)}>
        Mark Visited
      </button>
      <button onClick={() => setVisited(!visited)}>
        {visited ? "Visited" : "Going"}
      </button>
      {visited ? " is already visited" : " i want to be visit"}
      <hr />
      <CountryDetail
        country={country}
        handelVisitedCountry={handelVisitedCountry}
        handelVisitedFlags={handelVisitedFlags}
      />
    </div>
  );
}
