
import React, {useState, useEffect} from "react"
import SearchBar from "../component/SearchBar"
import WeatherDetail from "../component/WeatherDetail"
import ForcastList from "../component/ForcastList"
import key from "../component/.env"
import LeafletMap from "../component/LeafletMap"

    const WeatherBox = () => {

        const [city, setCity] = useState(null)
        const [forcast, setForcast] = useState("")
        const [userInput, setUserInput] = useState("")
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=metric&appid=${key}`

        const getWeather = async () => {
            try {
                let res = await fetch(url);
                let data = await res.json();
                setCity(data)
                let lat = data.coord.lat;
                let lon = data.coord.lon;
                getForcast(lat, lon);

            } catch (error) {
                console.log(error);
            }
        };

        const getForcast = async (lat, lon) => {
            let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${key}`;
            try {
                let res = await fetch(url);
                let data = await res.json();
                setForcast(data)
            } catch (error) {
                console.log(error);
            }
        };

    

        
        const handleUserInput = (event) =>{
            let input = event.target.value
            setUserInput(input.toLowerCase());
        };
        
        
        
        const handleSearchBar = (event) => {
            event.preventDefault();
            getWeather();
        };








return(

    <div className="app">

        <SearchBar userInput={userInput} handleSearchBar={handleSearchBar} handleUserInput={handleUserInput}></SearchBar>

        

        {city ? <WeatherDetail city={city}></WeatherDetail> : null}


        {forcast ? <ForcastList forcast={forcast} ></ForcastList>: null}


    </div>


)
}

export default WeatherBox;







