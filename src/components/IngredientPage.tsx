import Navbar from './Navbar';
import Card from './Card';
import apiUrl from "../axios/config";
import '../styles/ingredient-page.css'

import { useEffect, useState } from 'react'
import { Recipe } from '../models/Recipe';

function IngredientPage() {
    const [recipes, setRecipe] = useState<Recipe[]>([])
    const queryString = window.location.search;

    const params = new URLSearchParams(queryString);

    const ingredientName = params.get('query');

    const getRecipes = async () => {
        const response = await apiUrl.get(`/filter.php?i=${ingredientName}`)
        const data = response.data
        setRecipe(data.meals);

    }
    console.log(recipes)
    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <>
            <Navbar />
            <header>
                <h1>Result of recipes that include {ingredientName}</h1>
            </header>
            <div className='container'>
                {
                    (recipes.map((recipe, index) => (

                        <Card
                            key={index}
                            strMeal={recipe.strMeal}
                            strMealThumb={recipe.strMealThumb}
                            strArea={recipe.strArea}
                            strCategory={recipe.strCategory}
                            strYoutube={recipe.strYoutube}
                        />

                    )))
                }
            </div>
        </>
    );
};

export default IngredientPage;
