"use client"
import "./page.css"
import type { Pais } from "@/types";
import { useState, useEffect } from "react";
import { getAllCountries, getCountryByName } from "@/api/countries";
import Country from "@/components/Country";

const Home = () => {
  const [countries, setCountries] = useState<Pais[]>([]);
  const [pais, setPais] = useState<string>(""); // Estado para el input
  const [loading, setLoading] = useState<boolean>(false);

  // 1. Carga inicial de todos los países
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const data = await getAllCountries();
        setCountries(data);
      } catch (e) {
        console.error(e);
      }
    };
    loadInitialData();
  }, []);

  // 2. Función para el botón de buscar
  const handleSearch = async () => {
    if (!pais.trim()) {
      // Si el input está vacío, recargamos todos
      const all = await getAllCountries();
      setCountries(all);
      return;
    }

    setLoading(true);
    try {
      const result = await getCountryByName(pais);
      setCountries(result);
    } catch (e) {
      console.error("No se encontró el país", e);
      setCountries([]); // Limpiamos la lista si no hay resultados
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="search-container">
        <input 
          type="text"
          placeholder="Nombre del país..."
          value={pais}
          onChange={(e) => setPais(e.target.value)}
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? "Buscando..." : "Buscar por nombre"}
        </button>
      </div>

      <div className="countries-list">
        {countries.length > 0 ? (
          countries.map((c) => (
            <Country 
              key={c.name.common} 
              name={c.name.common} 
              flag={c.flags.png} 
              population={c.population}
            />
          ))
        ) : (
          !loading && <p>No se encontraron resultados.</p>
        )}
      </div>
    </div>
  );
}

export default Home;