import React from 'react';
import "./studentcenter.scss";

function ListOfPlayers({players, hide}) {
  return (
    <div className='players'>
       <div className='player_header'>
          <h3>Players </h3>
          <p className="close" onClick={() => hide()}>Close</p>
       </div>

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
    </div>
  )
}

export default ListOfPlayers
