import { useState } from 'react'
import Searchbox from './Searchbox'
import Infobox from './infobox'
export default function WeatherApp() {

    const [weatherinfo, setweatherinfo] = useState({

        city: "Jalandhar",
        feelslike: 25.5,
        humidity: 80,
        temp: 10,
        temp_min: 13,
        temp_max: 10,
        description: "clear sky",

    })
    let updateinfo = (newinfo) => {
        setweatherinfo(newinfo)
    }
    return (
        <div style={{ textAlign: "center" }}>
            <Searchbox updateinfo={updateinfo} />
            <Infobox info={weatherinfo} />
        </div>
    )

}