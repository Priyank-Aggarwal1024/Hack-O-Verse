import React, { useEffect, useState } from 'react';
import { Chart } from 'chart.js';
import data from '../data';
function Chart1(props) {
    const [aqi, setAqi] = useState(data.data.map((item, ind) => { return { aqi: item.aqi, time: item.datetime.slice(-2) + " : 00" } }))
    // const [co, setCo] = useState(data.data.map((item, ind) => { return { aqi: item.aqi, time: item.datetime.slice(-2) + " : 00" } }))
    const [no2, setNo2] = useState(data.data.map((item, ind) => { return { no2: item.no2, time: item.datetime.slice(-2) + " : 00" } }))
    const [o3, setO3] = useState(data.data.map((item, ind) => { return { o3: item.o3, time: item.datetime.slice(-2) + " : 00" } }))
    const [pm10, setPm10] = useState(data.data.map((item, ind) => { return { pm10: item.pm10, time: item.datetime.slice(-2) + " : 00" } }))
    const [pm25, setPm25] = useState(data.data.map((item, ind) => { return { pm25: item.pm25, time: item.datetime.slice(-2) + " : 00" } }))
    const [so2, setSo2] = useState(data.data.map((item, ind) => { return { so2: item.so2, time: item.datetime.slice(-2) + " : 00" } }));
    // console.log(aqi, so2, pm10, pm25, o3, no2)
    useEffect(() => async function () {
        const ch1 = new Chart(
            document.getElementById('acquisitions1'),
            {
                type: 'bar',
                data: {
                    labels: aqi.map(row => row.time),
                    datasets: [
                        {
                            label: 'AQI index 24 Hours',
                            data: aqi.map(row => row.aqi)
                        }
                    ]
                }
            }
        );
        const ch2 = new Chart(
            document.getElementById('acquisitions2'),
            {
                type: 'bar',
                data: {
                    labels: no2.map(row => row.time),
                    datasets: [
                        {
                            label: 'NO2 index 24 Hours',
                            data: no2.map(row => row.no2)
                        }
                    ]
                }
            }
        );
        const ch3 = new Chart(
            document.getElementById('acquisitions3'),
            {
                type: 'bar',
                data: {
                    labels: o3.map(row => row.time),
                    datasets: [
                        {
                            label: 'Ozone index 24 Hours',
                            data: o3.map(row => row.o3)
                        }
                    ]
                }
            }
        );
        const ch4 = new Chart(
            document.getElementById('acquisitions4'),
            {
                type: 'bar',
                data: {
                    labels: pm10.map(row => row.time),
                    datasets: [
                        {
                            label: 'PM10 index 24 Hours',
                            data: pm10.map(row => row.pm10)
                        }
                    ]
                }
            }
        );
        const ch5 = new Chart(
            document.getElementById('acquisitions5'),
            {
                type: 'bar',
                data: {
                    labels: pm25.map(row => row.time),
                    datasets: [
                        {
                            label: 'PM25 index 24 Hours',
                            data: pm25.map(row => row.pm25)
                        }
                    ]
                }
            }
        );
        const ch6 = new Chart(
            document.getElementById('acquisitions6'),
            {
                type: 'bar',
                data: {
                    labels: so2.map(row => row.time),
                    datasets: [
                        {
                            label: 'SO2 index 24 Hours',
                            data: so2.map(row => row.so2)
                        }
                    ]
                }
            }
        );
    });
    return (
        <div className="graph overflow-auto">
            <div ><canvas id="acquisitions1"></canvas></div>
            <div ><canvas id="acquisitions2"></canvas></div>
            <div ><canvas id="acquisitions3"></canvas></div>
            <div ><canvas id="acquisitions4"></canvas></div>
            <div ><canvas id="acquisitions5"></canvas></div>
            <div ><canvas id="acquisitions6"></canvas></div>
        </div>
    );
}

export default Chart1;