import { getRandomCatImage } from '../api/thecatapi.js';
import { capitalizeFirstLetter } from '../api/utils.js';

// Función principal para renderizar las 10 imágenes de gatos
async function renderTenCats() {
    
    for (let i = 1; i <= 10; i++) {
        document.getElementById(`gato-nombre-${i}`).textContent = 'Cargando...';
        document.getElementById(`gato-imgen-${i}`).src = 'https://placehold.co/160x160/f3e8ff/c084fc?text=...';
    }

    const catPromises = [];
    for (let i = 0; i < 10; i++) {
        catPromises.push(getRandomCatImage());
    }

    const allCats = await Promise.all(catPromises);

    allCats.forEach((cat, index) => {
        const cardIndex = index + 1;
        
        if (cat) {
            document.getElementById(`gato-imgen-${cardIndex}`).src = cat.url;
            document.getElementById(`gato-imgen-${cardIndex}`).alt = `Imagen de un gato con ID ${cat.id}`;
            document.getElementById(`gato-nombre-${cardIndex}`).textContent = `ID: ${cat.id}`;

            const characteristicsList = document.getElementById(`gato-carasteristicas-${cardIndex}`);
            characteristicsList.innerHTML = '';

            const breedLi = document.createElement('li');
            breedLi.textContent = `Raza: ${cat.breed || 'Desconocida'}`;
            characteristicsList.appendChild(breedLi);

            
        } else {
            document.getElementById(`gato-nombre-${cardIndex}`).textContent = 'Error';
            document.getElementById(`gato-imgen-${cardIndex}`).src = 'https://placehold.co/160x160/f3e8ff/c084fc?text=Error';
            document.getElementById(`gato-carasteristicas-${cardIndex}`).innerHTML = '<li>No se pudo cargar la información.</li>';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const refreshButton = document.getElementById('btn-refrescar');
    refreshButton.addEventListener('click', renderTenCats);
    renderTenCats();
});

/*
const dropdownBtn = document.getElementById('dropdown-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

dropdownBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('dropdown-open');
});*/