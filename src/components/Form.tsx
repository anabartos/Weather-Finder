import { ChangeEvent, FormEvent, useState } from "react"
import type { SearchType } from "../types"
import { countries } from "../data/countries"
import styles from "./Form.module.css"
import Alert from "./Alert/Alert"

type FormProps = {
    fetchWeather: (search: SearchType) => Promise<void>
}

export default function Form({ fetchWeather }: FormProps
) {

    const [search, setSearch] = useState<SearchType>({
        city: "",
        country: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }
    const [alert, setAlert] = useState("")

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setAlert("")

        if (Object.values(search).includes("")) {
            setAlert("All fields are required")
            return
        }
        fetchWeather(search)
    }

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}>
            {alert && <Alert>{alert}</Alert>}
            <div className={styles.field}>
                <label htmlFor="city">City:</label>
                <input
                    id="city"
                    type="text"
                    name="city"
                    placeholder="City"
                    value={search.city}
                    onChange={handleChange} />
            </div >
            <div className={styles.field}>
                <label htmlFor="country">Country:</label>
                <select
                    id="country"
                    value={search.country}
                    name="country"
                    onChange={handleChange}
                >
                    <option value="">--- Select one country ---</option>
                    {countries.map(country => (
                        <option
                            key={country.code}
                            value={country.code}
                        >{country.name}</option>
                    ))}
                </select>
            </div>
            <input className={styles.submit}
                id="country"
                type="submit"
                value="Check the weather"

            />

        </form>
    )
}

