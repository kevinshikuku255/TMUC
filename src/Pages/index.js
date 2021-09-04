import React, {useEffect} from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_AD } from '../Graphql/ad';
import { Avatar } from "@material-ui/core";
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
import StudentCouncil from "./StudentCouncil";
import Photos from "./Photos";
import Direction from "./Direction";
import Helb from "./Helb";
import Blank from "./Blank";
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

  let ad;
  if(!loading && data){
    ad = data.get_ad
  }

  return (
  <div className="Main">
      <div className="Welcome">
            <h1>Welcome to <br/> Tom Mboya Univeristy College</h1>
            <p> As an Institution, we value the contribution of everyone. It is humans that makes an Institution. Therefore, whether you are a Student, Parent, Staff, The Public or an Administrator, your contribution to the well being of the Institution is highly appreciated.</p>
      </div>

      <div className="Home_page">


        {
        data && !loading &&
        <div className="Ad">
          <div className="Img"> <Avatar src={Profia}/> </div>
          <div className="Description">
            <h4>{ad?.company}</h4>
            <p> {ad?.message}</p>
          </div>
          <sup>Ad</sup>
        </div>
        }


        <div className="Pages">
          <Login/>
          <Elearning/>
          <Portal/>
          <StudentCouncil/>
          <Photos/>
          <Library/>
          <Downloads/>
          <Academics/>
          <About/>
          <Direction/>
          <Council/>
          <History/>
          <Helb/>
          <Blank/>
      </div>
      </div>
  </div>
  )
}

export default Index;
