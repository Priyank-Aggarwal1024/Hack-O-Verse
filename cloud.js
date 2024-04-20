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