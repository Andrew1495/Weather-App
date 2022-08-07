    // forcast.daily.forEach((value, index) => {
    //     if (index > 0) {
    //         let dayname = new Date(value.dt * 1000).toLocaleDateString("en", {
    //             weekday: "long",
    //         });
    //         console.log(dayname)
    //         let icon = value.weather[0].icon;
    //         let temp = value.temp.day.toFixed(0);
    //     }
    // });




import React from "react";


const ListItem = (({day})  => {
    let dayName = new Date(day.dt * 1000).toLocaleDateString("en", {
                    weekday: "long",
    });
    day.icon =  `http://openweathermap.org/img/w/${day.weather[0].icon}.png`



return(
    <li>
        <h4>{dayName}</h4>
        <img src={day.icon} />
        <p>{day.temp.day.toFixed(0)}°C</p>
        <p>{day.feels_like.day.toFixed(0)}°C</p>
        <p>{day.temp.max.toFixed(0)}°C</p>
        <p>{day.temp.min.toFixed(0)}°C</p>
    </li>
)
})
export default ListItem;
