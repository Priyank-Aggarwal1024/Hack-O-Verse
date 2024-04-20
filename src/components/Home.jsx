import React, { useEffect, useState } from 'react';
import Chart1 from './Chart1';
function Home(props) {
    const [city, setCity] = useState("Delhi")
    return (
        <>
            <h1 className="text-center text-blue-800 mb-6" style={{ fontSize: "48px", fontWeight: "800" }}>Statistical Value of AQI</h1>
            <h3 className="m-3 fs-1 ">Region - {city}</h3>
            <Chart1 />
        </>
    );
}

export default Home;