import styles from "./App.module.css"
import Form from "./components/Form"
import WeatherDetail from "./components/WeatherDetail/WeatherDetail"
import Alert from "./components/Alert/Alert"
import Spinner from "./components/Spinner/Spinner"
import useWeather from "./hooks/useWeather"


function App() {

  const { weather, loading, notFound, fetchWeather, hasWeatherData } = useWeather()

  return (
    <>
      <h2 className={styles.title}>Check the Weather</h2>
      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />
        {loading && <Spinner />}
        {hasWeatherData && <WeatherDetail weather={weather} />}
        {notFound && <Alert>City not found</Alert>}

      </div>
    </>
  )
}

export default App
