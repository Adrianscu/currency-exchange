import React, { useState, useEffect } from 'react';
import CurrencyRow from './CurrencyRow';
import './App.css';

const App = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [apiUrl] = useState('https://api.exchangerate-api.com/v4/latest/USD'); // Folosește URL-ul corect

  useEffect(() => {
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setRates(data.rates);
        setLoading(false);
      })
      .catch(error => {
        console.error('Eroare la obținerea datelor:', error);
        setLoading(false);
      });
  }, [apiUrl]);

  return (
    <div className="App">
      <h1>Currency exchange</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <CurrencyRow rates={rates} />
      )}
    </div>
  );
};

export default App;
