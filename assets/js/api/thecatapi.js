import { fetchData } from './fetch.js';

export async function getRandomCatImage() {
    const url = "https://api.thecatapi.com/v1/images/search";
    const catData = await fetchData(url);

    if (catData && catData.length > 0) {
        return {
            id: catData[0].id,
            url: catData[0].url
        };
    }
    return null;
}