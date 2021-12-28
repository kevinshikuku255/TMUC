import React from 'react';
import "./studentcenter.scss";

function ListOfPlayers({players, hide}) {
  return (
    <div className='hints'>
     <h1>Players</h1>

  <table>
    <thead>
        { players?.map((player, i) => (
          <tr key={player.id}>
            <td style={{color:"red"}}>{`${ i + 1}.`}</td>
            <td>{player.flips} Flips - </td>
            <td>{player.score}% </td>
            <td>{player.name}</td>
          </tr>
        ))}
        <br/>
    </thead>
  </table>
     <p className="hide_hints" onClick={() => hide()}>Back to play</p>
    </div>
  )
}

export default ListOfPlayers
