import React, { useState, useEffect } from 'react';
const Vijit = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState({
        CO: { concentration: '', AQI: '' },
        PM10: { concentration: '', AQI: '' },
        O3: { concentration: '', AQI: '' },
        overall_aqi: '',

    });
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '0f1f8608f9mshd7028d80cd64ed0p1685c0jsn8a8e20710db3',
                    'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
                }
            };
            try {
                const response = await fetch(`https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=${city}, options`);
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [city]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setCity(e.target.city.value);
    };

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    return (
        <>
            <div>

                <div className="container main-content">
                    <h1 className="my-4 text-center">Air Content Of {city}</h1>
                    <form className="d-flex" onSubmit={handleSubmit}>
                        <input id='city' className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={city} onChange={handleInputChange} />
                        <button className="btn btn-primary me-md-2 submit" type="submit">Search</button>
                    </form>
                    <main className='container my-10' style={{ marginTop: "20px" }}>
                        <div className="row">
                            {Object.entries(weatherData).map(([key, value]) => (

                                typeof value === 'object' ? (

                                    <div key={key} className="card mb-4 rounded-1 shadow-sm border-primary col-md-4 box1" >
                                        <div className="card-header py-3  head2">
                                            <h4 className="my-0 fw-normal head1">{key}</h4>
                                        </div>
                                        <div className="card-body">
                                            { }
                                            {Object.entries(value).map(([subKey, subValue]) => (
                                                <ul key={subKey} className="list-unstyled mt-3 mb-4">
                                                    <li className='content1'> {subKey.charAt(0).toUpperCase() + subKey.slice(1)}  is <span>&nbsp; {subValue} </span></li>
                                                </ul>
                                            ))}
                                        </div>
                                    </div>
                                ) : null
                            ))}
                        </div></main>
                </div>
            </div>
        </>
    );
};

export default Vijit;