 
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherinfo,setWeatherInfo]=useState({
        city:"Jammu",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });
    let updateinfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <div> 
            <h2> Track Today’s Weather</h2>
            <SearchBox updateinfo={updateinfo}/>
             <InfoBox info={weatherinfo}/>
        </div>
    );
}