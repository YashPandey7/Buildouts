import React from 'react';

function CountryCard({item}) {
    return (
        <>
            <div className="countryCard">
                <img src={item.flags.svg} alt={item.name.common} className='flag' />
                <p>{item.name.common}</p>
            </div>
        </>
    )
}

export default CountryCard;