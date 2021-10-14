import React from 'react';
import ReactGA from 'react-ga';
import { useHistory } from 'react-router';
import "./studentcenter.css";



/** Student center */
function Index() {
   ReactGA.pageview('Studentcenter');
   const history = useHistory()
  return (
    <div className="StudentCenter">
       <p>STUDENT CENTER</p>
       <i>comming soon ...</i>
       <br/>
       <h2 onClick={ ()=> history.goBack() }>GO BACK</h2>
    </div>
  )
}

export default Index
