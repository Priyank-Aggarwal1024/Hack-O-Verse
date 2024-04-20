import React, { useEffect, useState } from 'react';
import Chart1 from './Chart1';
function Home(props) {
    // const [long, setLong] = useState(77.0899968)
    // const [lat, setLat] = useState(28.442624)
    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(function (position) {
    //         const latitude = position.coords.latitude;
    //         const longitude = position.coords.longitude;
    //         setLat(latitude);
    //         setLong(longitude)
    //         console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    //     });
    // } else {
    //     console.log("Geolocation is not supported by this browser.");
    // }
    // useEffect(() => {
    //     const url = `https://air-quality.p.rapidapi.com/history/airquality?lon=${long}&lat=${lat}`;
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': '60a12ef897msh8e1139ca5a31102p1a76e4jsn8dd226ae23bd',
    //             'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
    //         }
    //     };

    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(url, options);
    //             const result = await response.text();
    //             console.log(result);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    //     fetchData();
    // }, [long])
    return (
        <>
            <h1 className="text-center text-blue-800 mb-6" style={{ fontSize: "48px", fontWeight: "800" }}>Statistical Value of AQI</h1>
            <Chart1 />
        </>
    );
}

export default Home;