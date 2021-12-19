import React, { useState } from 'react';
import ReactGA from 'react-ga';
import Event from "./Event";
import Add from "./Add";
import "./styles.scss";

import { KeyboardArrowDown, KeyboardArrowUp} from '@mui/icons-material';

// Time table component.
const  Index = () => {
  ReactGA.pageview('/Timetable');
  const [ close, setClose] = useState(false);

    return (
      <div className="timetable_wrapper">
        { !close &&
          <div  className="open" onClick={() => setClose(!close)}>
            Add + <KeyboardArrowDown/>
          </div>
        }

        { close &&
          <>
            <div onClick={() => setClose(!close)} className="close">
              Close  <KeyboardArrowUp/>
            </div>
            <Add close={() =>  setClose()}/>
          </>
        }
        <Event/>
      </div>
    )
}

export default Index;