import React, {useEffect} from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_AD } from '../Graphql/ad';
import { Avatar } from "@material-ui/core";
import { WhatsApp, Phone } from "@material-ui/icons";
import "./pages.scss";


import Portal from "./Portal";
import Elearning from "./E-learning";
import Login from "./StudentLogin";
import Downloads from "./Downloads";
import About from "./About";
import Council from "./Council";
import Library from "./Library";
import History from "./History";
import Academics from "./Academics"
// import StudentCouncil from "./StudentCouncil";
import Photos from "./Photos";
import Direction from "./Direction";
import Helb from "./Helb";
// import Blank from "./Blank";
import Profia from "../Images/profia.jpg";

function Index() {

/* -------------------------AD------------------------------------------------- */
  const [
    get_ad,
    { loading, data },
  ] = useLazyQuery(GET_AD,{fetchPolicy:"no-cache"})

  useEffect(() => {
      get_ad({ variables: { company: "Profia" } })
  }, [get_ad])


  if(!loading && data){
    console.log(data)
  }

  return (
  <div className="Main">
      <div className="Welcome">
            <h1>Welcome to <br/> Tom Mboya Univeristy College</h1>
            <p> As an Institution, we value the contribution of everyone. It is humans that makes an Institution. Therefore, whether you are a Student, Parent, Staff, The Public or an Administrator, your contribution to the well being of the Institution is highly appreciated.</p>
      </div>

      <div className="Home_page">


        {
        !data &&

        <div className="Ad">
          <div className="Img"> <Avatar src={Profia}/> </div>
          <div className="Description">
            <h4>Profia Institute for KASNEB courses - Homa Bay Town</h4>
            <p> CPA, ATD, CAMS, CIFA, CS</p>
            <b>Register before 9 Sept to get 5% discount</b>
            <div className="Adcontact">
              <b> call or WhatsApp</b>
              <a href="tel: 0793977991"> <Phone className="PhoneAd"/> </a>
              <a href="https://wa.me/+254793977991?text=Hello%20I%20have%20seen%20Profia%20on%20TMUC%20APP%20and%20I%20would%20like%20to%20Enroll.">
               <WhatsApp className="WhatsappAd"/>
              </a>
            </div>
          </div>
          <sup>Ad</sup>
        </div>
        }


        <div className="Pages">
          <Login/>
          <Elearning/>
          <Portal/>
          {/* <StudentCouncil/> */}
          <Photos/>
          <Library/>
          <Downloads/>
          <Academics/>
          <About/>
          <Direction/>
          <Council/>
          <History/>
          <Helb/>
          {/* <Blank/> */}
      </div>
      </div>
  </div>
  )
}

export default Index;
