import React, { useState } from 'react'
import Home from './components/Home'
import GamePage from './components/GamePage'

const App = () => {
  const [changePage,setchangePage]=useState(false)

  const handleClick=()=>{
    setchangePage((prev)=>!prev)
  }



  return (
    <>
    {changePage?<GamePage/>:<Home click={handleClick} />}
  
      
    </>
  )
}

export default App
