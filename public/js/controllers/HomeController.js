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
          $scope.currentDate = changeDate(0);
          $scope.lastIncrement = 0;

          $scope.getNewDate =function(increment){

            $scope.currentDate=changeDate(increment);

            $scope.Loading = true;
            console.log($scope.currentDate);
            $http.get('/api/teamdata/'+$scope.currentDate).then(function(response){
              $scope.games = response.data;
              $scope.gamesPlaying = $scope.games.playing;
              if($scope.games.playing.length !== 0){
                $scope.currentGame = $scope.gamesPlaying[$scope.currentGameNumber];
                $scope.currentGameCompleted = $scope.currentGame.completed;
              }

              $scope.Loading = false;
              console.log(response);
            });
          };
          $scope.prettyDate = function(date){
            return `${date.substring(5,6)}/${date.substring(6,8)}/${date.substring(0,4)}`;
          };
          function init(){
            $http.get('/api/teamdata').then(function(response){
              console.log(response.data);
              $scope.games = response.data;
              $scope.gamesPlaying = $scope.games.playing;
              console.log($scope.currentGameNumber);
              if($scope.games.playing.length !== 0){
                $scope.currentGame = $scope.gamesPlaying[$scope.currentGameNumber];
                $scope.currentGameCompleted = $scope.currentGame.completed;
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



})();
