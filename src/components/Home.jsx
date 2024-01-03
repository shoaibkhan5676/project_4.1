import React from 'react'
import styled from "styled-components"
import dices from "../Images/dices.png"

const Home = (props) => {
  return (
    <>
    <Maincontainer>
        <div className="image_div">     
            <img src={dices} alt="Dices" />
        </div>
        <div className='text_div'>
            <h1>Dice Game</h1>
            <button onClick={props.click} >Play Now</button>
        </div>
        
    </Maincontainer>

      
    </>
  )
}

export default Home


const Maincontainer=styled.div`
    
    max-width: 1180px;
    margin: 0 auto;
    height:100vh ;
    display: flex;
    align-items: center;
    .text_div{
        padding: 15px 0;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    
    h1{
        font-size: 90px;
        font-weight: 700;
        line-height: 100px;
        text-transform: uppercase;
        white-space: nowrap;
    }
    button{
        color: white;
        background-color: black;
        padding: 10px;
        min-width: 200px;
        border-radius: 5px;
        border: none;
        margin-top: 5px;
        margin-left: 290px;
        font-size: 16px;
        transition: 0.2s background ease-in;
        cursor: pointer;
    }
    button:hover{
        border: 0.9px solid black;
        color: black;
        background-color: white;
        transition: 0.2s background ease-in;

    }

`

