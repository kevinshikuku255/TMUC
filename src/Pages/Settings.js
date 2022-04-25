import React from 'react'
import "../App.scss";
import colorTheme from "../Components/colorTheme";
import ReactGA from 'react-ga';
import { useThemeContext } from '../Context';
import Switch from '@mui/material/Switch';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Settings() {
    const theme = colorTheme();

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
    console.log(e.target.cheked)
    localStorage.setItem("home", "Icons")
    dispatch({
      type: "Icons",
      payload: "Icons"
    })
  }


  return (
    <div className='settings' style={{backgroundColor: theme.background, color: theme.primary}}>
        <div>
            <h4>App settings and customization:</h4>
            <p>Customize the app to look and feel according to your taste and preferacne.</p>
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
           <p>You can now contribute to the building and betterment of this application by texting your opinions</p>
           <a style={{color:"#3cb371"}} href="https://api.whatsapp.com/send?phone=+254740253367"> WhatsApp <WhatsAppIcon /></a> <br/>
        </div>
        <div>
          <h4>Vesion:</h4>
          <p>App version 5.6.2</p>
        </div>
    </div>
  )
}

export default Settings;