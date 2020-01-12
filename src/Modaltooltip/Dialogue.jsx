import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid, Typography} from '@material-ui/core';


export default function AlertDialog(props) {
  return (
    
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="290px"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography variant="h4" style={{color: "#f16d32", display: 'flex', justifyContent: 'center'}}>
                      Game Description<br/>
          </Typography>            
          <Typography style={{fontSize:19, display: 'flex', justifyContent: 'center'}}>                  
          {(new Date(props.data.date)).toString()}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Grid container justify="center" spacing={0} xs={12}>
                    <Grid container item  xs={6}  spacing={4}> 
                    <Typography variant="h4">
                    <br/><br/> Home Team<br/><br/>
                            
                        </Typography>
                        <Typography variant="h6">
            {props.home_team.full_name}({props.home_team.abbreviation})<br /> 
            <strong>City: </strong>
            {props.home_team.city}<br />
            <strong>Conference: </strong>
            {props.home_team.conference}<br />
            <strong>Division: </strong>
            {props.home_team.division}<br />
            <strong>Home Team Score: </strong>
            {props.home_team_score}
            <br/>
            <br />
            <br />
            <br /></Typography>  
            </Grid>
            <Grid container item xs={6} spacing={4}>
          <Typography variant="h4">
          <br/><br/> Visitor Team<br/><br/>
                        </Typography>
                        <Typography variant="h6">
            {props.visitorTeam.full_name}({props.visitorTeam.abbreviation})<br /> 
            <strong>City: </strong>
            {props.visitorTeam.city}<br />
            <strong>Conference: </strong>
            {props.visitorTeam.conference}<br />
            <strong>Division: </strong>
            {props.visitorTeam.division}<br />
            <strong>Visitor Team Score: </strong>
            {props.visitor_team_score}
            <br />
            <br />
            <br />
            <br /></Typography>  
            </Grid>
            </Grid>
            <Grid container justify="center">
                <Button size="large" style={{display: 'flex', justifyContent: 'center', background: "#60cb5c", color: "white" }} onClick={props.handleClose}>Close</Button>
                </Grid>
              
          </DialogContentText>
        </DialogContent>
       
      </Dialog>
    </div>
  );
}

