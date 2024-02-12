import React, { useState } from 'react'

function Inputs() {
    const [text,setText] = useState("")
    const [text2,setText2] = useState("")
    var [items,setItems] = useState([])

    function handleItem(){
        if(text != "" || text != "")
        {
            let item = {
                inputText: text,
                inputText2: text2,
            }
            let updatedItems = [...items];
            updatedItems.push(item);
            setItems(updatedItems);
            setText("")
            setText2("")
        }
        else
        {
            alert("Enter values...")
        }
    }
    function handleDel(){
        let delItem = [...items];
        delItem.splice(-1,1);
        setItems(delItem);
    }

    function handleClr(){
        setText("")
        setText2("")
    }


  return (
    <div className='Input-box'>
        <div className='input-container'>
            <div className="inputs">
                <input type="text" placeholder='Type Something...' value={text} onChange={(e) => {setText(e.target.value)}} />
                <input type="text" placeholder='Something...' value={text2} onChange={(e) => {setText2(e.target.value)}} />
            </div>
            <div>            
                <button onClick={(e) =>{handleItem(e)}}>Add</button>
                <button onClick={(e) =>{handleDel(e)}}>Del</button>
                <button onClick={handleClr}>clr</button>
            </div>

        </div>

        <div className='boxes'>
            {items.map((x,i) => {
                return(
                    <div className='box-item' key={i}>
                        <h3>Text 1 : {x.inputText}</h3>
                        <p>Text 2 : {x.inputText2}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Inputs