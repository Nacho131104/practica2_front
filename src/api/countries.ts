import type { Pais } from "@/types";
import { api } from "./axios"





export const getAllCountries = async () => {
    // Añadimos 'population' a los campos
    const response = await api.get<Pais[]>("/v3.1/all?fields=name,flags,population");
    return response.data;
};

// Nota: La API de 'name' devuelve un ARRAY, aunque solo busques uno.
// Es mejor tiparlo como Country[] para evitar errores de acceso.
export const getCountryByName = async (name: string) => {
    const response = await api.get<Pais[]>(`/v3.1/name/${name}?fullText=true`);
    return response.data;
}