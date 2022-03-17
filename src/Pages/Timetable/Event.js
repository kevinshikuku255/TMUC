import React, { useState} from 'react';
import "./styles.scss";
import colorTheme from "../../Components/colorTheme";

/** Event ... */
function Event() {
  const theme = colorTheme();
  let days = []
  const monday = JSON.parse(localStorage.getItem("Monday"));
  const tuesday = JSON.parse(localStorage.getItem("Tuesday"));
  const wednesday = JSON.parse(localStorage.getItem("Wednesday"));
  const thursday = JSON.parse(localStorage.getItem("Thursday"));
  const friday = JSON.parse(localStorage.getItem("Friday"));
  const saturday = JSON.parse(localStorage.getItem("Saturday"));
  const sunday = JSON.parse(localStorage.getItem("Sunday"));
  days.push(monday, tuesday, wednesday, thursday, friday, saturday, sunday);

  const  areSame = (arr) => {
    // Put all array elements in a HashSet
    let s = new Set(arr);
    // If all elements are same, size of
    // HashSet should be 1. As HashSet contains only distinct values.
    return (s.size === 1);
}

let empty =  days.includes(null) && areSame(days);



 const [ deleted, setDeleted] = useState(false);

 const delete_ = (e) => {
     localStorage.removeItem(e)
     setDeleted(!deleted)
 }


 let monday_ = ( monday !== null &&
                <div className="Monday" style={{background:theme.secondary}}>
                  <p className="day">Monday</p>
                    { monday.map((day, i) => (
                              <>
                                  <div className="event_activity" key={i}>
                                    <div>
                                      <p>{day.Activity}</p> 
                                      <p> <span style={{color:"green"}}>Time:</span> {day.Time}</p> </div>
                                  </div>
                              </>
                        ))}
                <div className="delete">
                  <button onClick={ () => delete_("Monday")}>Delete</button>
                </div>
                </div>)


 let tuesday_ = ( tuesday !== null &&
                <div className="Tuesday" style={{background:theme.secondary}}>
                  <p className="day">Tuesday</p>
                    { tuesday.map((day, i) => (
                              <>
                                  <div className="event_activity" key={i}>
                                    <div>
                                      <p>{day.Activity}</p> 
                                      <p><span style={{color:"green"}}>Time:</span>{day.Time}</p> </div>
                                  </div>
                              </>
                        ))}
                    <div className="delete">
                       <button onClick={ () => delete_("Tuesday")}>Delete</button>
                    </div>
                </div>)
 let wednesday_ = ( wednesday !== null &&
                <div className="Wednesday" style={{background:theme.secondary}}>
                  <p className="day">Wednesday</p>
                    { wednesday.map((day, i) => (
                              <>
                                  <div className="event_activity" key={i}>
                                    <div>
                                      <p>{day.Activity}</p> 
                                      <p><span style={{color:"green"}}>Time:</span>{day.Time}</p> </div>
                                  </div>
                              </>
                        ))}
                  <div className="delete">
                     <button onClick={ () => delete_("Wednesday")}>Delete</button>
                 </div>
                </div>)

 let thursday_ = ( thursday !== null &&
                <div className="Thursday" style={{background:theme.secondary}}>
                  <p className="day">Thursday</p>
                    { thursday.map((day, i) => (
                              <>
                                  <div className="event_activity" key={i}>
                                    <div><p>{day.Activity}</p> <p>{day.Time}</p> </div>
                                  </div>
                              </>
                        ))}
                <div className="delete">
                      <button onClick={ () => delete_("Thursday")}>Delete</button>
                </div>
                </div>)

 let friday_ = ( friday !== null &&
                <div className="Friday" style={{background:theme.secondary}}>
                  <p className="day">Friday</p>
                    { friday.map((day, i) => (
                              <>
                                  <div className="event_activity" key={i}>
                                    <div>
                                      <p>{day.Activity}</p> 
                                      <p><span style={{color:"green"}}>Time:</span>{day.Time}</p> </div>
                                  </div>
                              </>
                        ))}
                 <div className="delete">
                    <button onClick={ () => delete_("Friday")}>Delete</button>
                </div>
                </div>)
 let saturday_ = ( saturday !== null &&
                <div className="Saturday" style={{background:theme.secondary}}>
                  <p className="day">Saturday</p>
                    { saturday.map((day, i) => (
                              <>
                                  <div className="event_activity" key={i}>
                                    <div>
                                      <p>{day.Activity}</p> 
                                      <p><span style={{color:"green"}}>Time:</span>{day.Time}</p> </div>
                                  </div>
                              </>
                        ))}
                 <div className="delete">
                    <button onClick={ () => delete_("Saturday")}>Delete</button>
                </div>
                </div>)

 let sunday_ = ( sunday !== null &&
                <div className="Sunday" style={{background:theme.secondary}}>
                  <p className="day">Sunday</p>
                    { sunday.map((day, i) => (
                              <>
                                  <div className="event_activity" key={i}>
                                    <div>
                                      <p>{day.Activity}</p> 
                                      <p><span style={{color:"green"}}>Time:</span>{day.Time}</p> </div>
                                  </div>
                              </>
                        ))}
                <div className="delete">
                   <button onClick={ () => delete_("Sunday")}>Delete</button>
                </div>
                </div>)


  return (
    <>
      <p>{deleted}</p>
      {monday_}
      {tuesday_}
      {wednesday_}
      {thursday_}
      {friday_}
      {saturday_}
      {sunday_}
      {empty && 
       
       <div className='guide'>
         <h2>SET YOUR PERSONAL  SCHEDULE TO STAY ORGANISED</h2>
          <ul>
              <b>Success and time management tips !!</b> <br/>
              <li>Start your day right.</li>
              <li>Have a plan for what you want to accomplish.</li>
              <li>Break tasks into reasonable units.</li>
              <li>Prioritize tasks and refuse inessential tasks.</li>
              <li>Plan time for meals, exercising, and socializing</li>
              <li>Follow a big push with relaxation</li>
          </ul>
          <h5>The goal is academic excellence, stay organised 🎓</h5>
       </div>
       }
    </>
  )
}
export default Event;