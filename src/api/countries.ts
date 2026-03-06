// src/api/countries.ts
import type { Pais } from "@/types";
import axios from "axios";
import { api } from "./axios";

export const getAllCountries = async () => {
  const { data } = await api.get<Pais[]>('/v3.1/all?fields=name,flags,population,cca3');
  return data;
};

export const getCountryByName = async (name?: string) => {
  if (!name) {
    throw new Error("Parámetro 'name' vacío o undefined");
  }
  const safeName = encodeURIComponent(name.trim());

  try {
    const { data } = await api.get<Pais[]>(
      `/v3.1/name/${safeName}?fields=name,flags,population,cca3,capital,region,subregion,continents`
    );
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error('No results');
    }
    return data;
  } catch (err) {
    // Fallback a búsqueda exacta si la flexible devuelve 404
    if (axios.isAxiosError(err) && err.response?.status === 404) {
      const { data } = await api.get<Pais[]>(
        `/v3.1/name/${safeName}?fullText=true&fields=name,flags,population,cca3,capital,region,subregion,continents`
      );
      return data;
    }
    throw err;
  }
};