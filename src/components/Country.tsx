"use client"
import Link from "next/link";
import "./country.css"

type params = {
    name: string,
    flag: string,
    population: number
}

const Country = ({name, flag, population}: params) => {
    return (
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