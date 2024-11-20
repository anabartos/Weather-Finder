import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styles from "./App.module.css";
import Form from "./components/Form";
import WeatherDetail from "./components/WeatherDetail/WeatherDetail";
import Alert from "./components/Alert/Alert";
import Spinner from "./components/Spinner/Spinner";
import useWeather from "./hooks/useWeather";
function App() {
    const { weather, loading, notFound, fetchWeather, hasWeatherData } = useWeather();
    return (_jsxs(_Fragment, { children: [_jsx("h2", { className: styles.title, children: "Check the Weather" }), _jsxs("div", { className: styles.container, children: [_jsx(Form, { fetchWeather: fetchWeather }), loading && _jsx(Spinner, {}), hasWeatherData && _jsx(WeatherDetail, { weather: weather }), notFound && _jsx(Alert, { children: "City not found" })] })] }));
}
export default App;
