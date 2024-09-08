import { useState } from 'react'
import Searchbox from './Searchbox'
import Infobox from './infobox'
export default function WeatherApp() {

    const [weatherinfo, setweatherinfo] = useState({

        city: "Jalandhar",
        feelslike: 25.5,
        humidity: 80,
        temp: 10,
        tempMin: 1013,
        tempMax: "06:00",
        description: "clear sky",

    })
    let updateinfo=(newinfo)=>{
        setweatherinfo(newinfo)
    }
    return (
        <div style={{ textAlign: "center" }}>
            <Searchbox updateinfo={updateinfo}/>
            <Infobox info={weatherinfo} />

        </div>
    )

}