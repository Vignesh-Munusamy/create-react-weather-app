import React from "react";
import './App.css'

const DisplayWeather=(props) => {
     console.log(props.data)
    return <div className="main-div">
        <div className="main-temp-div">
          <div>{props.data.weather[0].main}</div>
          <div>  {props.data.main.temp} </div>
          <div> {props.data.name},{props.data.sys.country}</div>
          
        </div>
       <div className="main-wind-div">
          <div className="wind">
               <div>Wind</div>
               <div>{props.data.wind.deg} mph</div>
          </div>
          <div className="Humidity">
               <div>Humidity</div>
               <div>{props.data.main.humidity}</div>
          </div>
          <div className="Pressure">
               <div>Pressure</div>
               <div>{props.data.main.pressure}</div>
          </div>



       </div>
       
       </div>

}
export default DisplayWeather;