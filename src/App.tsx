import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Input from './components/Input'
import { useEffect, useState } from 'react'
import apiUrl from "../src/axios/config"


function App(props: any) {

  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [inputList, setInputList] = useState(false);
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
    // console.log(recipes)
    getRecipes(
    )
  }, [])


  const inputData = (inputData: Recipe[]) => {
    setRecipes(inputData)
    console.log(recipes)
    // if(recipes == undefined){
    //   return (
    //     <>
    //       <h1>Nenhuma receita com esse nome foi encontrada. Tente novamente</h1>
    //     </>
    //   )
    // }
    // setInputList(true)
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

interface Recipe {
  strMeal: string,
  strMealThumb: string,
  strArea: string,
  strCategory: string,
  strYoutube: string,

  // Adicione outros campos conforme necessário
}

export default App
