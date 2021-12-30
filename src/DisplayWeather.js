import React from "react";
import './App.css';
import ImageComponent from './Image.js'

const DisplayWeather=(props) => {

        const direction = ['N','NE','E','SE','S','SW','W','NW']
        const value = Math.round((props?.data?.wind?.deg / 45) )% 8
        var colorvalue="";
        switch(props.data.weather[0].main){
             case "Clouds": colorvalue="#86B3D1"
             break;
             case "Snow":colorvalue="#C4DBF6"
             break;
             case "Rain":colorvalue="#3B8BEB"
             break;
             case "RainNight":colorvalue="#E7E3D4"
             break;
             case "Sunny":colorvalue="#F3D250"
             break;
             case "Tonado":colorvalue="#8590AA"
             break;
             case "Sun":colorvalue="#FCE181"
             break;
             case "Moon":colorvalue="#5a5560"
             break;
             default:
                  colorvalue="#CCCCCC"
        }
    return <div className="main-div">
        <div className="main-temp-div"  style={{backgroundColor:colorvalue}}>
          <div className="image">
            <div > <ImageComponent weatherdata={props?.data?.weather[0].main}/> </div>
          </div>
          <div>
          <div className="weather">{props?.data?.weather[0]?.main}</div>
          <div className="temp">  {Math.round(props?.data?.main?.temp)} &deg; </div>
          <div className="country"> {props.data.name},{props?.data?.sys?.country}</div>
          </div>
        </div>

       <div className="main-wind-div">
          <div className="wind">
               <div className="div-data">Wind</div>
               <div className="div-mph"> {direction[value]} {Math.round(props?.data?.wind?.speed)} mph</div>
          </div>
          <div className="Humidity">
               <div className="div-data">Humidity</div>
               <div className="div-mph">{props?.data?.main?.humidity}</div>
          </div>
          <div className="Pressure">
               <div className="div-data">Pressure</div>
               <div className="div-mph">{props?.data?.main?.pressure} in</div>
          </div>



       </div>
       
       </div>

}
export default DisplayWeather;