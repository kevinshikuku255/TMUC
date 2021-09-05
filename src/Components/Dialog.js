import React from 'react';
import {Button, Avatar} from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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
        <DialogTitle id="alert-dialog-title">{"PROCEED TO HELB PORTAL"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className="dialogcontenttext">
            <Avatar src={Helb}/>
            Higher Education Loans Board
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={deny} color="secondary">
            Back
          </Button>
          <Button onClick={deny} color="primary">
               <a href="https://www.helb.co.ke/student-portal/" onClick={agree}> Continue </a>
          </Button>

        </DialogActions>
    </div>
  );
}
