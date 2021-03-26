import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useHistory } from 'react-router';


const Home = () => {

    const [pokemonList, setPokemonList] = useState([]);
    const [pokeball, setPokeball] = useState([])
    
    const history = useHistory()

    const goToCreate = () => {
        history.push("/pokeball")
    }
  

    useEffect(()=>{
        getPokemons()
        
    },[])

    const goToPokeDetail=(id)=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(()=>{
          history.push(`pokeDetails/${id}`)
        }).catch((error)=>{
          alert("Oops!!!", error.message)
        })
        
    }

    const addPokeball = (newPokemon) => {
        const index = states.pokemonList.findIndex((i)=> i.name === newPokemon.name)
        let NewPokeDex = [... states.pokeDex, newPokemon]
        
        let newPokeList = [...states.pokemonList]
        newPokeList.splice(index, 1)
    
        setPokeball(NewPokeDex)
        setPokemonList(newPokeList)
    
    }

    const getPokemons = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
        .then((response)=>{
            setPokemonList(response.data.results)
        }).catch((error)=>{
            alert("Algo deu errado! ", error.message)
        })
    }

    const removePokemon = (itemToRemove) => {
        const index = pokemonList.findIndex((item)=> item.name === itemToRemove.name)
        let newPokemon = [...pokemonList]
        if(newPokemon[index].amount === 1){
            newPokemon.splice(index, 1)
        }else{
            newPokemon[index].amount -= 1
        }

        setPokemonList(newPokemon)
    }
    
    return(
        <div>
           <button onClick={goToCreate}>Pokeball</button>
            {
                pokemonList.map((pokemon)=>{
                    return(
                        <div key={pokemon.id}>
                            
                            <p>{pokemon.name}</p>
                            <button onClick={()=>goToPokeDetail(pokemon.name)}>Details</button>
                            <button onClick={()=>addPokeball(pokemon)}>Add Pokemon</button>
                        </div>
                    )
                })
            }
        </div>
        
    )
}

export default Home