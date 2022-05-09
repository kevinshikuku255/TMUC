import React, { useEffect, useState } from 'react';
import Hints from "./Hints";
import "./studentcenter.scss";
import ReactGA from 'react-ga';
import Singlecard from "./Singlecard";
import colorTheme from "../../../Components/colorTheme";


const cardEmoji0 = {
  emojis : [
    { name: "A", matched: false, emoji:"A"},
    { name: "D",  matched: false, emoji:"D"},
    { name: "B", matched: false, emoji:"B"},
    { name: "Z", matched: false,  emoji:"Z"},
    { name: "Q", matched: false,  emoji:"Q"},
    { name: "W-", matched: false, emoji:"W"},
    { name: "P", matched: false, emoji:"P"},
    { name: "X-", matched: false, emoji:"X"},
  ],
  metaData: {
    level: 1
  }
}

const cardEmoji1 = {
  emojis : [
    { name: "melon", matched: false, emoji:"🍉"},
    { name: "love",  matched: false, emoji:"💖"},
    { name: "orbit", matched: false, emoji:"🍆"},
    { name: "start", matched: false,  emoji:"❄️"},
    { name: "sun", matched: false,  emoji:"🍒"},
    { name: "heart-", matched: false, emoji:"💔"},
    { name: "lough", matched: false, emoji:"😂"},
    { name: "arrow-", matched: false, emoji:"🎯"},
  ],
  metaData: {
    level: 1
  }
}


const cardEmoji2 = {
  emojis : [
    { name: "melon", matched: false, emoji:"🦅"},
    { name: "love",  matched: false, emoji:"🦆"},
    { name: "orbit", matched: false, emoji:"🦩"},
    { name: "start", matched: false,  emoji:"🐥"},
    { name: "sun", matched: false,  emoji:"🦜"},
    { name: "heart-", matched: false, emoji:"🐓"},
    { name: "lough", matched: false, emoji:"🦢"},
    { name: "arrow-", matched: false, emoji:"🦉"},
  ],
  metaData : {
    level: 2
  }
}

const cardEmoji3 = {
  emojis : [
    { name: "melon", matched: false, emoji:"🕓"},
    { name: "love",  matched: false, emoji:"🕔"},
    { name: "orbit", matched: false, emoji:"🕞"},
    { name: "start", matched: false,  emoji:"🕚"},
    { name: "sun", matched: false,  emoji:"🕣"},
    { name: "heart-", matched: false, emoji:"🕧"},
    { name: "lough", matched: false, emoji:"🕙"},
    { name: "arrow-", matched: false, emoji:"🕚"},
  ],
  metaData : {
    level: 3
  }
}

const cardEmoji4 = {
  emojis : [
    { name: "red", matched: false, emoji:"🔴"},
    { name: "brown",  matched: false, emoji:"🟠"},
    { name: "yellow", matched: false, emoji:"🟡"},
    { name: "green", matched: false,  emoji:"🟢"},
    { name: "blue", matched: false,  emoji:"🔵"},
    { name: "maroon", matched: false, emoji:"🟣"},
    { name: "chclate", matched: false, emoji:"🟤"},
    { name: "white", matched: false, emoji:"⚪"},
  ],
  metaData : {
    level: 3
  }
}

let cardEmoji = [];

/** Game of flips */
function Index() {
   ReactGA.pageview('Game');
   const theme = colorTheme();
   const [ cards, setCards] = useState([...Array(16).keys()]);
   const [ turns, setTurns] = useState(0);

   const [ choiceOne, setChoiceOne] = useState(null);
   const [ choiceTwo, setChoiceTwo] = useState(null);

   const [ disabled, setDisabled] = useState(false);
   const [ show, setShow] = useState(false);
   const [ score, setScore ] = useState(601);

   const [ gameOver, setGameOver ] = useState(false);

   let totalMatched =   cards.filter(card => card.matched === true).length / 2


//Shafle cards
  const shufleCards = () => {
   const  shufledCards = [...cardEmoji, ...cardEmoji ]
    .sort( () => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}))

    setChoiceOne(null);
    setChoiceTwo(null);

    setCards(shufledCards)
    setGameOver(false);
    setTurns(0)
    
    const randomeNo = Math.floor(Math.random() * 5);
    cardEmoji = randomeNo === 0 ? cardEmoji0.emojis : 
                randomeNo === 2 ? cardEmoji1.emojis :
                randomeNo === 3 ? cardEmoji1.emojis :
                randomeNo === 4 ?  cardEmoji2.emojis : cardEmoji3.emojis ;
  }

  
//Check for previus score in localstorge
useEffect(() => {
 let prev =  localStorage.getItem("score");
 if(!prev){
   localStorage.setItem("score", 601)
   setScore(localStorage.getItem("score"))
 }else{
   setScore(prev)
 }

}, [gameOver])




//handle Choice
  const handleChoice = (card) => {
    if(choiceOne){
        setChoiceTwo(card)
    }else{
        setChoiceOne(card)
    }
  }

//compare 2 cards selected
useEffect(() => {
  if(choiceOne && choiceTwo){
    setDisabled(true)
     if(choiceOne.name ===  choiceTwo.name){
       setCards( prev => {
         return prev.map( card => {
                if( card.name === choiceOne.name){
                  return { ...card, matched: true}
                }else{
                    return card
                }
              })
       })
       let filterd = cards.filter(card => card.matched === false)
       if(filterd.length === 2){
         let prev = localStorage.getItem("score");
          setGameOver(true)
        if(turns + 1 <= prev)
           localStorage.setItem("score", turns + 1)
       }
       resetTurn()
     }else{
       setTimeout(() => resetTurn(), 1000)
     }
  }
},[choiceOne, choiceTwo, cards, turns])


//reset the choices
const resetTurn = () => {
  setChoiceOne(null);
  setChoiceTwo(null);
  setTurns(prev => prev + 1);
  setDisabled(false);
}

useEffect(() =>  {
  shufleCards();
  const randomeNo = Math.floor(Math.random() * 4);
  cardEmoji = randomeNo === 0 ? cardEmoji1.emojis : 
              randomeNo === 2 ? cardEmoji2.emojis :
              randomeNo === 3 ?  cardEmoji3.emojis : cardEmoji4.emojis ;
},[])


  return (
    <div className="StudentCenter" style={{color: theme.primary, backgroundColor: theme.background}}>
       <h2>GAME OF FLIPS</h2>
       <div className='new_game_button'> 
          <p onClick={shufleCards}>New game</p>  
       </div>

       <div className="card_grid">
           { cards.map( card => (
             <Singlecard
               key={card.id}
               card={card}
               handleChoice={handleChoice}
               flipped={ card === choiceOne || card === choiceTwo || card.matched}
               disabled={disabled}
               gameOver={gameOver}
               />
           ))}
       </div>

       <div className='new_game'>
            <p style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <span style={{color:"whitesmoke", fontSize:"1.2rem", margin:"0 1rem 0 1rem"}}> {turns}  Moves  </span>
                <table>
                  <tbody>
                    <tr>
                      <td style={{borderBottom:'solid 2px'}}>{totalMatched}</td>
                      </tr>
                      <tr>            
                        <td>8</td>
                      </tr>
                  </tbody>
              </table> 

              <span style={{color:"blueviolet", margin:"0 1rem 0 1rem"}}> High score: { Math.trunc(8/score * 100)}% </span>
            </p>
            <br/>

            <span style={{color:"red", }}> Best moves:  {score} </span>  ___
            
            <span onClick={() => setShow(!show)} style={{color:"#3cb371"}}> { show ?  `Close hints` : `player hints`}</span> 


            {gameOver && <p style={{color:"#fe9000"}}>Game over <span style={{fontSize:"large"}}>🎉🎉</span></p>}

            {show && <Hints hide={() => setShow(!show)}/>}         
       </div>
        
    </div>
  )
}
export default Index;