import React, { useState } from 'react';
import { TextareaAutosize} from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp} from '@mui/icons-material';

function Add({close}) {

const initial_values = {Day:'', Time:'', Activity:''}
const [ values, setValue] = useState(initial_values);
const [ day, setDay] = useState(false);


/* ---------------------------------------------------------------------------------------------- */
// Save student timetable data to localstorage.
const saveData = (e) => {
  e.preventDefault();

//check for empty fields.
  if(values.Day === '' || values.Time === '' || values.Activity === '') {
     return
  }

//New data
  let newData = JSON.stringify( [ values ]);
  let existingData = JSON.parse(localStorage.getItem(values.Day));

//If there is existing data check if the day in values exists
  if(existingData){
     let updatedData = JSON.stringify([ ...existingData, values]);
     localStorage.setItem(values.Day,  updatedData);
     setValue(initial_values);
     close(true);
     return
  }

  if(!existingData){
    localStorage.setItem( values.Day, newData);
    setValue(initial_values);
    close(true);
    return
  }
}


/* -------------------------------------------------------------------------- */

const changeHandler = (e) => {
    const day = e.target.name;
    const val = e.target.value;
    setValue({...values, [day]: val})
}

const setdayHandler = (e) => {
  const day = e.target.innerText;
  setValue({...values, "Day": day})
  setDay(!day)
}

  return (
     <div  className="add_item">
         <div className="item_data">
             <div className="day_input">
                <div className="day"  onClick={() => setDay(!day)}>
                  <div> Day: {values?.Day === "" ? " eg. Sunday" : values?.Day}</div>
                  { day &&  <KeyboardArrowUp/>}
                  { !day && <KeyboardArrowDown/>}
              </div>
              { day &&
                <div className="day_list">
                  <p onClick={setdayHandler}>Monday</p>
                  <p onClick={setdayHandler}>Tuesday</p>
                  <p onClick={setdayHandler}>Wednesday</p>
                  <p onClick={setdayHandler}>Thursday</p>
                  <p onClick={setdayHandler}>Friday</p>
                  <p onClick={setdayHandler}>Saturday</p>
                  <p onClick={setdayHandler}>Sunday</p>
                </div>
               }
             </div>

              <input
                className="time_input" type="text"
                value={values?.Time}
                placeholder=" Time eg 17:00 - 18:00"
                autocomplete="off"
                name="Time" onChange={changeHandler}
                />

              <TextareaAutosize
                    placeholder=" Activity eg. UCI 404"
                    name="Activity"
                    minRows={1}
                    onChange={changeHandler}
                    autocomplete="off"
                    value={values?.Activity}
                    className="activity_input"
                  />
         </div>
         <div className="add_button">
           <button onClick={saveData} type="submit">Save</button>
         </div>
       </div>
  )
}

export default Add
