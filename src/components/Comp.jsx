import React, { useState,useEffect } from 'react'
import Inputs from './Inputs';

function Comp() {
    let [col,setCol] = useState("black");
    let [col2,setCol2] = useState("brown");

    function running(col){
        col = setCol(col == "black" ? "brown" : "black")
        col2 = setCol2(col2 == "black" ? "brown" :  "black")
    }

    function add() {

    }

    useEffect(() => {
        document.body.style.backgroundColor = col
        document.getElementById('btn1').style.backgroundColor = col2
        console.log("col1 = " + col)
        console.log("col2 = " + col2)
      }, [col,col2])

  return (
    <div>
        <button id='btn1' onClick={() => running(col)}>Click!</button>
        <Inputs/>
    </div>
  )
}

export default Comp