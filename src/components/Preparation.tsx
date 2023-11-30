import { useState, useEffect } from 'react'
import apiUrl from "../axios/config";
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { Recipe } from "../models/Recipe";
import "../styles/preparation.css"

function Preparation() {
    const [ingredients, setIngredients] = useState<string[]>([])
    const [measures, setMeasures] = useState<string[]>([])
    const [recipe, setRecipe] = useState<Recipe>()
    const params = useParams();

    useEffect(() => {
        const getResponse = async () => {
            const response = await apiUrl.get(`/search.php?s=${params.name}`)
            getInstructions(response)
            setRecipe(response.data.meals[0])
            console.log(response.data.meals[0])
        }

        getResponse()
    }, [params.name]);

    const getInstructions = (response: any) => {

        var num = 1
        var newIngredients = []
        var newMeasures = []

        while (response.data.meals[0]["strIngredient" + num] != "" && response.data.meals[0]["strIngredient" + num] != null) {
            newIngredients.push(response.data.meals[0]["strIngredient" + num]);
            newMeasures.push(response.data.meals[0]["strMeasure" + num]);
            num++;
        }
        setIngredients(newIngredients)
        setMeasures(newMeasures)

    }

    return (
        <>
            <Navbar />
            <div className='container-preparation'>
                <div className='description'>
                    <img src={recipe?.strMealThumb} alt="recipe-image" />
                    <div className='text-details'>
                        <h2>{recipe?.strMeal}</h2>
                        <div className='details'>
                            <h4>{recipe?.strCategory}</h4>
                            <h4>{recipe?.strArea}</h4>
                        </div>
                    </div>
                </div>
                <div className='instructions'>
                    <h1>Instructions</h1>
                    <h4>{recipe?.strInstructions}</h4>
                </div>
                <div className='ingredients'>
                    <h1>Ingredients</h1>
                    <ul>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient} - <span>{measures[index]}</span></li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Preparation;

