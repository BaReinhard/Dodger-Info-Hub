// IIFE
(function(){
  'use strict';

  // Load Config
  const TEAM_ID = require('./config/teams').teams;
  const SPORT = require('./config/sports').mlb;

  function init(){
    getTeamData();
  }


  function getTeamData (){
    //import {https} from 'https';
    // AJAX Variables
    const ACCESS_TOKEN = '7427d785-2f1a-4bc0-8d30-e994d1ba837e';
    let https = require('https');
    let options = {
      host: 'https://erikberg.com',
      path: `/events.json?sport=${SPORT}`,
      headers: {
        "Authorization" : `Bearer ${ACCESS_TOKEN}`
      },
      method: 'GET'
    };
    let request = https.request(options, function(response){
      console.log(response);
    });
    request.end();

    // When Finished
    request.on("end", function(){
      console.log("Done");

      // Call Next Function
    });



    // Success CallBack
    request.on("data", function(chunk){
      //newData = chunk;
      findGame(newData);
    });

    // Error Handler
    request.on("error",function(err){
      // Remove this when not working behind proxy
      err = newData;
      findGame(err);
    });
    
  }
  // Parse Team ID Name
  function santizeTeam (string){
    string = string.split('-');
    let cleanString = '';
    for(let i = 0;i<string.length;i++){
      cleanString+= string[i].substring(0,1).toUpperCase() + string[i].substring(1,string[i].length) + " ";
    }
    return cleanString.substring(0,cleanString.length-1);
  }
  // Get Game Time
  function getGameTime(date){
    // Gets Current Time
    let AMPM = 'AM';
    date = date.split('T');
    date = date[1].split('-');
    date = date[0].split(':');
    if (date[0] > 12){
      date[0] = date[0]-12;
      AMPM = 'PM'
    }
    date = `${date[0]}:${date[1]} ${AMPM}`;

    

    return date;
  }


  // Find Games Data
   function findGame (returnedData){
    var foundTeams = {};
    let found = false;
    for(let i =0;i<returnedData.event.length;i++){
      if( (TEAM_ID.includes(returnedData.event[i].home_team.team_id) || TEAM_ID.includes(returnedData.event[i].away_team.team_id)) && returnedData.event[i].event_status != "completed"){
        // Store Found Teams
        foundTeams[returnedData.event[i].home_team.team_id] = true;
        foundTeams[returnedData.event[i].away_team.team_id] = true;

        let str = `${santizeTeam(returnedData.event[i].home_team.team_id)} versus ${santizeTeam(returnedData.event[i].away_team.team_id)} at ${getGameTime(returnedData.event[i].start_date_time)}`;
        console.log(str);
      }
      //Log Score
      if(returnedData.event[i].event_status === "completed"){
        let finalResult = '';
        if(returnedData.event[i].home_points_scored > returnedData.event[i].away_points_scored){

        finalResult = `${santizeTeam(returnedData.event[i].home_team.team_id)} won against the ${santizeTeam(returnedData.event[i].away_team.team_id)} with a final score of ${returnedData.event[i].home_points_scored} to ${returnedData.event[i].away_points_scored}`;
        
      }else{

        finalResult = `${santizeTeam(returnedData.event[i].away_team.team_id)} won against the ${santizeTeam(returnedData.event[i].home_team.team_id)} with a final score of ${returnedData.event[i].away_points_scored} to ${returnedData.event[i].home_points_scored}`;
        
      }
      console.log(finalResult);
        
        
      }
      

    }
    
    // Find Teams Not Playing if any
    
    if(Object.keys(foundTeams).length !== 0){
      for(let i = 0;i<TEAM_ID.length;i++){

        if(!foundTeams[TEAM_ID[i]]){

      console.log(`${santizeTeam(TEAM_ID[i])} are not playing today`);
        }
    }
    } 
  } 

  // Execute Functions

  init();






const newData ={
    "events_date": "2017-06-11T00:00:00-04:00",
    "count": 15,
    "event": [
        {
            "event_id": "20170611-baltimore-orioles-at-new-york-yankees",
            "event_status": "completed",
            "sport": "MLB",
            "start_date_time": "2017-06-11T13:05:00-04:00",
            "season_type": "regular",
            "away_team": {
                "team_id": "baltimore-orioles",
                "abbreviation": "BAL",
                "active": true,
                "first_name": "Baltimore",
                "last_name": "Orioles",
                "conference": "American",
                "division": "East",
                "site_name": "Oriole Park at Camden Yards",
                "city": "Baltimore",
                "state": "Maryland",
                "full_name": "Baltimore Orioles"
            },
            "home_team": {
                "team_id": "new-york-yankees",
                "abbreviation": "NYY",
                "active": true,
                "first_name": "New York",
                "last_name": "Yankees",
                "conference": "American",
                "division": "East",
                "site_name": "Yankee Stadium",
                "city": "Bronx",
                "state": "New York",
                "full_name": "New York Yankees"
            },
            "site": {
                "capacity": 50291,
                "surface": "Grass",
                "name": "Yankee Stadium",
                "city": "Bronx",
                "state": "New York"
            },
            "away_period_scores": [
                0,
                0,
                3,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "home_period_scores": [
                5,
                0,
                0,
                2,
                0,
                3,
                4,
                0,
                -1
            ],
            "away_points_scored": 3,
            "home_points_scored": 14
        },
        {
            "event_id": "20170611-oakland-athletics-at-tampa-bay-rays",
            "event_status": "completed",
            "sport": "MLB",
            "start_date_time": "2017-06-11T13:10:00-04:00",
            "season_type": "regular",
            "away_team": {
                "team_id": "oakland-athletics",
                "abbreviation": "OAK",
                "active": true,
                "first_name": "Oakland",
                "last_name": "Athletics",
                "conference": "American",
                "division": "West",
                "site_name": "O.co Coliseum",
                "city": "Oakland",
                "state": "California",
                "full_name": "Oakland Athletics"
            },
            "home_team": {
                "team_id": "tampa-bay-rays",
                "abbreviation": "TB",
                "active": true,
                "first_name": "Tampa Bay",
                "last_name": "Rays",
                "conference": "American",
                "division": "East",
                "site_name": "Tropicana Field",
                "city": "Saint Petersburg",
                "state": "Florida",
                "full_name": "Tampa Bay Rays"
            },
            "site": {
                "capacity": 42735,
                "surface": "Field Turf",
                "name": "Tropicana Field",
                "city": "Saint Petersburg",
                "state": "Florida"
            },
            "away_period_scores": [
                0,
                2,
                0,
                1,
                0,
                1,
                0,
                0,
                0
            ],
            "home_period_scores": [
                0,
                0,
                0,
                0,
                3,
                1,
                1,
                0,
                -1
            ],
            "away_points_scored": 4,
            "home_points_scored": 5
        },
        {
            "event_id": "20170611-chicago-white-sox-at-cleveland-indians",
            "event_status": "completed",
            "sport": "MLB",
            "start_date_time": "2017-06-11T13:10:00-04:00",
            "season_type": "regular",
            "away_team": {
                "team_id": "chicago-white-sox",
                "abbreviation": "CHW",
                "active": true,
                "first_name": "Chicago",
                "last_name": "White Sox",
                "conference": "American",
                "division": "Central",
                "site_name": "U.S. Cellular Field",
                "city": "Chicago",
                "state": "Illinois",
                "full_name": "Chicago White Sox"
            },
            "home_team": {
                "team_id": "cleveland-indians",
                "abbreviation": "CLE",
                "active": true,
                "first_name": "Cleveland",
                "last_name": "Indians",
                "conference": "American",
                "division": "Central",
                "site_name": "Progressive Field",
                "city": "Cleveland",
                "state": "Ohio",
                "full_name": "Cleveland Indians"
            },
            "site": {
                "capacity": 43429,
                "surface": "Grass",
                "name": "Progressive Field",
                "city": "Cleveland",
                "state": "Ohio"
            },
            "away_period_scores": [
                0,
                0,
                0,
                0,
                0,
                2,
                0,
                0,
                0
            ],
            "home_period_scores": [
                0,
                1,
                0,
                2,
                0,
                0,
                1,
                0,
                -1
            ],
            "away_points_scored": 2,
            "home_points_scored": 4
        },
        {
            "event_id": "20170611-miami-marlins-at-pittsburgh-pirates",
            "event_status": "completed",
            "sport": "MLB",
            "start_date_time": "2017-06-11T13:35:00-04:00",
            "season_type": "regular",
            "away_team": {
                "team_id": "miami-marlins",
                "abbreviation": "MIA",
                "active": true,
                "first_name": "Miami",
                "last_name": "Marlins",
                "conference": "National",
                "division": "East",
                "site_name": "Marlins Park",
                "city": "Miami",
                "state": "Florida",
                "full_name": "Miami Marlins"
            },
            "home_team": {
                "team_id": "pittsburgh-pirates",
                "abbreviation": "PIT",
                "active": true,
                "first_name": "Pittsburgh",
                "last_name": "Pirates",
                "conference": "National",
                "division": "Central",
                "site_name": "PNC Park",
                "city": "Pittsburgh",
                "state": "Pennsylvania",
                "full_name": "Pittsburgh Pirates"
            },
            "site": {
                "capacity": 38496,
                "surface": "Grass",
                "name": "PNC Park",
                "city": "Pittsburgh",
                "state": "Pennsylvania"
            },
            "away_period_scores": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0
            ],
            "home_period_scores": [
                2,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                -1
            ],
            "away_points_scored": 1,
            "home_points_scored": 3
        },
        {
            "event_id": "20170611-new-york-mets-at-atlanta-braves",
            "event_status": "completed",
            "sport": "MLB",
            "start_date_time": "2017-06-11T13:35:00-04:00",
            "season_type": "regular",
            "away_team": {
                "team_id": "new-york-mets",
                "abbreviation": "NYM",
                "active": true,
                "first_name": "New York",
                "last_name": "Mets",
                "conference": "National",
                "division": "East",
                "site_name": "Citi Field",
                "city": "Flushing",
                "state": "New York",
                "full_name": "New York Mets"
            },
            "home_team": {
                "team_id": "atlanta-braves",
                "abbreviation": "ATL",
                "active": true,
                "first_name": "Atlanta",
                "last_name": "Braves",
                "conference": "National",
                "division": "East",
                "site_name": "Turner Field",
                "city": "Atlanta",
                "state": "Georgia",
                "full_name": "Atlanta Braves"
            },
            "site": {
                "capacity": 41500,
                "surface": null,
                "name": "SunTrust Park",
                "city": "Cumberland",
                "state": "Georgia"
            },
            "away_period_scores": [
                1,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "home_period_scores": [
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "away_points_scored": 2,
            "home_points_scored": 1
        },
        {
            "event_id": "20170611-los-angeles-angels-at-houston-astros",
            "event_status": "completed",
            "sport": "MLB",
            "start_date_time": "2017-06-11T14:10:00-04:00",
            "season_type": "regular",
            "away_team": {
                "team_id": "los-angeles-angels",
                "abbreviation": "LAA",
                "active": true,
                "first_name": "Los Angeles",
                "last_name": "Angels",
                "conference": "American",
                "division": "West",
                "site_name": "Angel Stadium of Anaheim",
                "city": "Anaheim",
                "state": "California",
                "full_name": "Los Angeles Angels"
            },
            "home_team": {
                "team_id": "houston-astros",
                "abbreviation": "HOU",
                "active": true,
                "first_name": "Houston",
                "last_name": "Astros",
                "conference": "American",
                "division": "West",
                "site_name": "Minute Maid Park",
                "city": "Houston",
                "state": "Texas",
                "full_name": "Houston Astros"
            },
            "site": {
                "capacity": 40950,
                "surface": "Grass",
                "name": "Minute Maid Park",
                "city": "Houston",
                "state": "Texas"
            },
            "away_period_scores": [
                1,
                0,
                2,
                0,
                6,
                0,
                2,
                1,
                0
            ],
            "home_period_scores": [
                0,
                0,
                2,
                4,
                0,
                0,
                0,
                0,
                0
            ],
            "away_points_scored": 12,
            "home_points_scored": 6
        },
        {
            "event_id": "20170611-philadelphia-phillies-at-st-louis-cardinals",
            "event_status": "completed",
            "sport": "MLB",
            "start_date_time": "2017-06-11T14:15:00-04:00",
            "season_type": "regular",
            "away_team": {
                "team_id": "philadelphia-phillies",
                "abbreviation": "PHI",
                "active": true,
                "first_name": "Philadelphia",
                "last_name": "Phillies",
                "conference": "National",
                "division": "East",
                "site_name": "Citizens Bank Park",
                "city": "Philadelphia",
                "state": "Pennsylvania",
                "full_name": "Philadelphia Phillies"
            },
            "home_team": {
                "team_id": "st-louis-cardinals",
                "abbreviation": "STL",
                "active": true,
                "first_name": "St. Louis",
                "last_name": "Cardinals",
                "conference": "National",
                "division": "Central",
                "site_name": "Busch Stadium",
                "city": "Saint Louis",
                "state": "Missouri",
                "full_name": "St. Louis Cardinals"
            },
            "site": {
                "capacity": 50345,
                "surface": "Grass",
                "name": "Busch Stadium",
                "city": "Saint Louis",
                "state": "Missouri"
            },
            "away_period_scores": [
                1,
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                2
            ],
            "home_period_scores": [
                0,
                0,
                0,
                0,
                3,
                2,
                0,
                1,
                -1
            ],
            "away_points_scored": 5,
            "home_points_scored": 6
        },
        {
            "event_id": "20170611-colorado-rockies-at-chicago-cubs",
            "event_status": "completed",
            "sport": "MLB",
            "start_date_time": "2017-06-11T14:20:00-04:00",
            "season_type": "regular",
            "away_team": {
                "team_id": "colorado-rockies",
                "abbreviation": "COL",
                "active": true,
                "first_name": "Colorado",
                "last_name": "Rockies",
                "conference": "National",
                "division": "West",
                "site_name": "Coors Field",
                "city": "Denver",
                "state": "Colorado",
                "full_name": "Colorado Rockies"
            },
            "home_team": {
                "team_id": "chicago-cubs",
                "abbreviation": "CHC",
                "active": true,
                "first_name": "Chicago",
                "last_name": "Cubs",
                "conference": "National",
                "division": "Central",
                "site_name": "Wrigley Field",
                "city": "Chicago",
                "state": "Illinois",
                "full_name": "Chicago Cubs"
            },
            "site": {
                "capacity": 39538,
                "surface": "Grass",
                "name": "Wrigley Field",
                "city": "Chicago",
                "state": "Illinois"
            },
            "away_period_scores": [
                0,
                0,
                0,
                0,
                4,
                0,
                0,
                0,
                1
            ],
            "home_period_scores": [
                4,
                0,
                0,
                0,
                0,
                2,
                0,
                1,
                -1
            ],
            "away_points_scored": 5,
            "home_points_scored": 7
        },
        {
            "event_id": "20170611-texas-rangers-at-washington-nationals",
            "event_status": "completed",
            "sport": "MLB",
            "start_date_time": "2017-06-11T16:05:00-04:00",
            "season_type": "regular",
            "away_team": {
                "team_id": "texas-rangers",
                "abbreviation": "TEX",
                "active": true,
                "first_name": "Texas",
                "last_name": "Rangers",
                "conference": "American",
                "division": "West",
                "site_name": "Globe Life Park in Arlington",
                "city": "Arlington",
                "state": "Texas",
                "full_name": "Texas Rangers"
            },
            "home_team": {
                "team_id": "washington-nationals",
                "abbreviation": "WAS",
                "active": true,
                "first_name": "Washington",
                "last_name": "Nationals",
                "conference": "National",
                "division": "East",
                "site_name": "Nationals Park",
                "city": "Washington",
                "state": "District of Columbia",
                "full_name": "Washington Nationals"
            },
            "site": {
                "capacity": 41487,
                "surface": "Grass",
                "name": "Nationals Park",
                "city": "Washington",
                "state": "District of Columbia"
            },
            "away_period_scores": [
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                4,
                0
            ],
            "home_period_scores": [
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "away_points_scored": 5,
            "home_points_scored": 1
        },
        {
            "event_id": "20170611-minnesota-twins-at-san-francisco-giants",
            "event_status": "completed",
            "sport": "MLB",
            "start_date_time": "2017-06-11T16:05:00-04:00",
            "season_type": "regular",
            "away_team": {
                "team_id": "minnesota-twins",
                "abbreviation": "MIN",
                "active": true,
                "first_name": "Minnesota",
                "last_name": "Twins",
                "conference": "American",
                "division": "Central",
                "site_name": "Target Field",
                "city": "Minneapolis",
                "state": "Minnesota",
                "full_name": "Minnesota Twins"
            },
            "home_team": {
                "team_id": "san-francisco-giants",
                "abbreviation": "SF",
                "active": true,
                "first_name": "San Francisco",
                "last_name": "Giants",
                "conference": "National",
                "division": "West",
                "site_name": "AT&T Park",
                "city": "San Francisco",
                "state": "California",
                "full_name": "San Francisco Giants"
            },
            "site": {
                "capacity": 41915,
                "surface": "Grass",
                "name": "AT&T Park",
                "city": "San Francisco",
                "state": "California"
            },
            "away_period_scores": [
                0,
                2,
                0,
                0,
                3,
                0,
                0,
                0,
                3
            ],
            "home_period_scores": [
                2,
                0,
                0,
                1,
                1,
                0,
                4,
                5,
                -1
            ],
            "away_points_scored": 8,
            "home_points_scored": 13
        },
        {
            "event_id": "20170611-cincinnati-reds-at-los-angeles-dodgers",
            "event_status": "completed",
            "sport": "MLB",
            "start_date_time": "2017-06-11T16:10:00-04:00",
            "season_type": "regular",
            "away_team": {
                "team_id": "cincinnati-reds",
                "abbreviation": "CIN",
                "active": true,
                "first_name": "Cincinnati",
                "last_name": "Reds",
                "conference": "National",
                "division": "Central",
                "site_name": "Great American Ball Park",
                "city": "Cincinnati",
                "state": "Ohio",
                "full_name": "Cincinnati Reds"
            },
            "home_team": {
                "team_id": "los-angeles-dodgers",
                "abbreviation": "LAD",
                "active": true,
                "first_name": "Los Angeles",
                "last_name": "Dodgers",
                "conference": "National",
                "division": "West",
                "site_name": "Dodger Stadium",
                "city": "Los Angeles",
                "state": "California",
                "full_name": "Los Angeles Dodgers"
            },
            "site": {
                "capacity": 56000,
                "surface": "Grass",
                "name": "Dodger Stadium",
                "city": "Los Angeles",
                "state": "California"
            },
            "away_period_scores": [
                0,
                3,
                1,
                0,
                0,
                3,
                0,
                0,
                0
            ],
            "home_period_scores": [
                0,
                2,
                0,
                0,
                1,
                0,
                0,
                6,
                -1
            ],
            "away_points_scored": 7,
            "home_points_scored": 9
        },
        {
            "event_id": "20170611-milwaukee-brewers-at-arizona-diamondbacks",
            "event_status": "completed",
            "sport": "MLB",
            "start_date_time": "2017-06-11T16:10:00-04:00",
            "season_type": "regular",
            "away_team": {
                "team_id": "milwaukee-brewers",
                "abbreviation": "MIL",
                "active": true,
                "first_name": "Milwaukee",
                "last_name": "Brewers",
                "conference": "National",
                "division": "Central",
                "site_name": "Miller Park",
                "city": "Milwaukee",
                "state": "Wisconsin",
                "full_name": "Milwaukee Brewers"
            },
            "home_team": {
                "team_id": "arizona-diamondbacks",
                "abbreviation": "ARI",
                "active": true,
                "first_name": "Arizona",
                "last_name": "Diamondbacks",
                "conference": "National",
                "division": "West",
                "site_name": "Chase Field",
                "city": "Phoenix",
                "state": "Arizona",
                "full_name": "Arizona Diamondbacks"
            },
            "site": {
                "capacity": 49033,
                "surface": "Grass",
                "name": "Chase Field",
                "city": "Phoenix",
                "state": "Arizona"
            },
            "away_period_scores": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1
            ],
            "home_period_scores": [
                1,
                0,
                0,
                0,
                0,
                0,
                5,
                5,
                -1
            ],
            "away_points_scored": 1,
            "home_points_scored": 11
        },
        {
            "event_id": "20170611-toronto-blue-jays-at-seattle-mariners",
            "event_status": "completed",
            "sport": "MLB",
            "start_date_time": "2017-06-11T16:10:00-04:00",
            "season_type": "regular",
            "away_team": {
                "team_id": "toronto-blue-jays",
                "abbreviation": "TOR",
                "active": true,
                "first_name": "Toronto",
                "last_name": "Blue Jays",
                "conference": "American",
                "division": "East",
                "site_name": "Rogers Centre",
                "city": "Toronto",
                "state": "Ontario",
                "full_name": "Toronto Blue Jays"
            },
            "home_team": {
                "team_id": "seattle-mariners",
                "abbreviation": "SEA",
                "active": true,
                "first_name": "Seattle",
                "last_name": "Mariners",
                "conference": "American",
                "division": "West",
                "site_name": "Safeco Field",
                "city": "Seattle",
                "state": "Washington",
                "full_name": "Seattle Mariners"
            },
            "site": {
                "capacity": 47116,
                "surface": "Grass",
                "name": "Safeco Field",
                "city": "Seattle",
                "state": "Washington"
            },
            "away_period_scores": [
                2,
                0,
                0,
                2,
                0,
                0,
                0,
                0,
                0
            ],
            "home_period_scores": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "away_points_scored": 4,
            "home_points_scored": 0
        },
        {
            "event_id": "20170611-kansas-city-royals-at-san-diego-padres",
            "event_status": "completed",
            "sport": "MLB",
            "start_date_time": "2017-06-11T16:40:00-04:00",
            "season_type": "regular",
            "away_team": {
                "team_id": "kansas-city-royals",
                "abbreviation": "KC",
                "active": true,
                "first_name": "Kansas City",
                "last_name": "Royals",
                "conference": "American",
                "division": "Central",
                "site_name": "Kauffman Stadium",
                "city": "Kansas City",
                "state": "Missouri",
                "full_name": "Kansas City Royals"
            },
            "home_team": {
                "team_id": "san-diego-padres",
                "abbreviation": "SD",
                "active": true,
                "first_name": "San Diego",
                "last_name": "Padres",
                "conference": "National",
                "division": "West",
                "site_name": "PETCO Park",
                "city": "San Diego",
                "state": "California",
                "full_name": "San Diego Padres"
            },
            "site": {
                "capacity": 42445,
                "surface": "Grass",
                "name": "PETCO Park",
                "city": "San Diego",
                "state": "California"
            },
            "away_period_scores": [
                4,
                0,
                0,
                1,
                2,
                0,
                0,
                0,
                1
            ],
            "home_period_scores": [
                0,
                0,
                0,
                1,
                0,
                0,
                1,
                1,
                0
            ],
            "away_points_scored": 8,
            "home_points_scored": 3
        },
        {
            "event_id": "20170611-detroit-tigers-at-boston-red-sox",
            "event_status": "completed",
            "sport": "MLB",
            "start_date_time": "2017-06-11T20:05:00-04:00",
            "season_type": "regular",
            "away_team": {
                "team_id": "detroit-tigers",
                "abbreviation": "DET",
                "active": true,
                "first_name": "Detroit",
                "last_name": "Tigers",
                "conference": "American",
                "division": "Central",
                "site_name": "Comerica Park",
                "city": "Detroit",
                "state": "Michigan",
                "full_name": "Detroit Tigers"
            },
            "home_team": {
                "team_id": "boston-red-sox",
                "abbreviation": "BOS",
                "active": true,
                "first_name": "Boston",
                "last_name": "Red Sox",
                "conference": "American",
                "division": "East",
                "site_name": "Fenway Park",
                "city": "Boston",
                "state": "Massachusetts",
                "full_name": "Boston Red Sox"
            },
            "site": {
                "capacity": 33871,
                "surface": "Grass",
                "name": "Fenway Park",
                "city": "Boston",
                "state": "Massachusetts"
            },
            "away_period_scores": [
                3,
                0,
                0,
                0,
                5,
                0,
                0,
                0,
                0
            ],
            "home_period_scores": [
                1,
                0,
                1,
                0,
                0,
                1,
                0,
                0,
                0
            ],
            "away_points_scored": 8,
            "home_points_scored": 3
        }
    ]
};
})();
