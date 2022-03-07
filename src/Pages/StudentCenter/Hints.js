import React from 'react'
import "./studentcenter.scss";
function Hints({hide}) {

  return (
      <div className='hints'>
          <h5>How well can you remember previous cards and predict the next matching card?</h5> <br/>
          <p>This is a game of flips! take the least number of flip-turns to rank higher
            <span style={{color:"blue"}}> 6 </span> is the highes rank overal which is 100% score</p>
          <br/> <br/>
          <p>For to be ranked among other players, you must register for the game to be a gamer</p>
          <p >Here are some jiberish ... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fugiat eaque obcaecati aperiam quod. 
            A, facere nulla veniam laudantium laboriosam vero, vel cumque asperiores molestias adipisci nemo ipsum iure, 
            architecto saepe ipsam dicta deserunt rerum quos maxime consequuntur natus in eos quod. Maxime minus officia ipsum 
            reiciendis suscipit, reprehenderit eligendi?</p> <br/>
          <p className="close" onClick={() => hide()} >Back to play</p>
      </div>
  )
}

export default Hints
