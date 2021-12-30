import React from "react";
import Cloud from './Icons/Cloud-wind.svg';
import Snow from  './Icons/Snow.svg';
import Rain from './Icons/Rainy.svg';
import NightRainy from './Icons/Night-rainy.svg';
import Tonado from './Icons/Tonado.svg';
import Sunny from './Icons/Sunshine.svg';
import Sun from './Icons/Sun.svg';
import Moon from './Icons/Moon.svg';
import preview from './Icons/Preview.svg';
import Rainthunder from './Icons/Rainy-thunder.svg';

const ImageComponent =(props) =>{

const Valdata =(props)=>{  
    switch(props.weathervalue){
    case "Clouds":return <div>
     <img src={ Cloud} height="50px" width="40"/>
        </div>
     break;
     case "Sunny":
     case "Clear":
      return <div>
     <img src={ Sunny} height="50px" width="40"/>
        </div>
     break;
     case "Rain":return <div>
     <img src={ Rain} height="50px" width="40"/>
        </div>
     break;
     case "Snow":return <div>
     <img src={Snow } height="50px" width="40"/>
        </div>
     break;
     case "Night Rainy":return <div>
     <img src={ NightRainy} height="50px" width="40"/>
        </div>
     break;
     case "Tonado":return <div>
     <img src={Tonado} height="50px" width="40"/>
        </div>
     break;
     case "Sun":return <div>
     <img src={ Sun} height="50px" width="40"/>
        </div>
     break;
     
     case "Moon":return <div>
     <img src={Moon} height="50px" width="40"/>
        </div>
        case "Rainythunder":return <div>
        <img src={Rainthunder } height="50px" width="40"/>
           </div>
     break;
     default:return <div>
     <img src={preview} height="50px" width="40"/>
        </div>
     
}}
return<div>
    <Valdata weathervalue={props.weatherdata}/>
    </div>
    
}
    
export default ImageComponent;