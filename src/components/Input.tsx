import lupa from "../assets/procurar (1).png"
import "../styles/input.css"
import apiUrl from "../axios/config";

function Input({ inputData } : any) {

   const handleChange = async(e:any) => {
      try{
         const response = await apiUrl.get(`/search.php?s=${e.target.value}`)
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