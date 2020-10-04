import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const{numericCode} = useParams();

    const [names,setNames] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${numericCode}`;
            fetch(url)
            .then(res=>res.json())
            .then(data=> setNames(data[0]))
            //data[0] cz  the result is in an array not in an object form.
            
    },[])

    return (
        <div>
            <h1>{numericCode}</h1>
            <p>{names.capital}</p>
            <p>{names.population}</p>
        </div>
    );
};

export default CountryDetails;