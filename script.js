// script.js
const countriesList = document.getElementById("countries");
const countryDetails = document.getElementById("country-details");

// Fetch country data from Restcountries API
fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(data => {
        const options = data.map(country => `<option value="${country.alpha3Code}">${country.name}</option>`).join('');
        countriesList.innerHTML = options;
    })
    .catch(error => console.error('Error fetching country data:', error));

// Event listener for country selection
countriesList.addEventListener('change', async (event) => {
    const countryCode = event.target.value;

    try {
        // Fetch selected country's data from Restcountries API
        const response = await fetch(`https://restcountries.com/v2/alpha/${countryCode}`);
        const countryData = await response.json();

        // Display country details
        const countryCard = `
            <div class="card">
                <img src="${countryData.flag}" class="card-img-top" alt="Flag of ${countryData.name}">
                <div class="card-body">
                    <h5 class="card-title">${countryData.name}</h5>
                    <p class="card-text">Capital: ${countryData.capital}</p>
                    <p class="card-text">Region: ${countryData.region}</p>
                    <p class="card-text">Country Code: ${countryData.alpha3Code}</p>
                </div>
            </div>`;
        countryDetails.innerHTML = countryCard;

        // Fetch weather data from OpenWeather map API
        const lat = countryData.latlng[0];
        const lon = countryData.latlng[1];
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=https://restcountries.com/v2/alpha/${countryCode}`);
        const weatherData = await weatherResponse.json();
        
        // Display weather information here
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
