import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./Searchbox.css"
import { useState } from 'react';
export default function Searchbox({ updateinfo }) {
    let [city, setcity] = useState("");
    let [err, seterr] = useState(false);

    const api = "https://api.openweathermap.org/data/2.5/weather";
    const key = "ad750901f5329f1d33fd5ee3278f2f92";

    let getinfo = async () => {

        try {
            let response = await fetch(`${api}?q=${city}&appid=${key}&units=metric`);
            let jsonres = await response.json();
            console.log(jsonres)
            let result = {
                city: city,
                temp: jsonres.main.temp,
                humidity: jsonres.main.humidity,
                temp_min: jsonres.main.temp_min,
                temp_max: jsonres.main.temp_max,
                feelslike: jsonres.main.feels_like,
                description: jsonres.weather[0].description
            }
            console.log(result)
            return result
        } catch (err) {
            throw err;
        }

    }


    let handlechanges = (evt) => {
        setcity(evt.target.value);

    }
    let handlesubmits = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setcity("");
            let newinfo = await getinfo();
            updateinfo(newinfo)
        } catch (err) {
            seterr(true)

        }


    }
    return (
        <div className="searchbox">
            <h1>Search for weather</h1>
            <form onSubmit={handlesubmits}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handlechanges} /> <br /><br />
                <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                    Search
                </Button>
                {err && <p style={{color:"red"}}>Oops! NO such Loction found.</p>}
            </form>
        </div>
    )
}