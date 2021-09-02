import React  from 'react';
import { useLocation } from 'react-router';

import { Details } from "./Details";
import DetailInfo from "./Details.json";

import AsaPic from "../Images/Asa.jpg";
import DamaPic from "../Images/Dama.jpg";
import DericPic from "../Images/deric.jpg";
import SecPic from "../Images/sec.jpg";
import MercyPic from "../Images/Mercy.jpg";
import KevinPic from "../Images/kevo.jpg";
import Gitonga from "../Images/gitonga.png";
import IconicPic from "../Images/iconic.jpg";
import BabafemiPic from "../Images/Babfemi.jpg";
import ColloPic from "../Images/collo.jpg";

/** Profile component */
function Profile() {
  const location = useLocation();
  const profileName = location.pathname.split("/").pop();


  let markUp;
  profileName === "Dama" && (markUp =  <Details   DetailInfo={DetailInfo.Dama} avartar={DamaPic}/>)
  profileName === "Asa" && (markUp =   <Details   DetailInfo={DetailInfo.Asa} avartar={AsaPic}/>)
  profileName === "Deric" && (markUp =  <Details  DetailInfo={DetailInfo.Deric} avartar={DericPic}/>)
  profileName === "Mercy" && (markUp =  <Details  DetailInfo={DetailInfo.Mercy} avartar={MercyPic}/>)
  profileName === "Kevin" && (markUp =  <Details  DetailInfo={DetailInfo.Kevin} avartar={KevinPic}/>)
  profileName === "Clinton" && (markUp = <Details DetailInfo={DetailInfo.Clinton} avartar={SecPic}/>)
  profileName === "Iconic" && (markUp = <Details DetailInfo={DetailInfo.Iconic} avartar={IconicPic}/>)
  profileName === "Babafemi" && (markUp = <Details DetailInfo={DetailInfo.Babafemi} avartar={BabafemiPic}/>)
  profileName === "Collo" && (markUp = <Details DetailInfo={DetailInfo.Collo} avartar={ColloPic}/>)
  profileName === "Portus" && (markUp = <Details DetailInfo={DetailInfo.Kiongozi} avartar={"Portus"}/>)
  profileName === "2016" && (markUp =  <Details  avartar={Gitonga}/>)


  return (markUp)
}

export default Profile;
