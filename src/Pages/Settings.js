import React from 'react'
import "../App.scss";
import colorTheme from "../Components/colorTheme";
import ReactGA from 'react-ga';
import { useHistory } from 'react-router-dom';
import { useThemeContext } from '../Context';
import Switch from '@mui/material/Switch';

function Settings() {
const theme = colorTheme();
const history = useHistory();
 const  [ { Theme, Home } , dispatch ] = useThemeContext();

 const [checked, setChecked] = React.useState(false);

 const handleChange = (event) => {
   const _checked = event.target.checked;
   if(_checked){
     darkHandler();
   }else{
     lightHandler();
   }
   setChecked(event.target.checked);
 };

// Google analytics
const reportDark = () => {
    ReactGA.event({
          category:"Theme",
          action:"changed to dark theme",
          transport:"beacon",
          label:"Dark theme",
        })
}
const reportLight = () => {
  ReactGA.event({
        category:"Theme",
        action:"changed to light theme",
        transport:"beacon",
        label:"Light theme",
      })
}


  // Dark and light theme click handlers
  const darkHandler = () => {
    localStorage.setItem("theme", "Dark")
    dispatch({
      type: "Dark",
      payload: "Dark"
    })
    reportLight();
  }

  const lightHandler = () => {
    localStorage.setItem("theme", "Light")
    dispatch({
      type: "Light",
      payload: "Light"
    })
    reportDark()
  }
  

  const buttonHandler = () => {
    localStorage.setItem("home", "Buttons")
    dispatch({
      type: "Buttons",
      payload: "Buttons"
    })
  }
  
  const iconHandler = (e) => {
    localStorage.setItem("home", "Icons")
    dispatch({
      type: "Icons",
      payload: "Icons"
    })
  }


  return (
    <div className='settings' style={{backgroundColor: theme.farground, color: theme.primary}}>
        <div>
            <h4>App settings and customization:</h4>
            <p>Customize the app to look and feel according to your taste and preferance.</p>
        </div>
        <div>
            <h4>Theme:</h4>
            <p>Switch color theme of the app</p>
            <Switch
                checked={checked}
                style={{color: theme.primary}}
                label={Theme}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              {Theme}
        </div>
        <div>
            <h4>Academics tab settings:</h4>
            <p>Switch the academics page to display icons or buttons</p>
            
            <input type="radio" value="Icons" name="theme" onChange={iconHandler} checked={Home === "Icons"}/> Icons
            <input type="radio" value="Buttons" name="theme" onChange={buttonHandler} checked={Home === "Buttons"}/> Buttons
        </div>
        <div>
           <h4>Contribute:</h4>
           <p>You can now contribute code and opinions to the building and betterment of this application get the email in the info</p>
        </div>
        
        <div className="UsagePolicy">
            <h4>Usage policy:</h4>

            <p>The news tab gives an alternative online noticeboard to convey and read real time information in addition to the physical noticeboard.</p>
            <br/>
            <p>Student groups and clubs, SOTMUC and any other student who would like to convey instant and long time information to majority of students can now do so with ease.</p>
             <br/>
            <p>Don't hesitate to notify fellow students on matters of urgency like lost and found items, urgent student meetings among other issues relating to students' welfare.</p>
            <br/>
            <p>We acknowledge the powere that comes with technology and therefore you are reminded to keep all your comments on this virtual platform free from misinformation and postive</p> 

            <p>You will be reponsible for your online activities.</p>
       </div>
       <div>
          <h4 style={{color: theme.link}} onClick={() => history.push("/Info")}>App info</h4>
        </div>
    </div>
  )
}

export default Settings;