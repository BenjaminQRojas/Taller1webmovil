import { fetchData } from './fetch.js';

export async function getRandomMeal() {
    const url = "https://www.themealdb.com/api/json/v1/1/random.php";
    const mealData = await fetchData(url);

    if (mealData && mealData.meals) {
        const meal = mealData.meals[0];
        return {
            name: meal.strMeal,
            image: meal.strMealThumb,
            category: meal.strCategory,
            instructions: meal.strInstructions
        };
    }
    return null;
}