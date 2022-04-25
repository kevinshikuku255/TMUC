import React from 'react';
// import Carousel from "../../Components/Caraousel";
import ReactGA from 'react-ga';
import "./pages.scss";
import colorTheme from "../../Components/colorTheme";

import SchoolIcon from '@mui/icons-material/School';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
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


/** Home page with icons */
function Index() {
  ReactGA.pageview('/');
  const theme = colorTheme();
/* -------------------------POST------------------------------------------------- */

 const style = {
    color: theme.link,
    fontSize: "smaller",
    padding: 0,
    margin: "1rem 0",
    textAlign: "center"
 }

  return (
  <div style={{color: theme.primary}} className="Main">
      <div className="Home_page">
                {/* <Carousel className="Ad"/> */}
            {/* <p style={style}> Play the puzzle challenge in the Activities tab to earn coins in Ksh.</p> */}
            <h6 style={style}>Dark mode enabled by default !</h6>
          <div  className="Pages1">
            <p> <SchoolIcon/> </p>
            <p><AssignmentLateIcon/></p>
            <p><FmdGoodIcon/></p>
            <p><AdminPanelSettingsIcon/></p>
            <p><LibraryBooksIcon/></p>
            <p><LocalLibraryIcon/></p>
            <p><AttachMoneyIcon/></p>
            <p><HistoryIcon/></p>
            <p><InfoIcon/></p>
            <p><InsertPhotoIcon/></p>
            <p><CloudDownloadIcon/></p>
            <p><LanguageIcon/></p>
          </div>
      </div>
  </div>
  )
}

export default Index;
