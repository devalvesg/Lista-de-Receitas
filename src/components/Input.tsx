import React from "react";
import { useEffect, useState } from 'react'
import lupa from "../assets/procurar (1).png"
import "../css/input.css"
import apiUrl from "../axios/config";

function Input({ inputData } : any) {
   const [recipe, setRecipe] = useState('');
   const handleChange = async(e:any) => {
      setRecipe(e.target.value);
      try{
         const response = await apiUrl.get(`/search.php?s=${recipe}`)
         inputData(response.data.meals || [true])
      }
      catch(error){
         console.log(error)
      }
   }
   
   return (
      <div className="input-container">
         <input type="text" onChange={handleChange} placeholder="Recipe name" />
         <img src={lupa} alt="" />
      </div>
   )
}

export default Input