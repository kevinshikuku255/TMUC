// import React, { useEffect, useState } from 'react';
// import ReactGA from 'react-ga';
// import Singlecard from "./Singlecard";
// import Signup  from "./Signup";
// import Hints from "./Hints";
// import "./studentcenter.scss";

// const cardImages = [
//   { name: "melon", matched: false, emoji:"🍉"},
//   { name: "love",  matched: false, emoji:"💖"},
//   { name: "orbit", matched: false, emoji:"🍆"},
//   { name: "start", matched: false,  emoji:"❄️"},
//   { name: "sun", matched: false,  emoji:"🍒"},
//   { name: "heart-", matched: false, emoji:"💔"},
//   { name: "lough", matched: false, emoji:"😂"},
//   { name: "arrow-", matched: false, emoji:"🎯"},
// ]

// /** Student center */
// function Index() {
//    ReactGA.pageview('Studentcenter');
//    const [ cards, setCards] = useState([]);
//    const [ turns, setTurns] = useState(0);

//    const [ choiceOne, setChoiceOne] = useState(null);
//    const [ choiceTwo, setChoiceTwo] = useState(null);

//    const [ disabled, setDisabled] = useState(false);
//    const [ show, setShow] = useState(false);
//    const [ score, setScore ] = useState(601);
//    const [ signup, setSignUp] = useState(false);

//    const [ gameOver, setGameOver ] = useState(false)




// //Shafle cards
//   const shufleCards = () => {
//    const  shufledCards = [...cardImages, ...cardImages ]
//     .sort( () => Math.random() - 0.5)
//     .map((card) => ({...card, id: Math.random()}))

//     setChoiceOne(null);
//     setChoiceTwo(null);

//     setCards(shufledCards)
//     setGameOver(false);
//     setTurns(0)
//   }



// //Check for previus score in localstorge
// useEffect(() => {
//  let prev =  localStorage.getItem("score");
//  if(!prev){
//    localStorage.setItem("score", 601)
//    setScore(localStorage.getItem("score"))
//  }else{
//    setScore(prev)
//  }

// }, [gameOver])




// //handle Choice
//   const handleChoice = (card) => {
//     if(choiceOne){
//         setChoiceTwo(card)
//     }else{
//         setChoiceOne(card)
//     }
//   }

// //compare 2 cards selected
// useEffect(() => {
//   if(choiceOne && choiceTwo){
//     setDisabled(true)
//      if(choiceOne.name ===  choiceTwo.name){
//        setCards( prev => {
//          return prev.map( card => {
//                 if( card.name === choiceOne.name){
//                   return { ...card, matched: true}
//                 }else{
//                     return card
//                 }
//               })
//        })
//        let filterd = cards.filter(card => card.matched === false)
//        if(filterd.length === 2){
//          let prev = localStorage.getItem("score");
//           setGameOver(true)
//         if(turns + 1 <= prev)
//            localStorage.setItem("score", turns + 1)
//        }
//        resetTurn()
//      }else{
//        setTimeout(() => resetTurn(), 1000)
//      }
//   }
// },[choiceOne, choiceTwo, cards, turns])


// //reset the choices
// const resetTurn = () => {
//   setChoiceOne(null);
//   setChoiceTwo(null);
//   setTurns(prev => prev + 1);
//   setDisabled(false);
// }

// useEffect(() =>  {
//   shufleCards();
// },[])


//   return (
//     <div className="StudentCenter">

//       { signup &&
//         <div className='signin'>
//           <Signup close={() => setSignUp(false)}/>
//         </div>
//       }

//        <div className='new_game'>
//          <p style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
//             Flips: <span style={{fontSize:"1.8rem", color:"blue"}}>{turns}</span> -
//             Lowest: <span style={{color:"red",}}>{score}</span> -
//             Score: <span style={{color:"blueviolet"}}> { Math.trunc(8/score * 100)}% </span>
//          </p>
//          <br/>
//         <span>Least possible 8 flips</span> <p onClick={() => setShow(true)} className='player_hints'> player Hints</p>

//          {gameOver && <p style={{color:"#fe9000"}}>Game over <span style={{fontSize:"large"}}>🎉🎉</span></p>}

//          {show && <Hints hide={() => setShow(false)}/>}

//          <button onClick={shufleCards}>New game</button>
//        </div>
//        <div className="card_grid">
//            { cards.map( card => (
//              <Singlecard
//                key={card.id}
//                card={card}
//                handleChoice={handleChoice}
//                flipped={ card === choiceOne || card === choiceTwo || card.matched}
//                disabled={disabled}
//                gameOver={gameOver}
//                />
//            ))}
//        </div>
//     </div>
//   )
// }

// export default Index