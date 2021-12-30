import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import Singlecard from "./Singlecard";
import Signup  from "./Signup";
import { SAVE_SCORES, GET_GAMERS } from "../../Graphql/user";
import { useMutation, useQuery, useLazyQuery } from '@apollo/client';
import Hints from "./Hints";
import ListOfPlayers from "./ListOfPlayers";
import "./studentcenter.scss";

const cardImages = [
  { name: "melon", matched: false, emoji:"🍉"},
  { name: "love",  matched: false, emoji:"💖"},
  { name: "orbit", matched: false, emoji:"🍆"},
  { name: "start", matched: false,  emoji:"❄️"},
  { name: "sun", matched: false,  emoji:"🍒"},
  { name: "heart-", matched: false, emoji:"💔"},
  { name: "lough", matched: false, emoji:"😂"},
  { name: "arrow-", matched: false, emoji:"🎯"},
]

/** Student center */
function Index() {
   ReactGA.pageview('Studentcenter');
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
   const  shufledCards = [...cardImages, ...cardImages ]
    .sort( () => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}))

    setChoiceOne(null);
    setChoiceTwo(null);

    setCards(shufledCards)
    setGameOver(false);
    setTurns(0)
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
},[])


  return (
    <div className="StudentCenter">

      { signup &&
        <div className='signin'>
          <Signup close={() => setSignUp(false)}/>
        </div>
      }

       <div className='new_game'>
      <div className='top_player'>
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
                      <h5 style={{color:"blueviolet"}} onClick={() => setShowListOfPlayer(true)}>More players</h5>
                    </thead>
                  </table>
              </div>
          </div>
         <p style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            Flips: <span style={{fontSize:"1.8rem", color:"blue"}}>{turns}</span> -
            Lowest: <span style={{color:"red",}}>{score}</span> -
            Score: <span style={{color:"blueviolet"}}> { Math.trunc(8/score * 100)}% </span>
         </p>
         <br/>
        <span>Least possible 8 flips</span> <p onClick={() => setShow(true)} className='player_hints'> player Hints</p>
         {!gamer && <h4 className="signupbutton" onClick={signupForGame}>Sign up to compete</h4>}

         {gameOver && <p style={{color:"#fe9000"}}>Game over <span style={{fontSize:"large"}}>🎉🎉</span></p>}

         {show && <Hints hide={() => setShow(false)}/>}
         { showListOfPlayer && <ListOfPlayers players={data_} hide={() => setShowListOfPlayer(false)}/> }

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