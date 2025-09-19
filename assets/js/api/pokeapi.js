import { fetchData } from './fetch.js';

export async function getPokemon(nameOrId) {
    const url = `https://pokeapi.co/api/v2/pokemon/${nameOrId.toLowerCase()}`;
    const pokemonData = await fetchData(url);
    if (pokemonData) {
        return {
            name: pokemonData.name,
            id: pokemonData.id,
            image: pokemonData.sprites.front_default,
            types: pokemonData.types.map(typeInfo => typeInfo.type.name)
        };
    }
    return null;
}