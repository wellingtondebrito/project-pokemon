import React, { useContext, useState } from 'react'
import axios from "axios"
import GlobalStateContext from "../../global/globalStateContext"
import { useHistory } from 'react-router';


const Home = () => {
   
    const {states, setters, requests} = useContext(GlobalStateContext)
    const history = useHistory()

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
        let NewPokeDex = [...states.pokeBall, newPokemon]
        
        let newPokeList = [...states.pokemonList]
        newPokeList.splice(index, 1)
    
        setters.setPokeBall(NewPokeDex)
        setters.setPokemonList(newPokeList)
    
    }

   const goToPokeBall = () => {
       history.push("/pokeball")
   }

  /*  const removePokemon = (itemToRemove) => {
        const index = pokemonList.findIndex((item)=> item.name === itemToRemove.name)
        let newPokemon = [...pokemonList]
        if(newPokemon[index].amount === 1){
            newPokemon.splice(index, 1)
        }else{
            newPokemon[index].amount -= 1
        }

        setPokemonList(newPokemon)
    } */
    
    return(
        <div>
           <button onClick={goToPokeBall}>Pokeball</button>
            {
                states.pokemonList.map((pokemon)=>{
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