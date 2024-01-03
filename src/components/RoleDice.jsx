import React from 'react'
import styled from 'styled-components'

const RoleDice = (props) => {
    const Lightbutton={
        "backgroundColor": "white",
        "color":" black",
        "border": "1px solid black",
    }
    const Darkbutton={
        "backgroundColor": "black",
        "color":" white",
        "border": "none",
    }



  return (
    <>
    <Container>
        <img onClick={props.imageClick} src={props.image} alt="Dice" />
        <p>Click on Dice to Roll</p>
        <button onClick={props.resetClick} style={Lightbutton}>Reset Score</button>
        <button onClick={props.rulesClick} style={Darkbutton} >{props.buttonText}</button>


    
    </Container>

    
      
    </>
  )
}

export default RoleDice


const Container=styled.div`
    width: 250px;
    height: 370px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 5px;
    justify-content: center;
    align-items: center;

    img{
        width: 100%;
        height: 220px;
        cursor: pointer;
    }
    p{
        text-align: center;
        font-weight: 500;
        margin-bottom: 5px;

    }
    button{
        padding: 10px 18px;
        border-radius: 5px;
        margin: 8px 0;
        min-width: 220px;
        cursor: pointer;
    }


`

