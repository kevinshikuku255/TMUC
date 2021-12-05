import React, { useState } from 'react';
import { TextareaAutosize} from '@material-ui/core';
import "./styles.scss";

import { KeyboardArrowDown, KeyboardArrowUp} from '@mui/icons-material';

const  Index = () => {
const initial_values = {Day:'', Time:'', Activity:''}
const [ values, setValue] = useState(initial_values);
const [ day, setDay] = useState(false);
const [ add, setAdd] = useState(false);

const changeHandler = (e) => {
    const day = e.target.name;
    const val = e.target.value;
    setValue({...values, [day]: val})
}

const setdayHandler = (e) => {
  const day = e.target.innerText
  setValue({...values, "Day": day})
  setDay(!day)
}



// Save student timetable data to localstorage.
const saveData = (e) => {
  e.preventDefault();

//check for empty fields.
  if(values.Day === '' || values.Time === '' || values.Activity === '') {
     return
  }

//Existing data
  let existingData = localStorage.getItem("timetable");

//New data
  let obj = { [values?.Day]: [ values ] }
  let data = JSON.stringify(obj);

  if(!existingData){
    localStorage.setItem("timetable", data);
    setValue(initial_values)
    return
  }

//If there is existing data check if the day in values exists //if it exist replace else add
  let deserializedData = JSON.parse(existingData);
  let day = values?.Day

  if(deserializedData.hasOwnProperty(values?.Day)){
      deserializedData[day] = [...deserializedData[day], values]
      localStorage.setItem("timetable", JSON.stringify(deserializedData));
      setValue(initial_values)
      return

    }else{
      deserializedData[day] = [ values ];
      localStorage.setItem("timetable",  JSON.stringify(deserializedData));
      setValue(initial_values)
      return
    }
}

let timetable = JSON.parse(localStorage.getItem("timetable"));

  return (
    <div className="timetable_wrapper">

      { !add &&
       <div  className="open" onClick={() => setAdd(!add)}>
        Click here to create weekly timetable <KeyboardArrowDown/>
      </div>}

      { add &&
      <>
      <div onClick={() => setAdd(!add)} className="close"> Close  <KeyboardArrowUp/> </div>
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
       </>}


      { timetable === null &&
          <div className="Dummy">
          <p className="day">Monday</p>
          <div className="event_activity">
                <p>UCI 404 Click above to create your weekly schedule</p>
                <p>06:00 - 10:000</p>
          </div>
          <div className="event_activity">
                <p>UCI 101 Internet and World Wide Web</p>
                <p>06:00 - 10:000</p>
          </div>
          </div>
        }
        { timetable === null &&
          <div className="Dummy">
          <p className="day">Friday</p>
          <div className="event_activity">
                <p>BMS 301 Mnagement Mathematics</p>
                <p>06:00 - 10:000</p>
          </div>
          <div className="event_activity">
                <p>No classes upto monday 🥰🥰🥰🥰 </p>
                <p>11:00 .........</p>
          </div>
          </div>
        }

        { timetable?.Monday &&
          <div className="Monday">
          <p className="day">Monday</p>
            {
              timetable?.Monday.map((e) => (
                <div className="event_activity">
                      <p>{e.Activity}</p>
                      <p>{e.Time}</p>
                </div>
              ))
            }
          </div>
        }
        { timetable?.Tuesday &&
          <div className="Tuesday">
          <p className="day">Tuesday</p>
            {
              timetable?.Tuesday.map((e) => (
                <div className="event_activity">
                      <p>{e.Activity}</p>
                      <p>{e.Time}</p>
                </div>
              ))
            }
          </div>
        }
        { timetable?.Wednesday &&
          <div className="Wednesday">
          <p className="day">Wednesday</p>
            {
              timetable?.Wednesday.map((e) => (
                <div className="event_activity">
                      <p>{e.Activity}</p>
                      <p>{e.Time}</p>
                </div>
              ))
            }
          </div>
        }
        { timetable?.Thursday &&
          <div className="Thursday">
          <p className="day">Thursday</p>
            {
              timetable?.Thursday.map((e) => (
                <div className="event_activity">
                      <p>{e.Activity}</p>
                      <p>{e.Time}</p>
                </div>
              ))
            }
          </div>
        }
        { timetable?.Friday &&
          <div className="Friday">
          <p className="day">Friday</p>
            {
              timetable?.Friday.map((e) => (
                <div className="event_activity">
                      <p>{e.Activity}</p>
                      <p>{e.Time}</p>
                </div>
              ))
            }
          </div>
        }
        { timetable?.Saturday &&
          <div className="Saturday">
          <p className="day">Saturday</p>
            {
              timetable?.Saturday.map((e) => (
                <div className="event_activity">
                      <p>{e.Activity}</p>
                      <p>{e.Time}</p>
                </div>
              ))
            }
          </div>
        }
        { timetable?.Sunday &&
          <div className="Sunday">
          <p className="day">Sunday</p>
            {
              timetable.Sunday.map((e) => (
                <div className="event_activity">
                      <p>{e.Activity}</p>
                      <p>{e.Time}</p>
                </div>
              ))
            }
          </div>
        }
    </div>
  )
}

export default Index;