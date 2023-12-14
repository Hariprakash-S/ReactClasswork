import { useState } from "react";

function StateFunction()
{
    const[carName, setCarName] = useState("Toyota");
    const changeCarName = () => setCarName("Honda")

    const[count, setCount] = useState(0)
    const changeCount = () => setCount(count + 1)

    const decrCount = () => setCount(count - 1)

    return(
        <div>
            <h1>My Car Name is {carName}</h1>
            <button onClick={() => setCarName("Honda")}>Click</button>

            <h1>Count {count}</h1>
            <button onClick={changeCount}>Incre</button>
            <button onClick={decrCount}>decre</button>
        </div>
    )
}

export default StateFunction;