import "../css/letter.css"
import Navbar from './Navbar';
import Card from './Card';
import apiUrl from "../axios/config";
// import Recipe from "../models/Recipe";

import { useEffect, useState } from 'react'

function Letter() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [notFound, setnotFound] = useState<boolean>(false);
    const alf = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V", "W", "X", "Y", "Z"];

    const recipeLetter = async (letter: string) => {

        const response = await apiUrl.get(`/search.php?f=${letter}`)
        const data = response.data

        // console.log(data.meals)
        setRecipes(data.meals)
        setnotFound(false)
        if (!data.meals || data.meals.length == 0) {
            setRecipes([])
            setnotFound(true)
        }
    }
    return (
        <>
            <Navbar />
            <div className="container">
                <header className='letters'>
                    {alf.map((letter, index) => (
                        <button key={index} onClick={() => recipeLetter(letter)}>{letter}</button>
                    ))}
                </header>
                {
                    //@ts-ignore
                    notFound == false ? (recipes.map((recipe, index) => (

                        <Card
                            key={index}
                            strMeal={recipe.strMeal}
                            strMealThumb={recipe.strMealThumb}
                            strArea={recipe.strArea}
                            strCategory={recipe.strCategory}
                            strYoutube={recipe.strYoutube}
                        />

                    ))) : <h1>Nenhuma receita com essa letra foi encontrada. Tente novamente</h1>
                }

            </div>
        </>
    );
};

export default Letter;
