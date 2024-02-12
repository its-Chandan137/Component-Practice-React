import React, { useEffect, useState } from 'react'

function Count() {
    const [count,setCount] = useState(0)

    useEffect(() => {
        console.log(count)
    },[count])

    function changeCount(num){
        setCount((currentCount)=>{
            return currentCount + num;
        })
    }
  return (
    <div className='count'>
        <button onClick={() =>{changeCount(-1)}}>-</button>
        <h3>{count}</h3>
        <button onClick={() =>{changeCount(1)}}>+</button>
    </div>
  )
}

export default Count