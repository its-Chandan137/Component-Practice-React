import React, { useState } from 'react'

function Change() {
    const [color,setColor] = useState("white")

  return (
    <div className='main-change'>
        <div className="bigBox" style = {{backgroundColor: color}}>
        </div>
        <div>
            <input type="text" placeholder="Try 'blue'..." onChange={(e) =>{setColor(e.target.value)}} />
        </div>
    </div>
  )
}

export default Change