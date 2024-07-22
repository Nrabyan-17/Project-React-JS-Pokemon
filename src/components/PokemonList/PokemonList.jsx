import { useState } from "react";
import pokemonJSON from "../../Data/pokemon.json";
import './PokemonList.css';
import PokemonItem from "../PokemonItem/PokemonItem";


const PokemonList = () => {

    const [pokemons] = useState(pokemonJSON);
    const [filterPokemons, setFilterPokemons] = useState(pokemonJSON);

    const handleSearch = (e) => {
        let search = pokemons.filter((item) => {
           return item.name.toLowerCase().includes(e.target.value);
        })

        setFilterPokemons(search)
    }

    return (

        <div>

            <input 
            type="text" 
            placeholder="cari pokemon..."
            className="search"
            onChange={handleSearch}
            />

            <div className="list-pokemon">
                {filterPokemons.length == 0 
                ? ( <div>Data tidak ditemukan</div>)
                : (filterPokemons.map((item) => (
                    <PokemonItem 
                     key={item.id}
                     pokemon={item}
                    />
                 ))
                )}
            </div>
        </div>
    )
}

export default PokemonList