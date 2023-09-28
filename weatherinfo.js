import React from 'react'
import "./weather.css";
import {Link} from 'react-router-dom';
import search_icon from '../src/Component/Assets/search.png';
import cloud_icon from '../src/Component/Assets/cloud.png';
const Weather = () => {
  
    let api_key="277d8b63f3d86d73003b5c4ac6074b19";
    
    const search = async () => {
        const element = document.getElementsByClassName("inpcity");
        if (element[0].value === "") {
          return 0;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            const humidity = document.getElementsByClassName("humidity");
            const wind =document.getElementsByClassName("wind");
            const temperature =document.getElementsByClassName("temp");
            const location = document.getElementsByClassName("location");
      
            humidity[0].innerHTML = data.main.humidity+" % Humidity";
            wind[0].innerHTML = Math.floor(data.wind.speed)+ " km/h Wind speed";
            temperature[0].innerHTML = Math.floor(data.main.temp)+" Cel";
            location[0].innerHTML = data.name; 

            
          })
          .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
          });
      };

      
  return (
    <div>
      <center>
        <div className='main'>
          <h1>Weather Information</h1>
            <div className='form'>
                <input type="text" placeholder="Enter City name" className='inpcity'/>
                 <img src={search_icon} alt="image not found" onClick={()=>{search()}} className='search'/>
            </div>
            <div className='search_icons'>
              <img src={cloud_icon} alt="image not found"/>
            </div>

            <div className='info'>
            <div className='temp'>34</div>
            <div className='location'>Location</div>
            <div className='humidity'>Humidity</div>
            <div className='wind'>Wind speed</div>
            </div>
            <Link to='/' className='backlink'>Back to home</Link>
        </div>
      </center>
    </div>
  )
}

export default Weather
