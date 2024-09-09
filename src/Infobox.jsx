import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infobox.css"
export default function Infobox({ info }) {
    const img = "https://images.unsplash.com/photo-1722858344552-7acf888a7046?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    const hot_img = "https://www.istockphoto.com/photo/sun-on-blue-sky-with-clouds-gm824800468-133702135?utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhot-day-weather&utm_medium=affiliate&utm_source=unsplash&utm_term=hot+day+weather%3A%3Areduced-affiliates%3Aquarter";
    const cold_img = "https://www.istockphoto.com/photo/winter-scene-snowfall-on-the-blurred-background-gm863513024-143097991?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcold-day-weather&utm_medium=affiliate&utm_source=unsplash&utm_term=cold+day+weather%3A%3Areduced-affiliates%3Aquarter";
    const rain_img = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=2048x2048&w=is&k=20&c=oCeUC-IkL0PeNBE1KwDUHBWw692n3T4T6I-usYtX_Qc=";
    return (
        <div className="infobox">
            <div className="info-card">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? rain_img : info.temp > 15 ? hot_img : cold_img }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature = {info.temp}&deg;C </p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temp = {info.temp_min}&deg;C</p>
                            <p>Max Temp = {info.temp_max}&deg;C</p>
                            <p> The Weather can be described as {info.description} and Feels Like {info.feelslike}&deg;C</p>



                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>
    )
}