import React, { useState, useEffect} from 'react';
import './App.css';
import Currency from "./components/Currency";

const BASE_URL = 'https://api.apilayer.com/fixer/latest?apikey=60NPRDrEdXimZw1CuxSwYsJcCrA8UZxd'


function App() {
  
  const [currencyOptions, setCurrencyOptions] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then(res =>res.json())
      .then(data => 
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]))
  }, [])
  
  return (
    <div className="container">
        <span className='content'>
          <Currency
            currencyOptions={currencyOptions}
          />
          <div className='equal'>is equal to</div>
          <Currency 
          currencyOptions={currencyOptions}
          />
        </span>
    </div>
  );
}

export default App;
