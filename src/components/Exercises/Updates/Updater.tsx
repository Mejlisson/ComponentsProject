import { useState } from "react";


export default function MyComponent() {

    const [count, setCount] = useState(0);

    function increment () {
        setCount(count + 1); //to update previous state change coutn to ex: (c + 1)
    };

    function decrement () {
        setCount(count - 1); ///to update previous state change coutn (c => c -1)
    };

    function reset () {
        setCount(0); //here we dont need previous
    };


    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={decrement}> Decrement</button>
            <button onClick={reset}> Reset</button>
            <button onClick={increment}> Increment</button>
        </div>

    );
}