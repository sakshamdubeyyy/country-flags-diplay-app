import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [countries, setcountries] = useState([]);

  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => setcountries(data))
    .catch((error) => console.error("Error fetching data:", error))
  },[]);

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  }

  const cardStyle ={
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "200px"
  }

  const flagStyle ={
    width: "100px",
    height: "100px"
  }

  return (
    <div style={containerStyle}>
      {countries.map((country) => (
        <div key={country.cca3} style={cardStyle}>
          <img
            src={country.flags.png}
            alt={country.flags.alt}
            style={flagStyle}
          />
          <h2>{country.name.common}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
