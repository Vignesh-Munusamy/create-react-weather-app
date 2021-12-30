import './App.css';
import React,{useState} from 'react';
import DisplayWeather from './DisplayWeather.js'

function App() {
  const [inputval , setInputval]=useState('');
  const [weather , setWeather]=useState([]);
  const Add = () =>{
    if( inputval){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputval}&units=metric&APPID=4fba502b8351f798d0dc3a25f2a44769`)
    .then(response => response.json())
    .then(response =>{
      (response.cod === 200 ) &&
      setWeather((weather) => [...weather,response]);
      setInputval('');
       });
}
else{
  alert('Plase Enter Location' )
}
}

console.log(weather)
  return (
    
    <div className="App">
      
      <div className="search-main-box">
        <div>
      <input type="text" className="input-button" value={inputval} onChange={e =>setInputval( e.target.value)} placeholder='Enter Location'  />
      </div>
      <div>
      <button className="submit-button" onClick={Add}>ADD</button>
</div>
      </div>
      <div className='wrap-condainer'>
      {(weather.length > 0)?
       ( 
         weather.map((item, index) =>(
            <div className='div-box' key={index}> 
              <DisplayWeather data={item} />
             </div>
             )
      )  
      ): ('')}
      </div>
    </div>
  );
}

export default App;
