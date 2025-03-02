//useEffect() = React Hook that tells React do some code when : 
            //  useEffect(() => {})              Runs after every re-render
            //  useEffect(() => {}, [])          Runs only on mount
            //  useEffect(() => {}, [value])     Runs on mount + when value changes

import { useState, useEffect } from "react";

export default function MyComponent() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() =>{
        document.title = `Count: ${count} ${color}`;  //What would we like to do, every time this component rerenders?
    },[count, color]); // empty array [] can be added(Runs only on mount)the Title uppdates only ones!    

    function addCount(){
        setCount(c => c + 1);
    }

    function subtractCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }
    return(
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <button onClick={changeColor}> Change Color</button>
        </div>
    );
}