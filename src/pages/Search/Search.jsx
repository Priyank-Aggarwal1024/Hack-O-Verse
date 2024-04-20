import React, { useState, useEffect } from 'react';


const Search = () => {
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0f1f8608f9mshd7028d80cd64ed0p1685c0jsn8a8e20710db3',
                'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
            }
        };

        const getweather = (city) => {
            cityname.innerHTML = city;
            fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=' + city, options)
                .then(response => response.json())
                .then((response) => {
                    co1.innerHTML = response.CO.concentration
                    co2.innerHTML = response.CO.aqi
                    pm101.innerHTML = response.PM10.concentration
                    pm102.innerHTML = response.PM10.aqi
                    o31.innerHTML = response.O3.concentration
                    o32.innerHTML = response.O3.aqi
                    console.log(response)
                })
                .catch(err => console.error(err));
        }

        submit.addEventListener('click', (e) => {
            e.preventDefault();
            getweather(city.value);
        })
        getweather('Delhi');
        const getweather_mzn = (city) => {

            fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=' + city, options)
                .then(response => response.json())
                .then((response) => {
                    mzn_co.innerHTML = response.CO.concentration
                    mzn_no2.innerHTML = response.NO2.concentration
                    mzn_o3.innerHTML = response.O3.concentration

                    mzn_pm10.innerHTML = response.PM10.concentration
                    mzn_so2.innerHTML = response.SO2.concentration
                    mzn_aqi.innerHTML = response.overall_aqi
                    console.log(response)
                })
                .catch(err => console.error(err));
        }
        getweather_mzn('Muzaffarnagar');
        const getweather_mrt = (city) => {

            fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=' + city, options)
                .then(response => response.json())
                .then((response) => {
                    mrt_co.innerHTML = response.CO.concentration
                    mrt_no2.innerHTML = response.NO2.concentration
                    mrt_o3.innerHTML = response.O3.concentration

                    mrt_pm10.innerHTML = response.PM10.concentration
                    mrt_so2.innerHTML = response.SO2.concentration
                    mrt_aqi.innerHTML = response.overall_aqi
                    console.log(response)
                })
                .catch(err => console.error(err));
        }
        getweather_mrt('Meerut');

        const getweather_gzb = (city) => {

            fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=' + city, options)
                .then(response => response.json())
                .then((response) => {
                    gzb_co.innerHTML = response.CO.concentration
                    gzb_no2.innerHTML = response.NO2.concentration
                    gzb_o3.innerHTML = response.O3.concentration

                    gzb_pm10.innerHTML = response.PM10.concentration
                    gzb_so2.innerHTML = response.SO2.concentration
                    gzb_aqi.innerHTML = response.overall_aqi
                    console.log(response)
                })
                .catch(err => console.error(err));
        }
        getweather_gzb('Ghaziabad');

        const getweather_del = (city) => {

            fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=' + city, options)
                .then(response => response.json())
                .then((response) => {
                    del_co.innerHTML = response.CO.concentration
                    del_no2.innerHTML = response.NO2.concentration
                    del_o3.innerHTML = response.O3.concentration

                    del_pm10.innerHTML = response.PM10.concentration
                    del_so2.innerHTML = response.SO2.concentration
                    del_aqi.innerHTML = response.overall_aqi
                    console.log(response)
                })
                .catch(err => console.error(err));
        }
        getweather_del('Delhi');

        const getweather_gur = (city) => {

            fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=' + city, options)
                .then(response => response.json())
                .then((response) => {
                    gur_co.innerHTML = response.CO.concentration
                    gur_no2.innerHTML = response.NO2.concentration
                    gur_o3.innerHTML = response.O3.concentration

                    gur_pm10.innerHTML = response.PM10.concentration
                    gur_so2.innerHTML = response.SO2.concentration
                    gur_aqi.innerHTML = response.overall_aqi
                    console.log(response)
                })
                .catch(err => console.error(err));
        }
        getweather_gur('Gurgaon');

        const getweather_noi = (city) => {

            fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=' + city, options)
                .then(response => response.json())
                .then((response) => {
                    noi_co.innerHTML = response.CO.concentration
                    noi_no2.innerHTML = response.NO2.concentration
                    noi_o3.innerHTML = response.O3.concentration

                    noi_pm10.innerHTML = response.PM10.concentration
                    noi_so2.innerHTML = response.SO2.concentration
                    noi_aqi.innerHTML = response.overall_aqi
                    console.log(response)
                })
                .catch(err => console.error(err));
        }
        getweather_noi('noida');
    })

    return (
        <>
            <div className="container">
                <h1 className="my-4 text-center">Air Content Of <span id="cityname"></span></h1>
                <main>
                    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm border-primary">
                                <div className="card-header py-3 text-bg-primary border-primary">
                                    <h4 className="my-0 fw-normal">CO content</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title">CO</h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>CO Concentration is <span id="co1"></span></li>
                                        <li>CO AQI is <span id="co2"></span></li>

                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm border-primary">
                                <div className="card-header py-3 text-bg-primary border-primary">
                                    <h4 className="my-0 fw-normal">PM10 content</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title">PM10</h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>PM10 Concentration is <span id="pm101"></span></li>
                                        <li>PM10 AQI is <span id="pm102"></span></li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm border-primary">
                                <div className="card-header py-3 text-bg-primary border-primary">
                                    <h4 className="my-0 fw-normal">Ozone content</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title">O<sub>3</sub></h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>O<sub>3</sub> Concentration is <span id="o31"></span></li>
                                        <li>O<sub>3</sub> AQI is <span id="o32"></span></li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="display-6 text-center mb-4"><b>AQI Today</b></h2>

                    <div className="table-responsive">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th style="width: 22%;"></th>
                                    <th style="width: 12%;">CO</th>
                                    <th style="width: 12%;">NO2</th>
                                    <th style="width: 12%;">O3</th>

                                    <th style="width: 12%;">PM10</th>
                                    <th style="width: 12%;">SO2</th>
                                    <th style="width: 12%;">overall_aqi</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" className="text-start">Muzaffar Nagar</th>
                                    <td><span id="mzn_co"></span></td>
                                    <td><span id="mzn_no2"></span></td>
                                    <td><span id="mzn_o3"></span></td>
                                    <td><span id="mzn_pm10"></span></td>
                                    <td><span id="mzn_so2"></span></td>
                                    <td><span id="mzn_aqi"></span></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="text-start">Meerut</th>
                                    <td><span id="mrt_co"></span></td>
                                    <td><span id="mrt_no2"></span></td>
                                    <td><span id="mrt_o3"></span></td>
                                    <td><span id="mrt_pm10"></span></td>
                                    <td><span id="mrt_so2"></span></td>
                                    <td><span id="mrt_aqi"></span></td>
                                </tr>
                            </tbody>

                            <tbody>
                                <tr>
                                    <th scope="row" className="text-start">Ghaziabad</th>
                                    <td><span id="gzb_co"></span></td>
                                    <td><span id="gzb_no2"></span></td>
                                    <td><span id="gzb_o3"></span></td>
                                    <td><span id="gzb_pm10"></span></td>
                                    <td><span id="gzb_so2"></span></td>
                                    <td><span id="gzb_aqi"></span></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="text-start">Delhi</th>
                                    <td><span id="del_co"></span></td>
                                    <td><span id="del_no2"></span></td>
                                    <td><span id="del_o3"></span></td>
                                    <td><span id="del_pm10"></span></td>
                                    <td><span id="del_so2"></span></td>
                                    <td><span id="del_aqi"></span></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="text-start">Gurgaon</th>
                                    <td><span id="gur_co"></span></td>
                                    <td><span id="gur_no2"></span></td>
                                    <td><span id="gur_o3"></span></td>
                                    <td><span id="gur_pm10"></span></td>
                                    <td><span id="gur_so2"></span></td>
                                    <td><span id="gur_aqi"></span></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="text-start">Noida</th>
                                    <td><span id="noi_co"></span></td>
                                    <td><span id="noi_no2"></span></td>
                                    <td><span id="noi_o3"></span></td>
                                    <td><span id="noi_pm10"></span></td>
                                    <td><span id="noi_so2"></span></td>
                                    <td><span id="noi_aqi"></span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Search;