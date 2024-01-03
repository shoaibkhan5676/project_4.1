import React, { useState } from 'react'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import Rules from './Rules'

const GamePage = () => {
    const [selectdiv,setselectdiv]=useState()
    const [warning,setwarning]=useState(false)
    const [showRules,setshowRules]=useState(false)
    const [scores,setscores]=useState(0)
    const [image,setimage]=useState("src/Images/Dices/dice_1.png")
    const handleclick=(e)=>{
        setselectdiv(e)
        setwarning(false)



    }

    const handleRulesClick=()=>{
        setshowRules((prev)=>!prev)

    }

    const handleResetClick=()=>{
        setscores(0)
    }
 
    const handleImageClick=()=>{
        if (selectdiv===undefined){
            setwarning((prev)=>!prev)

        }
        else{
            let randomNumber=Math.floor(Math.random()*6)+1
            setimage(`src/Images/Dices/dice_${randomNumber}.png`)
            console.log(randomNumber)
            if (randomNumber===selectdiv){
                setscores(scores+randomNumber)

            }
            else{
                if (scores>2){

                    setscores(scores-2)
                }
                else{
                    setscores(0)
                }
            }
            setselectdiv(undefined)
            
        }

    }
    let style={
        "color":"white",
        "backgroundColor": "black",
        "border":"none"

    }

  return (
    <>
    <TopContainer>
        <div className="first">
            <h1>{scores}</h1>
            <p>Total Score</p>

        </div>
        <div className="second">
            {warning?<p className='WarningText' >You haven't Selected any Number</p>:""}
        <div className="box_div">
      

            {[1,2,3,4,5,6].map((element,index)=>{
                return(
                    <div style={selectdiv==element?style:{}} onClick={()=>handleclick(element)} key={index} className="box">{element}</div>
                   )
            })}
          

        </div>
        <p className='select'>Select Number</p>
        </div>
    </TopContainer>

    <RoleDice image={image} resetClick={handleResetClick} buttonText={showRules?"Hide Rules":"Show Rules"} rulesClick={handleRulesClick}  imageClick={handleImageClick} />

    {showRules ? <Rules /> : ""}





      
    </>
  )
}

export default GamePage



const TopContainer=styled.div`
    max-width: 1180px;
    height: 100px;
    margin : 30px auto;
    display: flex;
    justify-content: space-between;


    .first{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h1{
        line-height: 70px;
        font-size: 70px;

    }
    .WarningText{
        color:red;
    }
    .second{
        display: flex;
        flex-direction: column;

    }
    .box_div{
        display: flex;
        gap: 8px;
    }
    .box{
        width: 65px;
        height: 65px;
        color:black;
        background-color: white;
        border-radius: 4px;
        font-weight: 500;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 17px;
        cursor: pointer;
        transition: 0.3s;

    }
    .select{
        margin-left: 300px;
    }



`



