import React, { useEffect, useState } from 'react';
import "./XState.css";

function XState() {
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    useEffect(() => {
        const fetchCountry = async() => {
            try{
                const apiData = await fetch("https://crio-location-selector.onrender.com/countries");
                const actualData = await apiData.json();
                const filteredData = await actualData.map((item) => item.trim());
                console.log(filteredData);
                console.log(actualData);
                setCountries(filteredData);
            }catch(error){ 
                console.log("Failed to fetch country data : ", error.message);
            }
        }
        fetchCountry();
    }, []);

    useEffect(() => {
        if(selectedCountry){
            const fetchState = async() => {
                try{
                    const apiData = await fetch(`https://crio-location-selector.onrender.com/country=${selectedCountry}/states`);
                    const actualData = await apiData.json();
                    console.log(actualData);
                    setStates(actualData);
                }catch(error){
                    console.log("Failed to fetch State data : ", error.message);
                }
            }
            fetchState();
        }
    }, [selectedCountry]);

    useEffect(() => {
        if(selectedCountry && selectedState){
            const fetchCity = async() => {
                try{
                    const apiData = await fetch(`https://crio-location-selector.onrender.com/country=${selectedCountry}/state=${selectedState}/cities`);
                    const actualData = await apiData.json();
                    console.log(actualData);
                    setCities(actualData);
                }catch(error){
                    console.log("Failed to fetch State data : ", error.message);
                }
            }
            fetchCity();
        }
    }, [selectedCountry, selectedState]);
    
  return (
    <>
        <h1>Select Location</h1>
        <select id = "field1" value = {selectedCountry} onChange={(e) => {setSelectedCountry(e.target.value); setSelectedState(""); setSelectedCity("");}}>
            <option value = "" disabled>Select Country</option>
            {countries.map((item, index) => {
                return(
                    <option key={index} value={item}>{item}</option>
                )
            })}
        </select>

        <select id = "field2" value = {selectedState} onChange={(e) => {setSelectedState(e.target.value); setSelectedCity("");}}>
            <option value = "" disabled>Select State</option>
            {states.map((item, index) => {
                return(
                    <option key={index} value={item}>{item}</option>
                )
            })}
        </select>

        <select id = "field3" value = {selectedCity} onChange={(e) => setSelectedCity(e.target.value)} >
            <option value = "" disabled>Select City</option>
            {Array.isArray(cities) && cities.map((item, index) => {
                return(
                    <option key = {index} value={item}>{item}</option>
                )
            })}
        </select>
        
        {selectedCity && <h3>You selected {selectedCity}, {selectedState}, {selectedCountry}</h3>}
    </>
  )
}

export default XState;