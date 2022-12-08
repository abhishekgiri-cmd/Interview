import React from 'react'
import { useState } from 'react'
import "./style.css";
export const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <div className='div2'>
            <h1 className='para'>Count : {count} </h1>
            <button className='btn' onClick={(e)=>setCount(count+1)}>Increment</button>

        </div>
   

    </div>
  )
}
