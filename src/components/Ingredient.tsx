import "../styles/card.css"
import "../styles/ingredient-list.css"
import Navbar from './Navbar';
import apiUrl from "../axios/config";
import lupa from "../assets/procurar (1).png";

import { useEffect, useState } from 'react'


function Ingredient() {
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [value, setValue] = useState('');
    const cachedIngredients = localStorage.getItem('cachedIngredients');

    const getIngredients = async () => {
        if (cachedIngredients) {
            setIngredients(JSON.parse(cachedIngredients));
        } else {
            const response = await apiUrl.get(`/list.php?i=list`);
            const data = response.data.meals.map((item: any) => item.strIngredient);

            // Atualiza o cache e o estado local
            localStorage.setItem('cachedIngredients', JSON.stringify(data));
            setIngredients(data);
        }
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
                    {ingredients.map((ingredient: string, index: number) =>
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
