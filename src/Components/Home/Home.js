import React, { useEffect, useState } from 'react';
import Countries from '../Home/Countries/Countries';

const Home = () => {
    const[country,setCountry]=useState([]);

    useEffect(() => {
           const url ='https://restcountries.eu/rest/v2/all?limit=20';
           fetch(url)
           .then(res=> res.json())
           .then(data=> setCountry(data))
    },[])
    return (
        <div>
            <h1>Get the details of a country-_-</h1>
            {
                country.map(countries =><Countries countries={countries}></Countries>)
            }
            
        </div>
    );
};

export default Home;