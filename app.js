(function(){
  'use strict';
// For Testing Purposes Only
var returnedData = {
  "events_date": "2017-06-10T23:00:00-04:00",
  "count": 17,
  "event": [
    {
      "event_id": "20170610-texas-rangers-at-washington-nationals",
      "event_status": "completed",
      "sport": "MLB",
      "start_date_time": "2017-06-10T12:05:00-04:00",
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
        0,
        1,
        0,
        0,
        0,
        0,
        2,
        0,
        3
      ],
      "home_period_scores": [
        0,
        0,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        0,
        0
      ],
      "away_points_scored": 6,
      "home_points_scored": 3
    },
    {
      "event_id": "20170610-new-york-mets-at-atlanta-braves",
      "event_status": "completed",
      "sport": "MLB",
      "start_date_time": "2017-06-10T13:05:00-04:00",
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
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        4
      ],
      "home_period_scores": [
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
      "away_points_scored": 6,
      "home_points_scored": 1
    },
    {
      "event_id": "20170610-oakland-athletics-at-tampa-bay-rays",
      "event_status": "completed",
      "sport": "MLB",
      "start_date_time": "2017-06-10T14:10:00-04:00",
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
        0,
        3,
        0,
        0,
        0,
        1,
        0,
        1,
        0
      ],
      "home_period_scores": [
        0,
        0,
        0,
        2,
        0,
        3,
        0,
        0,
        0,
        1
      ],
      "away_points_scored": 5,
      "home_points_scored": 6
    },
    {
      "event_id": "20170610-philadelphia-phillies-at-st-louis-cardinals",
      "event_status": "completed",
      "sport": "MLB",
      "start_date_time": "2017-06-10T14:15:00-04:00",
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
      "home_period_scores": [
        0,
        0,
        0,
        4,
        0,
        0,
        3,
        0,
        -1
      ],
      "away_points_scored": 0,
      "home_points_scored": 7
    },
    {
      "event_id": "20170610-colorado-rockies-at-chicago-cubs",
      "event_status": "completed",
      "sport": "MLB",
      "start_date_time": "2017-06-10T14:20:00-04:00",
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
        2,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        5
      ],
      "home_period_scores": [
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0
      ],
      "away_points_scored": 9,
      "home_points_scored": 1
    },
    {
      "event_id": "20170610-minnesota-twins-at-san-francisco-giants",
      "event_status": "completed",
      "sport": "MLB",
      "start_date_time": "2017-06-10T16:05:00-04:00",
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
        0,
        0,
        1,
        2,
        0,
        0,
        0,
        0
      ],
      "home_period_scores": [
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0
      ],
      "away_points_scored": 3,
      "home_points_scored": 2
    },
    {
      "event_id": "20170610-miami-marlins-at-pittsburgh-pirates",
      "event_status": "completed",
      "sport": "MLB",
      "start_date_time": "2017-06-10T16:05:00-04:00",
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
        3,
        0,
        0,
        2,
        1,
        0,
        0,
        0,
        0
      ],
      "home_period_scores": [
        0,
        1,
        2,
        1,
        0,
        0,
        3,
        0,
        -1
      ],
      "away_points_scored": 6,
      "home_points_scored": 7
    },
    {
      "event_id": "20170610-los-angeles-angels-at-houston-astros",
      "event_status": "completed",
      "sport": "MLB",
      "start_date_time": "2017-06-10T16:10:00-04:00",
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
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        -1
      ],
      "away_points_scored": 1,
      "home_points_scored": 3
    },
    {
      "event_id": "20170610-kansas-city-royals-at-san-diego-padres",
      "event_status": "completed",
      "sport": "MLB",
      "start_date_time": "2017-06-10T16:10:00-04:00",
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
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        9,
        0
      ],
      "home_period_scores": [
        1,
        0,
        0,
        0,
        3,
        0,
        1,
        1,
        0
      ],
      "away_points_scored": 12,
      "home_points_scored": 6
    },
    {
      "event_id": "20170610-2-new-york-mets-at-atlanta-braves",
      "event_status": "completed",
      "sport": "MLB",
      "start_date_time": "2017-06-10T18:00:00-04:00",
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
        "capacity": 50096,
        "surface": "Grass",
        "name": "Turner Field",
        "city": "Atlanta",
        "state": "Georgia"
      },
      "away_period_scores": [
        0,
        0,
        0,
        0,
        3,
        1,
        0,
        2,
        2
      ],
      "home_period_scores": [
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0
      ],
      "away_points_scored": 8,
      "home_points_scored": 1
    },
    {
      "event_id": "20170610-2-oakland-athletics-at-tampa-bay-rays",
      "event_status": "scheduled",
      "sport": "MLB",
      "start_date_time": "2017-06-10T18:40:00-04:00",
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
      "away_period_scores": [],
      "home_period_scores": [],
      "away_points_scored": -1,
      "home_points_scored": -1
    },
    {
      "event_id": "20170610-baltimore-orioles-at-new-york-yankees",
      "event_status": "scheduled",
      "sport": "MLB",
      "start_date_time": "2017-06-10T19:15:00-04:00",
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
      "away_period_scores": [],
      "home_period_scores": [],
      "away_points_scored": -1,
      "home_points_scored": -1
    },
    {
      "event_id": "20170610-detroit-tigers-at-boston-red-sox",
      "event_status": "scheduled",
      "sport": "MLB",
      "start_date_time": "2017-06-10T19:15:00-04:00",
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
      "away_period_scores": [],
      "home_period_scores": [],
      "away_points_scored": -1,
      "home_points_scored": -1
    },
    {
      "event_id": "20170610-chicago-white-sox-at-cleveland-indians",
      "event_status": "scheduled",
      "sport": "MLB",
      "start_date_time": "2017-06-10T19:15:00-04:00",
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
      "away_period_scores": [],
      "home_period_scores": [],
      "away_points_scored": -1,
      "home_points_scored": -1
    },
    {
      "event_id": "20170610-toronto-blue-jays-at-seattle-mariners",
      "event_status": "scheduled",
      "sport": "MLB",
      "start_date_time": "2017-06-10T22:10:00-04:00",
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
      "away_period_scores": [],
      "home_period_scores": [],
      "away_points_scored": -1,
      "home_points_scored": -1
    },
    {
      "event_id": "20170610-cincinnati-reds-at-los-angeles-dodgers",
      "event_status": "scheduled",
      "sport": "MLB",
      "start_date_time": "2017-06-10T22:10:00-04:00",
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
      "away_period_scores": [],
      "home_period_scores": [],
      "away_points_scored": -1,
      "home_points_scored": -1
    },
    {
      "event_id": "20170610-milwaukee-brewers-at-arizona-diamondbacks",
      "event_status": "scheduled",
      "sport": "MLB",
      "start_date_time": "2017-06-10T22:10:00-04:00",
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
      "away_period_scores": [],
      "home_period_scores": [],
      "away_points_scored": -1,
      "home_points_scored": -1
    }
  ]
};

function getCurrentTime(){
  // Gets Current Time
}
  const ACCESS_TOKEN = '';
  const TEAM_ID = 'los-angeles-dodgers';
  var curretTime = getCurrentTime();
  var currentDate =returnedData.events_date;
for(let i =0;i<returnedData.event.length;i++){
  if(returnedData.event[i].home_team.team_id == TEAM_ID | returnedData.event[i].away_team.team_id == TEAM_ID){
    let str = `${returnedData.event[i].home_team.team_id} versus ${returnedData.event[i].away_team.team_id}`;
    console.log(str);
    //Log Score
    let homeScore = `${returnedData.event[i].home_team.team_id} has scored ${returnedData.event[i].home_points_scored} runs`;
    let awayScore = `${returnedData.event[i].away_team.team_id} has scored ${returnedData.event[i].away_points_scored} runs`;
    console.log(homeScore);
    console.log(awayScore);
  }

}
var https = require("https");

var options = {
host: 'api.github.com',
path: '/users/bareinhard',
method: 'GET',
headers: {'user-agent': 'node.js'}

};

var request = https.request(options, function(response){
var body = '';
response.on("data", function(chunk){
    body += chunk.toString('utf8');
});

response.on("end", function(){
    console.log("Body: ", body);
    });
});

request.end();


})();
