# Country Information and Weather Web Application

This web application fetches country data from the Rest Countries API and displays it in a dropdown list. When a country is selected from the list, it fetches the selected country’s data and displays its details, including its flag, capital, region, and country code. Additionally, it fetches the current weather data for the selected country’s capital from the OpenWeatherMap API.

### Features

1. Country Dropdown List:

 - The dropdown list contains country names fetched from the Rest Countries API.
 - Users can select a country from the list.

2. Country Details Display:
 - When a country is selected, the application fetches additional details for that country.
 - The country details are displayed in a Bootstrap card format.
 - Details include the country’s name, capital, region, and country code.

3. Weather Data Integration:

 - The application fetches weather data from the OpenWeatherMap API.
 - Latitude and longitude coordinates from the Rest Countries API are used to get weather information for the selected country’s capital.
 - Replace `YOUR_API_KEY` with your actual OpenWeatherMap API key.

### Usage

1. Clone this repository to your local machine.
2. Open `index.html` in your web browser.
3. Select a country from the dropdown list.
4. View the country details and weather information (to be implemented).

### Implementation Notes

- The JavaScript code (`script.js`) uses the `fetch()` API to retrieve country data and weather information.
- The UI is styled using Bootstrap (you can customize this further).
- Additional implementation is needed to display the weather data.

### API Keys

- Replace `YOUR_API_KEY` with your actual API key for both Rest Countries and OpenWeatherMap APIs.