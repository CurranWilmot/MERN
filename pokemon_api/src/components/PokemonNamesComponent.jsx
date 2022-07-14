import React, {useState} from 'react';
import DisplayPokemonComponent from '../views/DisplayPokemonComponent';

const PokemonNamesComponent = (props) =>{
    const [pokemon, setPokemon] = useState();
    const [pokemonName, setPokemonName] = useState("");
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






    return(
        <div>
            <h1>Poke some Mons</h1>
            <button onClick={fetchPokemon}>Fetch Pokemon</button>
            {/* <form action={fetchPokemonByName}>
                <input type="text" value={pokemonName} onChange={(e) => setPokemonName(e.target.value)}/>
                <input type="submit" value="Fetch Pokemon!" />
            </form> */}
            <button onClick={() =>fetchPokemonByName('charmander')}>Fetch Charmander</button>

            {
                pokemonByName?
                <div>
                    <h1>{pokemonByName.species.name}</h1>
                    <img src={pokemonByName.sprites.front_shiny} alt="shiny_poke" />
                </div>:
                <h1>Fetch a Charmander by clicking the 'Fetch button!</h1>
            }

            {
                pokemon?
                <div>
                    
                    {pokemon.map((poke, i)=>{
                        return(
                            <>
                                <p key={i}>{poke.name}</p>
                                {/* {() =>fetchPokemonByName(poke.name)}
                                <p>{pokemonByName.species.name}</p>
                                <img src={pokemonByName.sprites.front_shiny} alt="shiny_poke" /> */}
                            </>
                        )
                    })}
                </div>:
                <h1>Fetch a Pokemon by clicking the 'Fetch' button!</h1>

            }


            


        </div>


    );

}


export default PokemonNamesComponent;