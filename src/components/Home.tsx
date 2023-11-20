import '../css/home.css'
import Navbar from './Navbar'
import Card from './Card'
import Input from './Input'
import { useEffect, useState } from 'react'
import apiUrl from "../axios/config"

function Home() {


    const [recipes, setRecipes] = useState<Recipe[]>([])
    useEffect(() => {

        const getRecipes = async () => {

            const newRecipes = [];
            try {

                for (let i = 0; i < 20; i++) {
                    const response = await apiUrl.get("/random.php")
                    const data = response.data

                    newRecipes.push(data.meals[0])
                }
            } catch (error) {
                console.log(error)
            }
            
            setRecipes(newRecipes)

        }
        getRecipes(
            )
        }, [])
        
        console.log(recipes)
    
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
                            ? "Nenhuma receita com esse nome foi encontrada. Tente novamente"
                            : "Carregando..."}
                    </h1>)
                }
            </div>

        </div>
    )
}




export default Home