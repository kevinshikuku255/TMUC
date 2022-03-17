import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import Singlecard from "./Singlecard";
import Signup  from "./Signup";
import { SAVE_SCORES, GET_GAMERS } from "../../Graphql/user";
import { useMutation, useQuery, useLazyQuery } from '@apollo/client';
import Hints from "./Hints";
import ListOfPlayers from "./ListOfPlayers";
import "./studentcenter.scss";

import colorTheme from "../../Components/colorTheme";

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

/** Student center */
function Index() {
   ReactGA.pageview('Studentcenter');
   const theme = colorTheme();
   const [ cards, setCards] = useState([]);
   const [ turns, setTurns] = useState(0);

   const [ choiceOne, setChoiceOne] = useState(null);
   const [ choiceTwo, setChoiceTwo] = useState(null);

   const [ disabled, setDisabled] = useState(false);
   const [ show, setShow] = useState(false);
   const [ score, setScore ] = useState(601);
   const [ signup, setSignUp] = useState(false);
   const [ showListOfPlayer, setShowListOfPlayer ] = useState(false)

   const [ gameOver, setGameOver ] = useState(false)
   const online = navigator.online;


     //Use lazy query
  const { data:cachedGamers }  = useQuery(GET_GAMERS,{ fetchPolicy:"cache-only" });
  const [ getgamers, {data}] = useLazyQuery(GET_GAMERS,{ fetchPolicy:"network-only" });

  useEffect(() => {
      getgamers()
  }, [getgamers, online , gameOver])

  const data_= data?.getGamers || cachedGamers?.getGamers

  const top_players = data_?.slice(0, 3)



    let gamer = JSON.parse(localStorage.getItem("Gamer"))?.username;
    let flips = localStorage.getItem("score");
    let score_ = Math.trunc( 8/flips * 100).toString()

// Save scores to server............................................
    const [ savescores ] = useMutation(SAVE_SCORES, {
          variables: {flips_: flips, score: score_,  username: gamer },
          onError:(e)=>{
            console.log("did not save scores")
          },
          onCompleted:(data) => {
            localStorage.setItem("Gamer", JSON.stringify(data?.saveGamerScores))
          }
        })


// Signup for game
const signupForGame = () => {
    let user =  localStorage.getItem("Gamer");
    if(user){
      setSignUp(false)
    }else{
      setSignUp(true)
    }
}

// Save game score on load or when game is over
    useEffect(() => {
       let user = localStorage.getItem("Gamer");
        if(user){
          savescores()
        }else {
          return
        }
    }, [gameOver, savescores])


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

      { signup &&
        <div className='signin'>
          <Signup close={() => setSignUp(false)}/>
        </div>
      }

       <div className='new_game'>
      {!showListOfPlayer && <div className='top_player'>
              <h3>Top players:</h3>
              <div style={{textAlign:"start"}}>
                  <table>
                    <thead>
                      { top_players?.map((player, i) => (
                          <tr key={player.id}>
                            {/* <td style={{color:"red"}}>{`${ i + 1} .`} 🥇</td> */}
                            <td> 🏅 {player.flips} Flips - {player.score}% </td>
                            <td>{player.name}</td>
                          </tr>
                      ))}
                      <tr>
                         <td style={{color:"blueviolet"}} onClick={() => setShowListOfPlayer(true)}>All players</td>
                      </tr>
                    </thead>
                  </table>
              </div>
          </div>}
         <p style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <span style={{color:"blue", fontSize:"1.2rem"}}> {turns}  </span> - Moves _ 
            My least moves: <span style={{color:"red"}}>{score}</span> _
            High score: <span style={{color:"blueviolet"}}> { Math.trunc(8/score * 100)}% </span>
         </p>
         <br/>
        <span>Least possible 8 moves</span> <p onClick={() => setShow(true)} className='player_hints'> player Hints</p>
         {!gamer && <h4 className="signupbutton" onClick={signupForGame}>Sign up to compete</h4>}

         {gameOver && <p style={{color:"#fe9000"}}>Game over <span style={{fontSize:"large"}}>🎉🎉</span></p>}

         {show && <Hints hide={() => setShow(false)}/>}
         
         {!showListOfPlayer  &&<button onClick={shufleCards}>New game</button>}
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
       { showListOfPlayer && <ListOfPlayers players={data_} hide={() => setShowListOfPlayer(false)}/> }

    </div>
  )
}
export default Index;