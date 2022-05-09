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
  const [ xday, setXDay ] =  React.useState({});

  const handleOpen = ({day, index, time}) => {
        setXDay({day, index, time})
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

 const delete_ = ({day, index}) => {
   let oldData = JSON.parse(localStorage.getItem(day));
   oldData.splice(index, 1)
   if(oldData.length === 0){
       localStorage.removeItem(day)
    }else{
      localStorage.setItem(day, JSON.stringify(oldData))
    }
    setDeleted(!deleted)
    setOpen(false)
 }


 let monday_ = ( monday !== null && monday.length > 0 &&
                <div className="Monday" style={{background:theme.secondary}}>
                  <p className="day">Monday</p>
                    { monday.map((day, i) => (
                                  <div className="event_activity" key={i}>
                                    <div>
                                       <p> <span style={{color:"green"}}>Time:</span> {day.Time}</p> <br/>
                                       <p>{day.Activity}</p> 
                                     </div>
                                     <div className="delete">
                                      <button onClick={ () => handleOpen({day: "Monday", index: i, time: day.Time})}>Delete</button>
                                     </div>
                                  </div>
                        ))}
                </div>)


 let tuesday_ = ( tuesday !== null && tuesday.length > 0 &&
                <div className="Tuesday" style={{background:theme.secondary}}>
                  <p className="day">Tuesday</p>
                    { tuesday.map((day, i) => (
                                  <div className="event_activity" key={i}>
                                    <div>
                                      <p><span style={{color:"green"}}>Time:</span>{day.Time}</p> <br/>
                                      <p>{day.Activity}</p> 
                                    </div>
                                    <div className="delete">
                                      <button onClick={ () => handleOpen({day: "Tuesday", index: i, time: day.Time})}>Delete</button>
                                    </div>
                                  </div>
                        ))}
                </div>)
 let wednesday_ = ( wednesday !== null && wednesday.length > 0 &&
                <div className="Wednesday" style={{background:theme.secondary}}>
                  <p className="day">Wednesday</p>
                    { wednesday.map((day, i) => (
                                  <div className="event_activity" key={i}>
                                    <div>
                                      <p><span style={{color:"green"}}>Time:</span>{day.Time}</p> <br/>
                                      <p>{day.Activity}</p> 
                                    </div>
                                    <div className="delete">
                                      <button onClick={ () => handleOpen({day: "Wednesday", index: i, time: day.Time})}>Delete</button>
                                    </div>
                                  </div>
                        ))}
                </div>)

 let thursday_ = ( thursday !== null &&  thursday.length > 0 &&
                <div className="Thursday" style={{background:theme.secondary}}>
                  <p className="day">Thursday</p>
                    { thursday.map((day, i) => (
                                  <div className="event_activity" key={i}>
                                    <div>
                                        <p><span style={{color:"green"}}>Time:</span>{day.Time}</p><br/>
                                        <p>{day.Activity}</p> 
                                    </div>
                                    <div className="delete">
                                        <button onClick={ () => handleOpen({day: "Thursday", index: i, time: day.Time})}>Delete</button>
                                      </div>
                                  </div>
                        ))}
                </div>)

 let friday_ = ( friday !== null && friday.length > 0 &&
                <div className="Friday" style={{background:theme.secondary}}>
                  <p className="day">Friday</p>
                    { friday.map((day, i) => (
                                  <div className="event_activity" key={i}>
                                    <div>
                                      <p><span style={{color:"green"}}>Time:</span>{day.Time}</p> <br/>
                                      <p>{day.Activity}</p> 
                                    </div>
                                    <div className="delete">
                                        <button onClick={ () => handleOpen({day: "Friday", index: i, time: day.Time})}>Delete</button>
                                      </div>
                                  </div>
                        ))}
                </div>)
 let saturday_ = ( saturday !== null && saturday.length > 0 &&
                <div className="Saturday" style={{background:theme.secondary}}>
                  <p className="day">Saturday</p>
                    { saturday.map((day, i) => (
                                  <div className="event_activity" key={i}>
                                    <div>
                                      <p><span style={{color:"green"}}>Time:</span>{day.Time}</p> <br/>
                                      <p>{day.Activity}</p> 
                                    </div>
                                    <div className="delete">
                                        <button onClick={ () => handleOpen({day: "Saturday", index: i, time: day.Time})}>Delete</button>
                                      </div>
                                  </div>
                        ))}
                </div>)

 let sunday_ = ( sunday !== null && sunday.length > 0 &&
                <div className="Sunday" style={{background:theme.secondary}}>
                  <p className="day">Sunday</p>
                    { sunday.map((day, i) => (
                                  <div className="event_activity" key={i}>
                                    <div>
                                      <p><span style={{color:"green"}}>Time:</span>{day.Time}</p> <br/>
                                      <p>{day.Activity}</p> 
                                    </div>
                                    <div className="delete">
                                        <button onClick={ () => handleOpen({day: "Sunday", index: i, time: day.Time})}>Delete</button>
                                      </div>
                                  </div>
                        ))}
                </div>)

let dammy = [
  {Day: 'Monday', Time: 'ada', Activity: 'asa'},
  {Day: 'Monday', Time: 'ada', Activity: 'asa'}
]

let example = ( dammy !== null && dammy.length > 0 &&
  <div className="Dammy" style={{background:theme.secondary}}>
    <p className="day">Wednesday</p>
      { dammy.map((day, i) => (
                    <div className="event_activity" key={i}>
                      <div>
                         <p> <span style={{color:"green"}}>Time:</span> {day.Time}</p> <br/>
                         <p>{day.Activity}</p> 
                       </div>
                       <div className="delete">
                        <button>Delete</button>
                       </div>
                    </div>
          ))}
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
            Do you want to delete  your {xday?.time} {xday?.day}  activity?
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
          <h4>SET YOUR PERSONAL  SCHEDULE TO STAY ORGANISED</h4>
        </div>
      }
      {empty && example}
      {empty && 
       <div className='guide'>
         
          <ul>
              <b>Success and time management tips !!</b> <br/>
              <li>Start your day right.</li>
              <li>Have a plan for what you want to accomplish.</li>
              <li>Break tasks into reasonable units.</li>
              <li>Prioritize tasks and refuse inessential tasks.</li>
              <li>Plan time for meals, exercising, and socializing.</li>
              <li>Work on your dreams one step at a time.</li>
          </ul>
          <h4>The goal is academic excellence 🎓</h4>
       </div>
       }
    </>
  )
}
export default Event;