import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Letter from './components/Letter';
// import Navbar from './components/Navbar'
// import Card from './components/Card'
// import Input from './components/Input'
// import { useEffect, useState } from 'react'
// import apiUrl from "../src/axios/config"


function App() {

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe-by-letter" element={<Letter />} />
        {/* <Route path="/contact" component={Contact} /> */}
      </Routes>
    </Router>
  )

  // const [recipes, setRecipes] = useState<Recipe[]>([])
  // useEffect(() => {

  //   const getRecipes = async () => {

  //     const newRecipes = [];
  //     try {

  //       for (let i = 0; i < 20; i++) {
  //         const response = await apiUrl.get("/random.php")
  //         const data = response.data

  //         newRecipes.push(data.meals[0])

  //       }
  //     } catch (error) {
  //       console.log(error)
  //     }
  //     setRecipes(newRecipes)

  //   }
  //   getRecipes(
  //   )
  // }, [])


  // const inputData = (inputData: Recipe[]) => {
  //   setRecipes(inputData)
  //   console.log(recipes)

  // }
  // return (
  //   <div>
  //     <div className='nav'>
  //       <Navbar />
  //     </div>
  //     <Input inputData={inputData} />
  //     <div className='container'>
  //       {
  //         //@ts-ignore
  //         recipes.length > 0 && recipes[0] != true ? (recipes.map((recipe, index) => (

  //           <Card
  //             key={index}
  //             strMeal={recipe.strMeal}
  //             strMealThumb={recipe.strMealThumb}
  //             strArea={recipe.strArea}
  //             strCategory={recipe.strCategory}
  //             strYoutube={recipe.strYoutube}
  //           />

  //         ))) : (<h1>{
  //           recipes.length > 0
  //             ? "Nenhuma receita com esse nome foi encontrada. Tente novamente"
  //             : "Carregando..."}
  //         </h1>)
  //       }
  //     </div>

  //   </div>
  // )
}

// interface Recipe {
//   strMeal: string,
//   strMealThumb: string,
//   strArea: string,
//   strCategory: string,
//   strYoutube: string,

// }

export default App
