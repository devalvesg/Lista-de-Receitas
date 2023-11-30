import '../styles/home.css'
import Navbar from './Navbar'
import Card from './Card'
import Input from './Input'
import { useEffect, useState } from 'react'
import apiUrl from "../axios/config"
import { Recipe } from '../models/Recipe'

function Home() {

    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        const numRequests = Array.from({ length: 20 }, (_, index) => index + 1);
  
      const fetchRecipe = async () => {
        try {
          const response = await apiUrl.get(`/random.php`);
          return response.data.meals[0]; 
        } catch (error) {
          throw error;
        }
      };
  
      const fetchRecipes = async () => {
          const recipePromises = numRequests.map(() => fetchRecipe());
          const recipesData = await Promise.all(recipePromises);
          setRecipes(recipesData);
      };
  
      fetchRecipes();
    }, []);
        
    
    const inputData = (inputData: Recipe[]) => {
        setRecipes(inputData)
    }
    return (
        <div>
            <div className='nav'>
                <Navbar />
            </div>
            <Input inputData={inputData} />
            <div className='container'>
                {
                    //@ts-ignore
                    recipes.length > 0 && recipes[0] != true ? (recipes.map((recipe, index) => (

                        <Card
                            key={index}
                            strMeal={recipe.strMeal}
                            strMealThumb={recipe.strMealThumb}
                            strArea={recipe.strArea}
                            strCategory={recipe.strCategory}
                            strYoutube={recipe.strYoutube}
                        />

                    ))) : (<h1>{
                        recipes.length > 0
                            ? "No recipe with that name was found. Try again"
                            : "Loading..."}
                    </h1>)
                }
            </div>

        </div>
    )
}




export default Home