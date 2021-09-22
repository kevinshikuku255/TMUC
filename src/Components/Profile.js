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
import Kenyanboy from "../Images/kenyanboy.jpeg";
import Magicdee from "../Images/magic.jpeg";
import Kingslay from "../Images/kingslay.jpeg";
import Portus from "../Images/portus.jpeg";
import J_se from "../Images/jose.jpeg";
import Evans from "../Images/Evans.jpeg";
import Other from "../Images/Other.jpeg";

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
  profileName === "Mc_Collo" && (markUp = <Details DetailInfo={DetailInfo.Mccollo} avartar={ColloPic}/>)
  profileName === "Portus" && (markUp = <Details DetailInfo={DetailInfo.Kiongozi} avartar={Portus}/>)
  profileName === "Kenyanboy" && (markUp = <Details DetailInfo={DetailInfo.Kenyanboy} avartar={Kenyanboy}/>)
  profileName === "Magicdee" && (markUp = <Details DetailInfo={DetailInfo.Magicdee} avartar={Magicdee}/>)
  profileName === "Kingslay" && (markUp = <Details DetailInfo={DetailInfo.Kingslay} avartar={Kingslay}/>)
  profileName === "J_se911" && (markUp = <Details DetailInfo={DetailInfo.J_se} avartar={J_se}/>)
  profileName === "Evans" && (markUp = <Details DetailInfo={DetailInfo.Evans} avartar={Evans}/>)
  profileName === "Other" && (markUp = <Details DetailInfo={DetailInfo.Other} avartar={Other}/>)
  profileName === "Lilian_Boke" && (markUp = <Details DetailInfo={DetailInfo.Lilian_Boke} avartar={Other}/>)
  profileName === "Gidy" && (markUp = <Details DetailInfo={DetailInfo.Gidy} avartar={Other}/>)
  profileName === "Lameki" && (markUp = <Details DetailInfo={DetailInfo.Lameki} avartar={Other}/>)
  profileName === "2016" && (markUp =  <Details  avartar={Gitonga}/>)


  return (markUp)
}

export default Profile;
