import React from 'react';
import "./studentcenter.scss";
import colorTheme from "../../../Components/colorTheme";

function ListOfPlayers({players, hide}) {
  const theme = colorTheme();
  return (
    <div className='players' style={{color: theme.primary, backgroundColor: theme.background}}>
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
