import { useState } from "react";
import "./filters.css"
function Filters({setFilters}){
  const handleSearch = ()=>{
    let city = document.getElementById("city-input").value;
    let checkIn = document.getElementById("check-in-input").value;
    let checkOut = document.getElementById("check-out-input").value;
    let persons = document.getElementById("persons-input").value;
    let minPrice = document.getElementById("min-price-input").value;
    let maxPrice = document.getElementById("max-price-input").value;
    setFilters({
      "city" : city,
      "minPrice" : minPrice?Number(minPrice):undefined,
      "maxPrice" : maxPrice?Number(maxPrice):undefined,
      "checkIn" : checkIn,
      "checkOut" : checkOut,
      "persons" : persons?Number(persons):undefined
    });
    console.log({
      "city" : city,
      "minPrice" : minPrice?Number(minPrice):undefined,
      "maxPrice" : maxPrice?Number(maxPrice):undefined,
      "checkIn" : checkIn,
      "checkOut" : checkOut,
      "persons" : persons?Number(persons):undefined
    })
  }
  return(
    <>
      <div className="filters-container">
        <h3 className="filters-title">Filters:</h3>

        <div className="filters-input">
          <p>City:</p>
          <input type="text" placeholder="London" id="city-input"></input>
        </div>
        <div className="filters-input">
          <p>Check in:</p>
          <input type="date" id="check-in-input"></input>
        </div>
        <div className="filters-input">
          <p>Check out:</p>
          <input type="date" id="check-out-input"></input>
        </div>
        <div className="filters-input">
          <p>Persons:</p>
          <input type="number" placeholder="2" id="persons-input"></input>
        </div>
        <div className="filters-input">
          <p>Min Price:</p>
          <input type="number" placeholder="100" id="min-price-input"></input>
        </div>
        <div className="filters-input">
          <p>Max Price:</p>
          <input type="number" placeholder="200" id="max-price-input"></input>
        </div>
      <button className="search-button" onClick={handleSearch}>Saerch</button>
      </div>
    </>
  );
}
export default Filters;