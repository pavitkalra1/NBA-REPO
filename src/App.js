import React, { useState, useEffect } from "react";
import Header from './Header.js';

import "./App.css";
import CustomToolTip from './Modaltooltip/Tooltip';
import AlertDialog from "./Modaltooltip/Dialogue";

function App() {
  
  const [teams, setTeams] = useState([]);
  const [games, setgames] = useState([]);
  const [err, setError] = useState();
  const [selgame , setGame] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [homeTeam , setNp] = React.useState({});
  const [homeTeamscore , setNp1] = React.useState({});
  const [visitorTeamscore , setvp2] = React.useState({});
  const [visitorTeam , setVp] = React.useState({});
  const [date,dat]=React.useState({});
  const [load,setLoad]=React.useState("block");
  
  
  const handleClickOpen = () => {
    console.log('true');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const selectedGame = (e)=>{
    setGame(e);
  }

  const selNP = e =>{
    setNp(e);
  }


  //fetching data of teams from api 
 
 
  const getTeams = () => {
  fetch("https://www.balldontlie.io/api/v1/teams")
    .then(res => res.json())
    .then(data => {
      setTeams(data.data);
      setLoad("none");
      return 1;
    })
    .catch(err => setError(err));
};
    
// fetching data of games from api


const getGames = () => {
  fetch("https://www.balldontlie.io/api/v1/games")
    .then(res => res.json())
    .then(data => setgames(data.data))
    .catch(err => setError(err));
};


useEffect(() => {
  if (teams.length <=0) {
    getTeams();
  }
  if (games.length <= 0) {
    getGames();
    console.log(games);
  }
 
});

  return (
    
    <div className="container mt-5">
      <div>
    
    {/* HEADING THROUGH PROPS */}
    
    <Header heading="NBA REPO" />
    </div>
      {err ? (
        <div class="alert alert-danger" role="alert">
          <strong>Error</strong> {err}
        </div>
      ) : (
        ""
      )}
      <div>
        <div class="nav-wrapper">
          
          {/* NBA TEAMS AND NBA GAMES PANELS */}
          
          <ul
            class="nav nav-pills nav-fill flex-column flex-md-row"
            id="Tabs"
            role="tablist"
          >
            <li class="nav-item">
              <a
                class="nav-link mb-sm-3 mb-md-0 active"
                id="Tab1-Teams"
                data-toggle="tab"
                href="#tabs-icons-text-1"
                role="tab"
                aria-controls="tabs-icons-text-1"
                aria-selected="true"
              >
                NBA Teams
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link mb-sm-3 mb-md-0"
                id="Tab2-Games"
                data-toggle="tab"
                href="#tabs-icons-text-2"
                role="tab"
                aria-controls="tabs-icons-text-2"
                aria-selected="false"
              >
                NBA Games
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="card shadow">
        <div class="card-body">
          <div class="tab-content" id="myTabContent">
          <div
              class="tab-pane fade show active"
              id="tabs-icons-text-1"
              role="tabpanel"
              aria-labelledby="tabs-icons-text-1-tab"
            >
              
              <div class="container">
                
                {/* NBA TEAMS DATA DISPLAYED IN FIRST PANEL */}
                
                <div class="row">
                  { 
                  teams.map((team , index) => {
                    
                      return (

                        <div key={index} style={{ padding: 30 }} class="col-sm-3">
                          
                          {/* TOOLTIP IMPORTED FROM TOOLTIP.JSX */}
                         
                          <CustomToolTip team_name={team.full_name + "("+team.abbreviation+")"} team_city={team.city} team_conference={team.conference} team_division={team.division} >
                            <strong id="style">{team.name}</strong><br />
                            <span id="division">{team.division}</span>
                          </CustomToolTip>
                      </div>
                    );
                  
                

                })}
                </div>
              </div>
            </div>
            <h1 style={{display : load}}>Loading...</h1> 
           
            <div
              class="tab-pane fade"
              id="tabs-icons-text-2"
              role="tabpanel"
              aria-labelledby="tabs-icons-text-2-tab"
            >
              {/* NBA GAMES DATA DISPLAYED IN THE SECOND PANEL */}

             {/* AlertDialog IMPORTED FROM MODAL.JSX */}
              
              
               <AlertDialog data={selgame} home_team={homeTeam} date={date} visitorTeam={visitorTeam}  home_team_score={homeTeamscore} visitor_team_score={visitorTeamscore} handleClose={handleClose} open={open} />
              <div class="container">
                <div class="row">
                {games.map((game,index) => {
                    const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat","Sun"];
                    const months=["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
                    const date = new Date(game.date);
                    const day = days[date.getDay()];
                    const number = date.getDate();
                    const month = months[date.getMonth()];
                    const year = date.getFullYear();
                    const gamedate =
                      day + ", " + number + " " + month + " " + year;
                    
                    return (
                      
                      <div key={index} className="games" style={{  padding: 30 }} class="col-sm-3"
                      >
                        
                        
                        <strong  id="styles" onClick={()=>{
                          selectedGame(game)
                          selNP(game.home_team);
                          setNp1(game.home_team_score);
                          setvp2(game.visitor_team_score);
                          setVp(game.visitor_team);
                          dat(game.date);
                          handleClickOpen();
                        }} style={{cursor : "pointer"}} >{gamedate}</strong>
                       
                        <span id="styling">{game.status}</span>
                      
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="tabs-icons-text-3"
              role="tabpanel"
              aria-labelledby="tabs-icons-text-3-tab"
            >
              <div class="container">
                <div class="row"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
export default App;
