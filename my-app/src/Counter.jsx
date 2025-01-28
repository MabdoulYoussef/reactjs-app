import { useState } from "react";


function Counter() {
    const [Count , SetCount] = useState(0)
    return (<div>
        <p>Count : {Count}</p>
        <button onClick={() => SetCount(Count + 1)}>Increment</button>
        <button onClick={() => SetCount(Count - 1)}>Decrement</button><br />
        <button onClick={() => SetCount(Count + 10)}>+ 10</button>

        <button onClick={() => SetCount(0)}>Reset</button>
    </div>
    )
}
export default Counter;




