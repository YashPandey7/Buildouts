import React, { useEffect, useState } from 'react';
import "./XCountrySearch.css";
import CountryCard from './CountryCard';

function XCountrySearch() {
    const [data, setData] = useState([]);
    const [inputData, setInputData] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const fetchData = async () => {
        try {
            const apiData = await fetch("https://restcountries.com/v3.1/all");
            const actualData = await apiData.json();
            // console.log(actualData[0].name.common);
            setData(actualData);
            setFilteredData(actualData);
        } catch (err) {
            console.log("Failed to fetch the data ", err);
        }
    }

    const updateData = () => {
        const filterData = data.filter((item) => {
            return (item.name.common.toLowerCase().includes(inputData.toLowerCase()));
        });
        setFilteredData(filterData);
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        updateData();
    }, [inputData]);


    return (
        <>
            <div className="searchSection">
                <form>
                    <input type="text" placeholder='Search for countires...' value={inputData} onChange={(e) => setInputData(e.target.value)} />
                </form>
            </div>
            <br /><br />
            <div className="parent">
                {filteredData.map((item, index) => {
                    return (
                        <CountryCard item={item} key={index} />
                    )
                })}
            </div>

        </>
    )
}

export default XCountrySearch;