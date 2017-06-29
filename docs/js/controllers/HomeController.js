(function () {
    'use strict';

    angular
        .module('DodgersApp')
        .controller('HomeController',['$location','$scope','$http','$timeout',function($location,$scope,$http,$timeout){
          $scope.games = null;
          $scope.Loading = true;
          $scope.currentGameNumber = 0;
          $scope.currentGame = null;
          $scope.currentGameCompleted = false;
          $scope.Reset = false;
          $scope.todaysDate = changeDate(0);
          $scope.checkDate = changeDate(0);
          $scope.currentDate = changeDate(-1);
          $scope.lastIncrement = 0;
          $scope.tableHeader = ['','1st','2nd','3rd','4th','5th','6th','7th','8th','9th','R','H','E'];
          $scope.scoreBoardAway = [];
          $scope.scoreBoardHome = [];
          $scope.homeSummary = {};
          $scope.awaySummary = {};
          $scope.getNewDate =function(increment){

            $scope.currentDate=changeDate(increment);

            $scope.Loading = true;
            console.log($scope.currentDate);
            $timeout(function(){
              $scope.games = data;
              $scope.gamesPlaying = $scope.games.playing;
              if($scope.games.playing.length !== 0){
                $scope.currentGame = $scope.gamesPlaying[$scope.currentGameNumber];
                $scope.currentGameCompleted = $scope.currentGame.completed;
              }

              $scope.Loading = false;
              console.log(data);
            });
          };
          $scope.prettyDate = function(date){
            return `${date.substring(5,6)}/${date.substring(6,8)}/${date.substring(0,4)}`;
          };
          function createTable(){
              $scope.tableHeader = [];
              $scope.tableHeader.push('');
              console.log($scope.currentGame);
              $scope.scoreBoardAway.push($scope.currentGame.awayTeam.name);
              $scope.scoreBoardHome.push($scope.currentGame.homeTeam.name);
              for(let i = 0;i<$scope.currentGame.homeTeam.score.length;i++){
               $scope.tableHeader.push(parseInt(i)+1);
               $scope.scoreBoardAway.push($scope.currentGame.awayTeam.score[i]);
               if($scope.currentGame.homeTeam.score[i] === -1){
                 $scope.scoreBoardHome.push('X');
               }
               else{
                 $scope.scoreBoardHome.push($scope.currentGame.homeTeam.score[i]);
               }

              }
              $scope.tableHeader.push('R');
              $scope.scoreBoardAway.push("88");
              $scope.scoreBoardHome.push("88");
              $scope.tableHeader.push('H');
              $scope.scoreBoardAway.push("88");
              $scope.scoreBoardHome.push("88");
              $scope.tableHeader.push('E');
              $scope.scoreBoardAway.push("88");
              $scope.scoreBoardHome.push("88");
          }
          function init(){
            $http.get('/api/teamdata/'+$scope.currentDate).then(function(response){
              console.log(response.data);
              $scope.games = response.data;
              $scope.gamesPlaying = $scope.games.playing;
              console.log($scope.currentGameNumber);
              if($scope.games.playing.length !== 0){
                $scope.currentGame = $scope.gamesPlaying[$scope.currentGameNumber];
                $scope.currentGameCompleted = $scope.currentGame.completed;
                createTable();
              }else{
                $timeout(getNextGame,10000);
              }

              $scope.Loading = false;

            });
          }

          function getNextGame(){
            if($scope.currentGameNumber <= 7){
              $scope.currentGameNumber++;
            }else{
              $scope.currentGameNumber = -7;
            }


            $scope.getNewDate($scope.currentGameNumber);
            if($scope.todaysDate === changeDate(0)){
              $scope.timeout =  $timeout(getNextGame,12000);
            }
            else{
              $timeout(init,12000);
              init();
            }


          }
          function changeDate(number){
            let retrievedDate = new Date();
            retrievedDate.setDate(retrievedDate.getDate()+number);
            retrievedDate = retrievedDate.toISOString().split('T')[0].split('-');
            retrievedDate = retrievedDate[0]+retrievedDate[1]+retrievedDate[2];
            console.log(retrievedDate);
            return retrievedDate;
          }
          $scope.getDay = function(number){

            $http.get(`/api/teamdata/${changeDate(number)}`).then(function(response){

            });
          };
          // Functions Accessible to the Views/$scope


          $scope.prevGame = function(increment){
            $scope.currentGameNumber -= increment;
            $scope.currentGame = $scope.gamesPlaying[$scope.currentGameNumber];
            $scope.currentGameCompleted = $scope.currentGame.completed;

          };

          // Load Data
          init();








        }]);


const data = {
  "awayTeam":{
    "finalScore":7,
    "id":"cincinnati-reds",
    "name":"Cincinnati Reds",
    "score" : [
    "0": 0,
    "1": 3,
    "2":1,
    "3":0,
    "4":0,
    "5":3,
    "6":0,
    "7":0,
    "8":0
    ]
  },
  "completed":true,
  "gameTime":"4:10 PM",
  "homeTeam":{
    "finalScore":9,
    "id":"los-angeles-dodgers",
    "name":"Los Angeles Dodgers",
    "score" : [
    "0": 0,
    "1": 2,
    "2":0,
    "3":0,
    "4":1,
    "5":0,
    "6":0,
    "7":6,
    "8":-1
    ]
  },
  "loser":"Cincinnati Reds",
  "playString":"The Los Angeles Dodgers play the Cincinnati Reds at Dodger Stadium at 4:10 PM",
  "resultString":"Los Angeles Dodgers won against the Cincinnati Reds with a final score of 9 to 7",
  "stadium":"Dodger Stadium",
  "winner": "Los Angeles Dodgers"
};

})();
