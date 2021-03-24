import React, { useState } from 'react'

export default function UseStateHook() {
    const [state, setstate] = useState({
        number: 1
    });
    let [ number,setNumber] = useState(0)
    return (
        <div className="container">
            <h1>{state.number} - {number}</h1>
           <button className="btn btn-danger" onClick={() => {
               setstate({
                   number : state.number + 1,
               })
               setNumber(number + 1);
           }}>+</button>
        </div>
    )
}
