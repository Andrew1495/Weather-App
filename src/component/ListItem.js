import React from "react";


const ListItem = (({day, key})  => {
    let dayName = new Date(day.dt * 1000).toLocaleDateString("en", {
                    weekday: "long",
    });
    day.icon =  `http://openweathermap.org/img/w/${day.weather[0].icon}.png`



return(
    <li className="day-box" key={key}>
        <h4>{dayName}</h4>
        <img src={day.icon} />
        <p>Temp: {day.temp.day.toFixed(0)}°C</p>
        <p>Feels Like: {day.feels_like.day.toFixed(0)}°C</p>
        <p>Max: {day.temp.max.toFixed(0)}°C</p>
        <p>Min: {day.temp.min.toFixed(0)}°C</p>
    </li>
)
})
export default ListItem;
