import React from 'react';
import {Button, Avatar} from '@material-ui/core';
import {DialogActions, DialogContent} from '@material-ui/core';
import ReactGA from 'react-ga';
import { useLoadDispatch } from '../Context/loading';
import Helb from '../Images/helb.jpeg';

/** Alert dialogue */
export default function AlertDialog() {
  const loadDispatch = useLoadDispatch();

  const helbClick = () => {
    ReactGA.event({
          category:"View",
          action:"clicked",
          transport:"beacon",
          label:"HELB",
        })
  }
  const deny = () => {
    loadDispatch({
      type: "CLOSE",
      payload: false
    })
  };


  const agree = () => {
      loadDispatch({
        type: "LOAD",
        payload: true
      });
      helbClick();
      loadDispatch({
        type: "CLOSE",
        payload: false
      })

}

  return (
    <div>
        <DialogContent>
          <div className="dialogcontenttext">
            <Avatar src={Helb}/>
            <b>Higher Education Loans Board</b>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={deny} color="secondary">
            Back
          </Button>
          <Button  color="primary">
               <a href="https://www.helb.co.ke/student-portal/" onClick={agree}> Continue </a>
          </Button>

        </DialogActions>
    </div>
  );
}
