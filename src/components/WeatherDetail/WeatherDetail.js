import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { formatTemperature } from "../../helpers/helpers";
import styles from "./WeatherDetail.module.css";
export default function WeatherDetail({ weather }) {
    return (_jsxs("div", { className: styles.container, children: [_jsxs("h3", { children: ["This is the weather of: ", _jsx("span", { className: styles.cityName, children: weather.name })] }), _jsxs("p", { className: styles.current, children: [formatTemperature(weather.main.temp), "\u00B0C"] }), _jsxs("div", { className: styles.temperatures, children: [_jsxs("p", { children: ["Min: ", _jsxs("span", { children: [formatTemperature(weather.main.temp_min), "\u00B0C"] })] }), _jsxs("p", { children: ["Max: ", _jsxs("span", { children: [formatTemperature(weather.main.temp_max), "\u00B0C"] })] })] })] }));
}
