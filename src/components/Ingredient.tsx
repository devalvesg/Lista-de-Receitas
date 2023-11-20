import "../css/card.css"
import "../css/ingredient-list.css"
import Navbar from './Navbar';
import apiUrl from "../axios/config";
import lupa from "../assets/procurar (1).png";

import { useEffect, useState } from 'react'


function Ingredient() {
    //FAZER PARECIDO COM O RECEITA POR LETRAS, SENDO SEPARADA POR LISTA, AO CLICAR VAI PRA PAGINA? OU MOSTRA TODAS RECEITAS DISPONIVEIS COM O INGREDIENTE
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [value, setValue] = useState('');

    const getIngredients = async () => {
        const response = await apiUrl.get(`/list.php?i=list`)
        const data = response.data.meals.map((item: any) => item.strIngredient)
        setIngredients(data);

    }
    useEffect(() => {
        getIngredients();
    }, []);


    return (
        <>
            <Navbar />
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Ingredient name"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button ><img src={lupa} alt="" /></button>
            </div>
            <div className="ingredient-list-container">
                <ul>
                    {ingredients.map((ingredient: string, index:number) =>
                        ingredient.toUpperCase().includes(value.toUpperCase()) ?
                            (
                                <li key={index}><a href={`ingredients-page?query=${encodeURIComponent(ingredient)}`}>{ingredient}</a></li>
                            ) : null)}
                </ul>
            </div>
        </>
    );
};

export default Ingredient;
