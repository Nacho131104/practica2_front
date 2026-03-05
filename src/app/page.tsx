"use client"

import Image from "next/image";
import "./page.css"
import type { Pais } from "@/types";
import { useState,useEffect } from "react";
import { getAllCountries, getCountryByName } from "@/api/countries";
import Country from "@/components/Country";
const Home = () =>{

  const [countries, setCountries] = useState<Pais[]>([])
  const [pais, setPais] = useState<string>("")

  useEffect(()=>{
    const loadData = async() =>{
      try{
        const countries = await getCountryByName(pais)
        setCountries(countries)
      }catch(e){
        console.log(e)
      }
      loadData()
    }
  },[pais])
  
  useEffect(()=>{
      const loadData = async() =>{
        try{
          const countries = await getAllCountries()
          setCountries(countries)
        }catch (e ){
            console.log(e)
        }
      }
      loadData()
  },[])

  return (
    <div className={"page"}>

      <input />
      <button onClick = {()=> setPais(pais)}>Buscar por nombre</button>
        {countries.map((c) => <Country name={c.name.common} flag={c.flags.png} population={c.population}/> )}

    </div>
  );
}

export default Home; 