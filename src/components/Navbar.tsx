import "../css/navbar.css"
import Home from "../assets/casinha-de-cachorro.png"
import { Link } from 'react-router-dom';

function Navbar() {

   return (
      <div className="navbar-container">
         <Link to={"/"}><img className="navbar-img" src={Home} alt="" /></Link>
         <ul className="navbar-items">
            <Link to={"/recipe-by-letter"}><li>Recipes by letters</li></Link>
            <Link to={"/ingredient-list"}><li>Recipes by ingredients</li></Link>
         </ul>
      </div>
   )
}

export default Navbar