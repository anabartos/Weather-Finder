# Weather Finder App

**Weather Finder** is an app that allows users to search for weather information for cities around the world. The application uses the OpenWeatherMap API to fetch weather data and display information such as current temperature, maximum and minimum temperatures, and error messages for invalid cities or missing fields.

## Technologies Used

- **React** - A JavaScript library for building user interfaces.
- **TypeScript** - A typed superset of JavaScript that adds static types.
- **Vite** - A fast build tool for modern web projects.
- **Zod** - Used for data validation, ensuring that the response from the API is in the correct format.
- **Axios** - To make HTTP requests to the OpenWeatherMap API.
- **CSS Modules** - To scope styles to individual components in the app.

## Features

- Search weather by city and country.
- Displays current temperature, maximum and minimum temperatures.
- If the city is not found or fields are incomplete, an error message is shown.
- Simple, modern user interface.

## Installation

To get started with the project, clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/weather-react-ts.git
cd weather-react-ts
npm install
```

## Environment Variables

This project requires an API key from OpenWeatherMap. After getting your API key, add it to an .env file in the root of your project: 
VITE_API_KEY=your-api-key-here

## Usage

Once the dependencies are installed and the .env file is configured, you can run the project with:

```bash
Copiar código
npm run dev
This will start the application, typically available at http://localhost:3000.
```

## Project Structure

/weather-react-ts
|-- /public
|   |-- /assets
|   |-- index.html
|
|-- /src
|   |-- /components
|   |   |-- Form.tsx
|   |   |-- WeatherDetail.tsx
|   |   |-- Alert.tsx
|   |   |-- Spinner.tsx
|   |
|   |-- /hooks
|   |   |-- useWeather.ts
|   |
|   |-- /helpers
|   |   |-- helpers.ts
|   |
|   |-- App.tsx
|   |-- main.tsx
|   |-- /styles
|   |   |-- App.module.css
|   |   |-- WeatherDetail.module.css
|   |
|   |-- index.tsx
|
|-- package.json
|-- tsconfig.json
|-- .env
|-- README.md


## Contributions
Contributions are welcome! If you'd like to improve the app or add new features, feel free to open a pull request.