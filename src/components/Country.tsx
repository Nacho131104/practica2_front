"use client"
import Link from "next/link"; // Importante para la navegación
import "./country.css"

type params = {
    name: string,
    flag: string,
    population: number
}

const Country = ({name, flag, population}: params) => {
    return (
        // Envolvemos todo en un Link que apunta a la ruta dinámica
        <Link href={`/country/${encodeURIComponent(name)}`}>
            <div className="country-card">
                <h1>{name}</h1>
                <img src={flag} alt={name}  />
                <h2>Población: {population}</h2>
            </div>
        </Link>
    )
}

export default Country;