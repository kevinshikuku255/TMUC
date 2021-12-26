import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import Singlecard from "./Singlecard"
import "./studentcenter.scss";

const cardImages = [
  {"src": "/img/helmet-1.png", matched: false},
  {"src": "/img/potion-1.png", matched: false},
  {"src": "/img/ring-1.png", matched: false},
  {"src": "/img/scroll-1.png", matched: false},
  {"src": "/img/shield-1.png", matched: false},
  {"src": "/img/sword-1.png", matched: false}
]



/** Student center */
function Index() {
   ReactGA.pageview('Studentcenter');
   const [ cards, setCards] = useState([]);
   const [ turns, setTurns] = useState(0);

   const [ choiceOne, setChoiceOne] = useState(null);
   const [ choiceTwo, setChoiceTwo] = useState(null);

   const [ disabled, setDisabled] = useState(false);
   const [ show, setShow] = useState(false)

   const [ gameOver, setGameOver ] = useState(false)


  const shufleCards = () => {
   const  shufledCards = [...cardImages, ...cardImages ]
    .sort( () => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}))

    setChoiceOne(null);
    setChoiceTwo(null);

    setCards(shufledCards)
    setTurns(0)
  }






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
     if(choiceOne.src ===  choiceTwo.src){
       setCards( prev => {
         return prev.map( card => {
                if( card.src === choiceOne.src){
                  return { ...card, matched: true}
                }else{
                    return card
                }
              })
       })
       let filterd = cards.filter(card => card.matched === false)
       if(filterd.length === 2){
         setGameOver(true)
         let prev = localStorage.getItem("score");
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

// Start the game on load
useEffect(() => {
  shufleCards()
},[])

//Cheke if all cards are flipped(Game over)

  return (
    <div className="StudentCenter">
       <div className='new_game'>
         <p>FLIP CARDS</p>
         <p>
            Flips: <span style={{color:"blue"}}>{turns}</span> -
            Highest: <span style={{color:"red"}}>{localStorage.getItem("score")}</span> -
            Score: <span style={{color:"blueviolet"}}> {6/localStorage.getItem("score") * 100} </span>
         </p>
         <br/>
         <p onClick={() => setShow(!show)} className='player_hints'> player Hints</p>

         <div className='top_player'>
           <h3>Top players:</h3>
           <div style={{textAlign:"start"}}>
              <table>
                <tr>
                  <td>9 Flips - </td>
                  <td>🥇</td>
                  <td>Qutekid</td>
                </tr>
                <tr>
                  <td>10 Flips - </td>
                  <td>🥈</td>
                  <td>John</td>
                </tr>
                <tr>
                  <td>9 Flips - </td>
                  <td>🥉</td>
                  <td>Doe</td>
                </tr>
              </table>
           </div>
         </div>

         {show &&
          <div className='hints'>
            <p>This is a game of turns! take the least number of flip turns to rank higher. <span style={{color:"blue"}}>6</span> is the highes rank overal</p>
            <br/>
            <p>For to be ranked among other players, must register for the game b</p>
            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fugiat eaque obcaecati aperiam quod. A, facere nulla veniam laudantium laboriosam vero, vel cumque asperiores molestias adipisci nemo ipsum iure, architecto saepe ipsam dicta deserunt rerum quos maxime consequuntur natus in eos quod. Maxime minus officia ipsum reiciendis suscipit, reprehenderit eligendi?</p>
            <p className="hide_hints"onClick={() => setShow(!show)}>Back to play</p>
          </div>
         }

         <button onClick={shufleCards}>New game</button>
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
    </div>
  )
}

export default Index