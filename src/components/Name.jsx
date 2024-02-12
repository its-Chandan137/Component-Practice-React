import React, { useState } from 'react'

function Name() {
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")

  const fullName = `${firstName} ${lastName}`; 

  return (
    <div className='name'>
      <input type="text"value={firstName} onChange={(e) =>{setFirstName(e.target.value)}} placeholder='Frst Name...' />
      <input type="text"value={lastName} onChange={(e) =>{setLastName(e.target.value)}} placeholder='Last Name...' />
      {fullName}
    </div>
  )
}

export default Name