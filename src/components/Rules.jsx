import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <>
    <RuleContainer>
        <h2>How to Play Dice Game</h2>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>

    </RuleContainer>
      
    </>
  )
}

export default Rules


const RuleContainer=styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
    background-color:  #FBF1F1;
    padding: 15px;
    gap: 5px;
    margin: 20px auto 20px auto;
    transition: 0.3s ;
    p{
        font-size: 16px;
    }



    
`



