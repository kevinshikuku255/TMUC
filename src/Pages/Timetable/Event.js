import React, { useState} from 'react';
import "./styles.scss";
import colorTheme from "../../Components/colorTheme";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

/** Event ... */
function Event() {
  const theme = colorTheme();
  let days = []
  const monday = JSON.parse(localStorage.getItem("Monday"));
  const friday = JSON.parse(localStorage.getItem("Friday"));
  const sunday = JSON.parse(localStorage.getItem("Sunday"));
  const tuesday = JSON.parse(localStorage.getItem("Tuesday"));
  const thursday = JSON.parse(localStorage.getItem("Thursday"));
  const saturday = JSON.parse(localStorage.getItem("Saturday"));
  const wednesday = JSON.parse(localStorage.getItem("Wednesday"));

  const [open, setOpen] = React.useState(false);
  const [ xday, setXDay ] =  React.useState('');

  const handleOpen = (day) => {
        setXDay(day)
        setOpen(true)
  };


  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "75%",
    bgcolor: theme.farground,
    color: theme.primary,
    border: '1px solid red',
    boxShadow: 24,
    p: 4,
  };

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
     setOpen(false)
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
                  {!open && <button onClick={ () => handleOpen("Monday")}>Delete</button>}
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
                       {!open && <button onClick={ () => handleOpen("Tuesday")}>Delete</button>}
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
                     {!open && <button onClick={ () => handleOpen("Wednesday")}>Delete</button>}
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
                     {!open &&  <button onClick={ () => handleOpen("Thursday")}>Delete</button>}
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
                    {!open && <button onClick={ () => handleOpen("Friday")}>Delete</button>}
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
                    {!open && <button onClick={ () => handleOpen("Saturday")}>Delete</button>}
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
                   {!open && <button onClick={ () => handleOpen("Sunday")}>Delete</button>}
                </div>
                </div>)


  return (
    <>
      <p>{deleted}</p>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Do you want to delete  your {xday}  schedule?
          </Typography>
          <div  className="modalButtons">
            <button onClick={handleClose} style={{color: theme.link}}>Cancel</button>
            <button onClick={() => delete_(xday)} style={{color: "red"}} >Delete</button>
          </div>
        </Box>

        </Modal>
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