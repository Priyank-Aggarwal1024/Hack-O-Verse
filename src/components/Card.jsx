import React from 'react';

function Card({ item }) {
    return (
        <>
            <div className="card">
                <div className="card-heading text-center bg-blue-800">{item.name} Content</div>
                <div className="card-body">
                    <div className="card-name text-center">{item.name}</div>
                    <div className="card-concentration text-center">{item.name} Concentration is {item.concentration}</div>
                    <div className="card-aqi  text-center">{item.name} AQI is {item.aqi}</div>
                </div>
            </div>
        </>
    );
}

export default Card;