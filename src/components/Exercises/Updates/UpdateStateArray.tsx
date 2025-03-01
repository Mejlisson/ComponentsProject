import { useState } from "react";

export default function MyComponent(){

    const [foods, setFoods] = useState(["Apple", "Banan", "Orange",]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
                        document.getElementById("foodInput").value = ""; //reset

        setFoods(f =>[...foods, newFood]); //Updater funcktion
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_, i) => i !==index )); //"element" parametr replaced with _ to ignore
        
    }

    return(
        <div>
            <h2>List of Food:</h2>
            <ul>
                {foods.map((food, index)=> <li key={index} onClick={() => handleRemoveFood(index)}> {food}</li>)} 
            </ul>{/* handleRemove funkar genom att klicka på listan*/}
            <input type="text" id="foodInput" placeholder="Endet food name"/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}