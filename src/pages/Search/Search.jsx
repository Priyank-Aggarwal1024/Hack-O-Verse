import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import { FaSearch } from "react-icons/fa";

const Search = () => {
    const [loc, setloc] = useState("delhi")
    const [aqi, setAqi] = useState(219);
    const da = [
        {

            "concentration": 327.11,
            "aqi": 3,
            "name": "CO"
        },
        {
            "concentration": 3.47,
            "aqi": 4,
            "name": "NO2"
        },
        {
            "concentration": 165.94,
            "aqi": 219,
            "name": "O3"
        },
        {
            "concentration": 8.35,
            "aqi": 12,
            "name": "SO2"
        },
        {
            "concentration": 19.68,
            "aqi": 58,
            "name": "PM2.5"
        },
        {
            "concentration": 49.79,
            "aqi": 46,
            "name": "PM10"
        },
    ]
    const [mainData, setMainData] = useState(da);



    const submitHandler = (e) => {
        e.preventDefault();
        console.dir(e.target.city.value)
        setloc(e.target.city.value)
    }
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0f1f8608f9mshd7028d80cd64ed0p1685c0jsn8a8e20710db3',
            'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
        }
    };
    useEffect(() => {
        fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=' + loc, options)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMainData([
                    { ...data.CO, name: "CO" },
                    { ...data.NO2, name: "NO2" },
                    { ...data.O3, name: "O3" },
                    { ...data["PM2.5"], name: "PM2.5" },
                    { ...data.PM10, name: "PM10" },
                    { ...data.SO2, name: "SO2" },

                ])
            })
    }, [loc])
    return (
        <>
            <div className="search">
                <div className="inp">
                    <form action="" onSubmit={submitHandler}>
                        <div className="search-bar">
                            <div className="icon">

                                <FaSearch color='darkblue' size={32} />
                            </div>
                            <input type="text" name="city" id="city" placeholder="Enter a location" className="input-location" />
                        </div>

                    </form>
                </div>
                <div className="search-body">
                    <div className="cards">
                        {mainData.map((item, idx) => <Card item={item} key={idx} />)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;