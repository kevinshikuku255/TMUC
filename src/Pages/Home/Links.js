import React from 'react';
import ReactGA from 'react-ga';
import { useLoadContext } from '../../Context';
import "./pages.scss";

import SchoolIcon from '@mui/icons-material/School';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HistoryIcon from '@mui/icons-material/History';
import InfoIcon from '@mui/icons-material/Info';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import LanguageIcon from '@mui/icons-material/Language';

const handleClick = (lable) => {
  ReactGA.event({
        category:"Button",
        action: `clicked on ${lable}`,
        transport:"beacon",
        label: lable,
      })
}



/** Photos from google maps */
export function Photos({theme, icon}) {

    const [,dispatch] = useLoadContext();
 
    const clickHandler = () => {
      dispatch({
        type: "LOAD",
        payload: true
      })
     handleClick("school photos")
    }
 
   return (
     <div style={ {backgroundColor: !icon && theme.background}} className="Photos">
       <a onClick={clickHandler}  href="https://www.google.com/maps/uv?pb=!1s0x19d4d455c5c14c23%3A0x49c2401d906f4a6!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipP4WgWGyXr99V12ReGAzwwAqzgBRBScFMN3Q39U%3Dw120-h160-k-no!5stmuc%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipNMYCopuu9kCfQfWj2rwpHmO7iuIZg0G0Gu1EoR&hl=en&sa=X&ved=2ahUKEwjChY-hrPvxAhUXA2MBHUCyAqwQoiowEnoECEIQAw&viewerState=ga">
       {icon && <InsertPhotoIcon fontSize='large' />}
        <h4>photos</h4>
        {!icon && <p className="P" >photos</p>}
       </a>
     </div>
   )
 }


 // ........................................................................................................
 /** Portal */
 export function Portal({theme, icon}) {
    const [,dispatch] = useLoadContext();

 
    const clickHandler = () => {
      dispatch({
        type: "LOAD",
        payload: true
      })
     handleClick("school portal")
    }
 
   return (
     <div style={{backgroundColor: !icon && theme.background}} className="Portal">
       <a onClick={clickHandler} href="https://tmuc.ac.ke/">
       {icon && <LanguageIcon fontSize='large'/>}
        <h4>school website</h4>
        {!icon && <p className="P" >website</p>}
       </a>
     </div>
   )
 }




    // ..........................................................................................
    /** student login */
    export function Login({theme, icon}) {

        const [,dispatch] = useLoadContext();
     
        const clickHandler = () => {
          dispatch({
            type: "LOAD",
            payload: true
          })
          handleClick("Student portal")
        }
     
     
       return (
         <div style={{backgroundColor: !icon && theme.background}} className="Login">
           <a onClick={clickHandler} href="http://student.tmuc.ac.ke/">
           {icon && <AccountBoxIcon fontSize='large'/>}
            <h4>student portal</h4>
            {!icon && <p className="L" >login</p>}
           </a>
         </div>
       )
     }


     // .....................................................................................
     /** Library */
     export function Library({theme, icon}) {
        const [,dispatch] = useLoadContext();
     
        const clickHandler = () => {
          dispatch({
            type: "LOAD",
            payload: true
          })
         handleClick("School library")
        }
     
       return (
         <div style={{backgroundColor:!icon &&  theme.background}} className="Library"> 
           <a onClick={clickHandler} href="https://tmuc.ac.ke/library-home">
           {icon && <LibraryBooksIcon  fontSize='large'/>}
            <h4>school library</h4>
             {!icon && <p className="LB" >library</p>}
           </a>
         </div>
       )
     }


// .............................................................................................
/** History */
export function History({theme, icon}) {
    const [,dispatch] = useLoadContext();
 
    const clickHandler = () => {
      dispatch({
        type: "LOAD",
        payload: true
      })
      handleClick("School history")
    }
 
   return (
     <div style={{backgroundColor:!icon && theme.background}} className="History">
        <a onClick={clickHandler} href="https://tmuc.ac.ke/our-history">
        {icon && <HistoryIcon fontSize='large'/>}
        <h4>school history</h4>
        {!icon && <p className="H" >history</p>}
        </a>
     </div>
   )
 }


 // ....................................................................................................
 /** Helb */
 export function Helb({theme, icon}) {
    const [,dispatch] = useLoadContext();
 
    const clickHandler = () => {
      dispatch({
        type: "LOAD",
        payload: true
      })
     handleClick("Helb")
    }
 
   return (
     <div style={{backgroundColor: !icon && theme.background}} className="Helb">
       <a onClick={clickHandler} href="https://www.helb.co.ke/student-portal/">
       {icon && <AttachMoneyIcon fontSize='large'/>}
        <h4>helb</h4>
        {!icon && <p className="HB"  >helb</p>}
       </a>
     </div>
   )
 }


 // ................................................................................
 /** E learning */
 export function Elearning({theme, icon}) {

    const [,dispatch] = useLoadContext();

    const clickHandler = () => {
      dispatch({
        type: "LOAD",
        payload: true
      })
      handleClick("E-Learning")
    }
 
   return (
     <div style={{backgroundColor: !icon && theme.background}} className="Elearning">
       <a onClick={clickHandler} href="https://elearning.tmuc.ac.ke/">
       {icon && <SchoolIcon fontSize="large"/>}
        <h4>e-learning</h4>
        {!icon && <p className="E"  >e-learning</p>}
       </a>
     </div>
   )
 }

 // .............................................................................
/** Downnloads */
 export function Downloads({theme, icon}) {

    const [,dispatch ]=  useLoadContext();

    const clickHandler = () => {
      dispatch({
        type: "LOAD",
        payload: true
      })
    handleClick("Downloads")
    }
 
   return (
     <div style={{backgroundColor: !icon && theme.background}} className="Downloads">
       <a onClick={clickHandler}  href="https://tmuc.ac.ke/downloads">
       {icon && <CloudDownloadIcon fontSize='large'/>}
        <h4>school downloads</h4>
         {!icon && <p className="D" >downloads</p>}
       </a>
     </div>
   )
 }

 // ................................................................................................................
 /** Direction from google maps */
export function Direction({theme, icon}) {

   const [,dispatch] = useLoadContext();
  
    const clickHandler = () => {
      dispatch({
        type: "LOAD",
        payload: true
      })
     handleClick("School direction")
    }
 
   return (
     <div style={{backgroundColor: !icon && theme.background}} className="Direction">
       <a  onClick={clickHandler} href="https://www.google.com/maps/dir//Tom+Mboya+University+College,+C19,+Homabay,+Kenya,+Homabay/@-0.584245,34.387713,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x19d4d455c5c14c23:0x49c2401d906f4a6!2m2!1d34.387713!2d-0.584245!3e0">
       {icon && <FmdGoodIcon fontSize='large'/>}
        <h4>direction</h4>
        {!icon && <p className="P" >direction</p>}
       </a>
     </div>
   )
 }

 // ..........................................................................
 /** School cauncil */
 export function Council({theme, icon}) {
    const [,dispatch ]= useLoadContext();
 
    const clickHandler = () => {
      dispatch({
        type: "LOAD",
        payload: true
      })
     handleClick("School cauncil")
    }
 
   return (
     <div style={{backgroundColor: !icon && theme.background}} className="Council">
       <a onClick={clickHandler} href="https://tmuc.ac.ke/management-staff">
       {icon &&  <AdminPanelSettingsIcon fontSize='large'/>}
        <h4>school council</h4>
 
        {!icon && <p className="C"  >council</p>}
       </a>
     </div>
   )
 }

 // ....................................................................................................
 /** Blank button */
 export function Blank({theme}) {
 
   return (
     <div style={{backgroundColor:theme.background}} className="Helb" onClick={() => handleClick("Blank")}>
 
     </div>
   )
 }


 //.............................................................................................................
 /** Academics */
 export function Academics({theme, icon }) {
    const [ ,dispatch] = useLoadContext();
 
 
    const clickHandler = () => {
      dispatch({
        type: "LOAD",
        payload: true
      })  
     handleClick("Academics")
    }
 
   return (
     <div style={{backgroundColor:!icon && theme.background}} className="Academics">
       <a onClick={clickHandler} href="https://tmuc.ac.ke/undergraduateprogrammes">
       {icon && <LocalLibraryIcon fontSize="large"/>}
        <h4>academics</h4>
         { !icon &&
          <p className="C"  >academics</p>
         }
       </a>
     </div>
   )
 }


 // ...............................................................................................................
 /**About */
 export function About({theme, icon}) {
    const [,dispatch] = useLoadContext();
  
    const clickHandler = () => {
      dispatch({
        type: "LOAD",
        payload: true
      })
      handleClick("About TMUC")
    }
 
 
   return (
     <div style={{backgroundColor: !icon && theme.background}} className="About">
        <a  onClick={clickHandler}  href="https://tmuc.ac.ke/about-us">
        {icon && <InfoIcon fontSize='large'/>}
        <h4>about tmuc</h4>
       <div>
         {
          !icon &&
          <p className="A">about us</p>
        }
 
       </div>
        </a>
     </div>
   )
 }