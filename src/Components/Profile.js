import React  from 'react';
import { useLocation } from 'react-router';

import { Details } from "./Details"

import AsaPic from "../Images/Asa.jpg";
import DamaPic from "../Images/Dama.jpg";
import DericPic from "../Images/deric.jpg";
import SecPic from "../Images/sec.jpg";
import MercyPic from "../Images/Mercy.jpg";

/** Profile component */
function Profile() {
  const location = useLocation();
  const profileName = location.pathname.split("/").pop();


  let markUp;
  profileName === "Dama" && (markUp =  <Details name={profileName} avartar={DamaPic}/>)
  profileName === "Asa" && (markUp =  <Details name={profileName} avartar={AsaPic}/>)
  profileName === "Deric" && (markUp =  <Details name={profileName} avartar={DericPic}/>)
  profileName === "Mercy" && (markUp =  <Details name={profileName} avartar={MercyPic}/>)
  profileName === "Clinton" && (markUp =  <Details name={profileName} avartar={SecPic}/>)


  return (markUp)
}

export default Profile;
