const axios = require('axios');

const getExchangeRate = async (from, to) => {
    try {
        const response = await axios.get(`http://api.fixer.io/latest?base=${from}`);
        const rate = response.data.rates[to]
        
        if (rate) {
            return rate;
        } else {
            throw new Error();
        }
    } catch (e) {
        throw new Error(`Unable to get exchange rate for ${from} and ${to}.`);
    }
    
  
};

const getCountries = async(currencyCode) => {
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
        return response.data.map((country) => country.name);
    } catch (e) {
        throw new Error(`Unable to get countries that use ${currencyCode}.`)
    } 
};

const convertCurrency = async(from, to, amount) => {
    const countries = await getCountries(to);
    const rate = await getExchangeRate(from, to);
    const exchangeAmount = rate * amount;
    return `${amount} ${from} is worth ${exchangeAmount} ${to}. You can use ${to} in the following countries: ${countries.join(', ')}`;
}

getExchangeRate('USD', 'EUR').then((rate) => {
    console.log(rate);
}).catch((e) => {
    console.log(e.message);
});

getCountries('MMM').then((countries) => {
    console.log(countries);
}).catch((e) => {
    console.log(e.message);
});

convertCurrency('USD', 'MMM', 100).then((status) => {
    console.log(status);
}).catch((e) => {
    consle.log(e.message);
});