"use client"
import "./country.css" // <--- Añade esta línea

type params = {
    name: string,
    flag: string,
    population: number
}

const Country = ({name, flag, population}: params) => {
    return (
        <div className="country-card">
            <h1>Name: {name}</h1>
            <img src={flag} alt={name} style={{ width: '300px' }} />
            <h2>Population: {population}</h2>
        </div>
    )
}

export default Country;