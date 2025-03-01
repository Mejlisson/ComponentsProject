
import { useState } from "react";


export default function MyComponent(){

    const [car, setCar] = useState({year:2024, make:"Ford", model:"Mustang" }); //Car is an object

    function handleYearChange(event){
        setCar(c =>({...c, year: event.target.value})); //save updates
    }
    function handleMakeChange(event){
        setCar (c => ({...c, make: event.target.value}));
    }
    function handleModelChange(event){
        setCar (c => ({...c, model: event.target.value}));
        
    }

    return (
        <div>
            <p>You're Car is: {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange}/> <br/>
            <input type="text" value={car.make} onChange={handleMakeChange}/> <br/>
            <input type="text" value={car.model} onChange={handleModelChange}/> <br/>
        </div>

    );
}