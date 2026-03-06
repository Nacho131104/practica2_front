import type { PaisDetalle } from "@/types";
import { getCountryByName } from "@/api/countries";
import "./country.css";
import BackButton from "./BackButton";

type CountryPageProps  = {
  params: { name: string };
}

const  CountryPage = async ({ params }: CountryPageProps) => {
  const resolvedParams = await params;
  const name = resolvedParams.name;
  // Obtener datos del país
  let country: PaisDetalle | null = null;
  console.log("CountryPage params:", resolvedParams);
  try {
    const data = await getCountryByName(name);
    console.log("API response for", name, ":", data);
    country = data[0] as PaisDetalle;
  } catch (e) {
    console.error("Error al obtener país:", e);
    country = null;
  }

  if (!country) {
    return <div className="page"><p>No se encontró el país.</p></div>;
  }

  return (
    <div className="page">
      <div className="country">
        <h1>{country.name.common}</h1>
        <img src={country.flags.png} alt={country.name.common} />
        <h2>Población: {country.population}</h2>
        <h3>Capital: {country.capital?.[0] || ""}</h3>
        <h3>Región: {country.region}</h3>
        <h3>Subregión: {country.subregion}</h3>
        <h3>Continente: {country.continents?.[0] || ""}</h3>
        <p>Código: {country.cca3}</p>
        <BackButton />
      </div>
    </div>
  );
}
export default CountryPage;