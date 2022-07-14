import React, {useState} from 'react';
import DisplayPokemonComponent from '../views/DisplayPokemonComponent';
import axios from "axios"


const PokemonNamesComponent = (props) =>{
    const [pokemon, setPokemon] = useState();
    const [pokemonByName, setPokemonByName] = useState();



    const fetchPokemon = () =>{
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=2000`)
            .then(response => {
                return response.json()
            })
            .then(pokemonJsonResponse => {
                setPokemon(pokemonJsonResponse.results);
            })
            .catch(err=> console.log("catch... " + err))
    }

    const fetchPokemonByName = (pokeName) =>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then(secondResponse => {
                return secondResponse.json()
            })
            .then(pokemonNameJsonResponse => {
                setPokemonByName(pokemonNameJsonResponse);
            })
            .catch(err=> console.log("catch... " + err))
    }

    // const fetchPokemonAwait = async() => {
    //     const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2000')
    //     const jsonResponse = await response.json()
    //     setPokemon(jsonResponse.results)
    // }

    const fetchPokemonAwait2 = async()=>{
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=2000`)
            const jsonResponse = await response.json()
            setPokemon(jsonResponse.results)
        }
        catch(err){
            setPokemon();
            alert("The pokemon are not available")
        }
    }

    const fetchPokemonAxios = () =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=2000`)
        .then(response => setPokemon(response.data.results))
        .catch(err=> console.log(err))
    }

    const fetchPokemonAxiosAsync = async() =>{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=2000`)
        setPokemon(response.data.results)
    }

    return(
        <div>
            <h1>Poke some Mons</h1>
            <button onClick={fetchPokemon}>Fetch Pokemon</button>
            <button onClick={fetchPokemonAwait2}>Fetch Pokemon with Await</button>
            <button onClick={fetchPokemonAxiosAsync}>Fetch Pokemon with Axios Async</button>
            <button onClick={() =>fetchPokemonByName('charmander')}>Fetch Charmander</button>

            {
                pokemonByName?
                <div>
                    <h1>{pokemonByName.species.name}</h1>
                    <img src={pokemonByName.sprites.front_shiny} alt="shiny_poke" />
                </div>:
                <h1>Fetch a Charmander by clicking the 'Fetch Charmander' button!</h1>
            }

            {
                pokemon?
                <div>
                    
                    {pokemon.map((poke, i)=>{
                        return(
                            <>
                                <p key={i}>{poke.name}</p>
                                {/* {() => fetchPokemonByName(poke.name)}
                                <img src={pokemonByName.sprites.front_shiny} alt="shiny_poke" /> */}
                            </>
                        )
                    })}
                </div>:
                <h1>Fetch a Pokemon by clicking the 'Fetch Pokemon' button!</h1>

            }


            


        </div>


    );

}


export default PokemonNamesComponent;