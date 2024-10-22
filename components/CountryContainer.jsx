import { useEffect, useState } from "react";
import Country from "./Country";

function CountryContainer() {
  const [countryData, setCountryData] = useState(null);

  async function fetchCountry() {
    try {
      const res = await fetch("https://restcountries.com/v3.1/name/nigeria");
      const data = await res.json();
      console.log(data);
      setCountryData(data[0]);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(function () {
    fetchCountry();
  }, []);

  return (
    <main className="countries-container">
      <Country data={countryData} />
    </main>
  );
}

export default CountryContainer;
