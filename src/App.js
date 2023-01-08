import React, { useState, useEffect} from 'react';
import './App.css';
import Currency from "./components/Currency";

const BASE_URL = 'https://api.apilayer.com/fixer/latest?apikey=60NPRDrEdXimZw1CuxSwYsJcCrA8UZxd'


function App() {
  
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();


  useEffect(() => {
    fetch(BASE_URL)
      .then(res =>res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
      })
  }, [])
  
  return (
    <div className="container">
        <span className='content'>
          <Currency
            currencyOptions={currencyOptions}
            selectedCurrency={fromCurrency}
            onChangeCurrency={e => setFromCurrency(e.target.value)}
          />
          <div className='equal'>is equal to</div>
          <Currency 
            currencyOptions={currencyOptions}
            selectedCurrency={toCurrency}
            onChangeCurrency={e => setToCurrency(e.target.value)}
          />
        </span>
    </div>
  );
}

export default App;
