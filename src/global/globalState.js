import React, {useState, useEffect} from "react"
import axios from "axios"
import GlobalStateContext from './globalStateContext'

const GlobalState = (props) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [pokeBall, setPokeBall] = useState([])

    useEffect(()=>{
        getPokemons()        
    },[])

    const getPokemons = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
        .then((response)=>{
            setPokemonList(response.data.results)
        }).catch((error)=>{
            alert("Algo deu errado! ", error.message)
        })
    }

    const states = { pokemonList, pokeBall };
    const setters = { setPokemonList, setPokeBall };
    const requests = {getPokemons};

    const data = { states, setters, requests };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
   
}

export default GlobalState;