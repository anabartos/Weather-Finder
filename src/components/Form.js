import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { countries } from "../data/countries";
import styles from "./Form.module.css";
import Alert from "./Alert/Alert";
export default function Form({ fetchWeather }) {
    const [search, setSearch] = useState({
        city: "",
        country: ""
    });
    const handleChange = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    };
    const [alert, setAlert] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setAlert("");
        if (Object.values(search).includes("")) {
            setAlert("All fields are required");
            return;
        }
        fetchWeather(search);
    };
    return (_jsxs("form", { className: styles.form, onSubmit: handleSubmit, children: [alert && _jsx(Alert, { children: alert }), _jsxs("div", { className: styles.field, children: [_jsx("label", { htmlFor: "city", children: "City:" }), _jsx("input", { id: "city", type: "text", name: "city", placeholder: "City", value: search.city, onChange: handleChange })] }), _jsxs("div", { className: styles.field, children: [_jsx("label", { htmlFor: "country", children: "Country:" }), _jsxs("select", { id: "country", value: search.country, name: "country", onChange: handleChange, children: [_jsx("option", { value: "", children: "--- Select one country ---" }), countries.map(country => (_jsx("option", { value: country.code, children: country.name }, country.code)))] })] }), _jsx("input", { className: styles.submit, id: "country", type: "submit", value: "Check the weather" })] }));
}
