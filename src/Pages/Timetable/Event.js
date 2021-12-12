import React, { useState} from 'react';
import "./styles.scss";

/** Event ... */
function Event() {
  const monday = JSON.parse(localStorage.getItem("Monday"));
  const tuesday = JSON.parse(localStorage.getItem("Tuesday"));
  const wednesday = JSON.parse(localStorage.getItem("Wednesday"));
  const thursday = JSON.parse(localStorage.getItem("Thursday"));
  const friday = JSON.parse(localStorage.getItem("Friday"));
  const saturday = JSON.parse(localStorage.getItem("Saturday"));
  const sunday = JSON.parse(localStorage.getItem("Sunday"));

 const [ deleted, setDeleted] = useState(false)

 const delete_ = (e) => {
     localStorage.removeItem(e)
     setDeleted(!deleted)
 }


 let monday_ = ( monday !== null &&
                <div className="Monday">
                  <p className="day">Monday</p>
                    { monday.map((day, i) => (
                              <>
                                  <div className="event_activity" key={i}>
                                    <div><p>{day.Activity}</p> <p>{day.Time}</p> </div>
                                  </div>
                              </>
                        ))}
                <div className="delete">
                  <button onClick={ () => delete_("Monday")}>Delete</button>
                </div>
                </div>)


 let tuesday_ = ( tuesday !== null &&
                <div className="Tuesday">
                  <p className="day">Tuesday</p>
                    { tuesday.map((day, i) => (
                              <>
                                  <div className="event_activity" key={i}>
                                    <div><p>{day.Activity}</p> <p>{day.Time}</p> </div>
                                  </div>
                              </>
                        ))}
                    <div className="delete">
                       <button onClick={ () => delete_("Tuesday")}>Delete</button>
                    </div>
                </div>)
 let wednesday_ = ( wednesday !== null &&
                <div className="Wednesday">
                  <p className="day">Wednesday</p>
                    { wednesday.map((day, i) => (
                              <>
                                  <div className="event_activity" key={i}>
                                    <div><p>{day.Activity}</p> <p>{day.Time}</p> </div>
                                  </div>
                              </>
                        ))}
                  <div className="delete">
                     <button onClick={ () => delete_("Wednesday")}>Delete</button>
                 </div>
                </div>)

 let thursday_ = ( thursday !== null &&
                <div className="Thursday">
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
                <div className="Friday">
                  <p className="day">Friday</p>
                    { friday.map((day, i) => (
                              <>
                                  <div className="event_activity" key={i}>
                                    <div><p>{day.Activity}</p> <p>{day.Time}</p> </div>
                                  </div>
                              </>
                        ))}
                 <div className="delete">
                    <button onClick={ () => delete_("Friday")}>Delete</button>
                </div>
                </div>)
 let saturday_ = ( saturday !== null &&
                <div className="Saturday">
                  <p className="day">Saturday</p>
                    { saturday.map((day, i) => (
                              <>
                                  <div className="event_activity" key={i}>
                                    <div><p>{day.Activity}</p> <p>{day.Time}</p> </div>
                                  </div>
                              </>
                        ))}
                 <div className="delete">
                    <button onClick={ () => delete_("Saturday")}>Delete</button>
                </div>
                </div>)

 let sunday_ = ( sunday !== null &&
                <div className="Sunday">
                  <p className="day">Sunday</p>
                    { sunday.map((day, i) => (
                              <>
                                  <div className="event_activity" key={i}>
                                    <div><p>{day.Activity}</p> <p>{day.Time}</p> </div>
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
    </>
  )
}
export default Event;