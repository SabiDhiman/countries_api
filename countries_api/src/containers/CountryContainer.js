import { useState, useEffect } from "react";
import "../components/CountryDetails";
import CountryDetails from "../components/CountryDetails";
import VisitedCountriesDetails from "../components/VisitedCountriesDetails"

const CountryContainer = () => {

  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountry(data));
  }, []);

  const [visited, setVisited] = useState([]);

  const updateVisitedCountry = (name) => {
    const visitedCountry = country.find(country => country.name.common === name);
    setVisited([...visited, visitedCountry]);
    const newCountries = country.filter(country => country.name.common !== name);
    setCountry([...newCountries]);
}


  return (
  country ?
    <>
      <CountryDetails country={country} updateVisitedCountry={updateVisitedCountry}/>
      <h2 className="heading2"> Visited </h2>
      <VisitedCountriesDetails visited={visited} />
    </>
    :
    <p>Loading country...</p>
  );
};

export default CountryContainer;
