import React, { useContext } from "react"
import GlobalStateContext from "../../global/globalStateContext"

const Pokeball = () => {

    const {states, setters} = useContext(GlobalStateContext)

    const removePokemon = (itemToRemove) => {
        const index = states.pokemonList.findIndex((item)=> item.name === itemToRemove.name)
        let newPokemon = [...states.pokemonList]
        if(newPokemon[index].amount === 1){
            newPokemon.splice(index, 1)
        }else{
            newPokemon[index].amount -= 1
        }

        setters.setPokemonList(newPokemon)

    return(
        <div>
            {
                states.pokeBall.map((pokemon)=>{
                    return(
                        <div>
                            <p>{pokemon.name}</p>
                            <button onClick={removePokemon}>Remove Pokemon</button>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default Pokeball