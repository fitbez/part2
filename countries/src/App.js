import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchedCountries, setSearchedCountries] = useState("");

  const handleSearch = e => {
    setSearchedCountries(e.target.value);
  };

  const filteredCountries = searchedCountries.toUpperCase();
  const countryToShow = countries.filter(
    country => country.name.toUpperCase().indexOf(filteredCountries) > -1
  );
  useEffect(() => {
    console.log("effect");
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      console.log("promise fulfilled");
      setCountries(response.data);
    });
  }, []);
  console.log(countryToShow);
  return (
    <div>
      <div>
        find countries <input onChange={handleSearch} />
      </div>
      <div>
        {countryToShow.length >= 10
          ? "Too many matches, specify another filter"
          : countryToShow.length === 1
          ? countryToShow.map(country => {
              return (
                <div>
                  <h2>{country.name}</h2>

                  <div>
                    <p>capital {country.capital}</p>
                    <p>population {country.population}</p>
                  </div>
                  <div>
                    <h3>languages</h3>
                    <div>
                      {country.languages.map(language => {
                        return <li>{language.name}</li>;
                      })}
                    </div>
                  </div>
                  <div>
                    <img src={country.flag} alt="flag" />
                  </div>
                </div>
              );
            })
          : countryToShow.map(country => {
              return searchedCountries.length ? (
                <li key={country.name}>{country.name}</li>
              ) : (
                <div></div>
              );
            })}
      </div>
    </div>
  );
};

export default App;
