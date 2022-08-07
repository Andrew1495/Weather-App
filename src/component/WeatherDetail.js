
const WeatherDetail =({city}) =>{



    if("name" in city){
        city.icon =  `http://openweathermap.org/img/w/${city.weather[0].icon}.png`
    return(
    <div>
        <div className="content top">
            <h2>Today</h2>
            <div className="city-country">
                <h3>{city.name},</h3><p>{city.sys.country}:</p>
            </div>
            <p> Temp: {city.main.temp.toFixed(0)}°C</p>
            <p className="min-max">Min: {city.main.temp_min.toFixed(0)}°C Max:{city.main.temp_max.toFixed(0)}°C</p>
            
            <img src={city.icon} />
        </div>
        <div className="content bottom">
            <p>Humidity: {city.main.humidity}%</p>
            <p>Wind speed: {(city.wind.speed * 2.236936).toFixed(0)} M/PH</p>
            <p> Feels like: {city.main.feels_like.toFixed(0)}°C</p>
        </div>
    </div>    

    
    )}
    else{
        return(
            <p>no city found</p>
        )
    }
};



export default WeatherDetail;