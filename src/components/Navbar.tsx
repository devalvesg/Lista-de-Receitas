import "../css/navbar.css"
import Home from "../assets/casinha-de-cachorro.png"

function Navbar() {

    return (
     <div className="navbar-container">
        <a href=""><img className="navbar-img" src={Home} alt="" /></a>
        <ul className="navbar-items">
            <a href=""><li>Receitas por letras</li></a>
            <a href=""><li>Receitas por ingredientes</li></a>
        </ul>
     </div>
    )
  }
  
  export default Navbar