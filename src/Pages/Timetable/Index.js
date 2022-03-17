import React, { useState } from 'react';
import ReactGA from 'react-ga';
import Event from "./Event";
import Add from "./Add";
import "./styles.scss";

import {AddchartRounded} from '@mui/icons-material';
import colorTheme from "../../Components/colorTheme";

// Time table component.
const  Index = () => {
  const theme = colorTheme();
  ReactGA.pageview('/Timetable');
  const [ close, setClose] = useState(false);

    return (
      <div className="timetable_wrapper" style={{backgroundColor:theme.background, color: theme.primary}}>
        { !close &&
          <div  className="open" onClick={() => setClose(!close)}>
            <sub>open</sub> <AddchartRounded/>
          </div>
        }

        { close &&
          <div>
            <Add close={() =>  setClose()}/>
          </div>
        }
        <Event/>
      </div>
    )
}

export default Index;    