import React, { useState, useEffect } from "react";
import "./App.css";
import Weather from "./components/Weather";
import axios from "axios";

const App = props => {
  const [countries, setCountries] = useState([]);
  const [searchedCountries, setSearchedCountries] = useState("");

  const handleSearch = e => {
    setSearchedCountries(e.target.value);
  };

  const filteredCountries = searchedCountries.toUpperCase();
  const countryToShow = countries.filter(
    country => country.name.toUpperCase().indexOf(filteredCountries) > -1
  );

  console.log(countryToShow);
  useEffect(() => {
    console.log("effect");
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      console.log("promise fulfilled");
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      <div>
        find countries <input onChange={handleSearch} />
      </div>
      <div>
        {countryToShow.length >= 250
          ? "Please enter a country to know about..."
          : countryToShow.length >= 10
          ? "Too many matches, specify another filter"
          : countryToShow.length === 1
          ? countryToShow.map(country => {
              return (
                <div key={country.name}>
                  <h2>{country.name}</h2>

                  <div>
                    <p>capital {country.capital}</p>
                    <p>population {country.population}</p>
                  </div>
                  <div>
                    <h3>languages</h3>
                    <div>
                      {country.languages.map(language => {
                        return <li key={language.name}>{language.name}</li>;
                      })}
                    </div>
                  </div>
                  <div>
                    <img src={country.flag} alt="flag" />
                  </div>
                  <div>
                    <h3>Weather in {country.name}</h3>
                  </div>
                  <div>
                    <Weather countryToShow={countryToShow[0].name} />
                  </div>
                </div>
              );
            })
          : countryToShow.map(country => {
              return searchedCountries.length ? (
                <li key={country.name}>
                  {country.name}
                  <button
                    onClick={() => {
                      setSearchedCountries(country.name);
                      console.log(country.name);
                    }}
                  >
                    show
                  </button>
                </li>
              ) : (
                <div></div>
              );
            })}
      </div>
    </div>
  );
};

export default App;
