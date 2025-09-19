import { getPokemon } from './api/pokeapi.js';
import { getRandomMeal } from './api/themealdbapi.js';
import { getStarWarsCharacter } from './api/starwarsapi.js';
import { getRandomCatImage } from './api/thecatapi.js';


async function renderPokemon() {
    const randomId = Math.floor(Math.random() * 898) + 1; 
    const pokemon = await getPokemon(randomId.toString());

    if (pokemon) {
        document.getElementById('poke-imgen').src = pokemon.image;
        document.getElementById('poke-imgen').alt = `Imagen de ${pokemon.name}`;
        document.getElementById('poke-nombre').textContent = pokemon.name.toUpperCase();
        
        const characteristicsList = document.getElementById('poke-carasteristicas');
        characteristicsList.innerHTML = '';

        pokemon.types.forEach(type => {
            const listItem = document.createElement('li');
            listItem.textContent = `Tipo: ${type}`;
            characteristicsList.appendChild(listItem);
        });
    } else {
        document.getElementById('pokemon-del-dia').innerHTML = '<p>No se pudo cargar el Pokémon.</p>';
    }
}

async function renderMeal() {
    const meal = await getRandomMeal();
    
    if (meal) {
        document.getElementById('receta-imgen').src = meal.image;
        document.getElementById('receta-imgen').alt = `Imagen de la receta de ${meal.name}`;
        document.getElementById('receta-nombre').textContent = meal.name;
        
        const characteristicsList = document.getElementById('receta-carasteristicas');
        characteristicsList.innerHTML = '';
        
        const listItem1 = document.createElement('li');
        listItem1.textContent = `Categoría: ${meal.category}`;
        characteristicsList.appendChild(listItem1);

        const listItem2 = document.createElement('li');
        listItem2.textContent = `Instrucciones: ${meal.instructions.substring(0, 50)}...`;
        characteristicsList.appendChild(listItem2);
    } else {
        document.getElementById('receta-del-dia').innerHTML = '<p>No se pudo cargar la receta.</p>';
    }
}

async function renderStarWarsCharacter() {
    const randomId = Math.floor(Math.random() * 82) + 1;
    const character = await getStarWarsCharacter(randomId);

    if (character) {
        document.getElementById('star-wars-nombre').textContent = character.name;

        const characteristicsList = document.getElementById('star-wars-carasteristicas');
        characteristicsList.innerHTML = '';

        const listItem1 = document.createElement('li');
        listItem1.textContent = `Altura: ${character.height} cm`;
        characteristicsList.appendChild(listItem1);

        const listItem2 = document.createElement('li');
        listItem2.textContent = `Año de nacimiento: ${character.birth_year}`;
        characteristicsList.appendChild(listItem2);
    } else {
        document.getElementById('star-wars-del-dia').innerHTML = '<p>No se pudo cargar el personaje.</p>';
    }
}

async function renderCatImage() {
    const cat = await getRandomCatImage();

    if (cat) {
        document.getElementById('gato-imgen').src = cat.url;
        document.getElementById('gato-imgen').alt = `Imagen de un gato con ID ${cat.id}`;
        document.getElementById('gato-nombre').textContent = `ID: ${cat.id}`;
        
        const characteristicsList = document.getElementById('gato-carasteristicas');
        characteristicsList.innerHTML = '';
        
        const listItem1 = document.createElement('li');
        listItem1.textContent = "Un adorable compañero.";
        characteristicsList.appendChild(listItem1);
    } else {
        document.getElementById('Gatos-del-Dia').innerHTML = '<p>No se pudo cargar la imagen del gato.</p>';
    }
}


document.addEventListener('DOMContentLoaded', () => {
    renderPokemon();
    renderMeal();
    renderStarWarsCharacter();
    renderCatImage();
});