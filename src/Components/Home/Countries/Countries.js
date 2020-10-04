import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Countries = (props) => {
    const {name,region} = props.countries;
    // const {numericCode} = useParams();
    const style = {
        border: '1px solid black',
        borderRadius:'10px',
        margin: '10px',
        padding: '10px'
    }
    return (
      
        <div style={style}>
            <h3>Country: {name}</h3>
            <p>region: {region}</p>
            <p><Link to={`/details/${name}`}>click here for details about {name}</Link></p>
            
        </div>
    );
};

export default Countries;