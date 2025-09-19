import { fetchData } from './fetch.js';

export async function getStarWarsCharacter(id) {
    const url = `https://swapi.dev/api/people/${id}/`;
    const characterData = await fetchData(url);

    if (characterData) {
        return {
            name: characterData.name,
            height: characterData.height,
            birth_year: characterData.birth_year
        };
    }
    return null;
}