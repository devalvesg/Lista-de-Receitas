import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Letter from './components/Letter';
import Ingredient from './components/Ingredient';
import IngredientPage from './components/IngredientPage';
import Preparation from './components/Preparation';


function App() {

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe-by-letter" element={<Letter />} />
        <Route path="/ingredient-list" element={<Ingredient/>} />
        <Route path="/recipe-by-ingredient" element={<Ingredient/>} />
        <Route path="/ingredients-page" element={<IngredientPage/>} />
        <Route path="/recipe/:name" element={<Preparation/>} />
      </Routes>
    </Router>
  )

}


export default App
