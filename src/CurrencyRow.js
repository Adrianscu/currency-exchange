import React, { useState } from 'react';

const CurrencyRow = ({ rates }) => {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('RON');
    const [convertedAmount, setConvertedAmount] = useState(null);

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleFromCurrencyChange = (e) => {
        setFromCurrency(e.target.value);
    };

    const handleToCurrencyChange = (e) => {
        setToCurrency(e.target.value);
    };

    const handleConvert = () => {
        const rateFrom = rates[fromCurrency];
        const rateTo = rates[toCurrency];

        if (rateFrom && rateTo) {
            const conversionRate = rateTo / rateFrom;
            const converted = amount * conversionRate;
            setConvertedAmount(converted.toFixed(2));
        }
    };

    return (
        <div>
            <input
                type="number"
                value={amount}
                onChange={handleAmountChange}
                className="input"
            />
            <select value={fromCurrency} onChange={handleFromCurrencyChange}>
                {Object.keys(rates).map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
            <span className="equals">=</span>
            <input
                type="number"
                value={convertedAmount || ''}
                readOnly
                className="input"
            />
            <select value={toCurrency} onChange={handleToCurrencyChange}>
                {Object.keys(rates).map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
            <button onClick={handleConvert}>Exchange</button>
        </div>
    );
};

export default CurrencyRow;
