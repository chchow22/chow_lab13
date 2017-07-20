var app = angular.module("sixModule");

app.controller("routeCtrl", function($scope) {
  $scope.displayWords = [];
  $scope.noun = ["Cat", "Dog", "Mom", "Dad", "Food", "Ice-Cream", "Water", "Phone", "Bathroom", "Poo",
  "Pool"];
  $scope.verb = ["Pokes", "Pinches", "Plays", "Hits", "Runs"];
  $scope.adjective = ["Ugly", "Disgusting", "Smelly", "Mean", "Bad", "Good", "Mad", "Red", "Blue",
  "Green", "Annoying"];
  $scope.adverb = ["Quickly", "Slowly", "Loudly", "Annoyingly", "Badly"];
  $scope.preposition = ["in", "on", "at", "under", "with", "near"];
  $scope.previousForm = 0;
  $scope.phrasesArray = ["How are you?", "I hate you!", "I don't want to go to sleep!",
  "Haha, you're a loser!", "I am six years old.", "I want to be a police when I grow up.",
  "No way!", "This is mine!", "Mom will kill you!", "I'm gonna tell dad!"];
  // $scope.stylesArray = ["style1", "style2", "style3", "style4", "style5"];

  $scope.words = function() {
    $scope.generator("words", false);
  };
  $scope.wordsDec = function(){
    $scope.generator("words", true);
  };
  $scope.moreWords = function() {
    $scope.generator("phrases", false);
  };
  $scope.moreWordsDec = function() {
    $scope.generator("phrases", true);
  };

  $scope.generator = function(type, decorate) {

    if (decorate) {
      var randomNum = Math.floor(Math.random()* 5);
      if (randomNum == 1) {
        decorate = "style1"
      }
      if (randomNum == 2) {
        decorate = "style2"
      }
      if (randomNum == 3) {
        decorate = "style3"
      }
      if (randomNum == 4) {
        decorate = "style4"
      }
      if (randomNum == 5) {
        decorate = "style5"
      }
    }

    if (type == "words") {

      if ($scope.previousForm == 0) {
        var randomNum = Math.floor(Math.random()* $scope.noun.length);
        $scope.displayWords.push({ value: $scope.noun[randomNum], style: decorate});
        $scope.previousForm = 1;
      } else if ($scope.previousForm == 1) {
        var randomTwo = Math.floor(Math.random()* 2);
        if (randomTwo == 1) {
          var randomNum = Math.floor(Math.random()* $scope.adverb.length);
          $scope.displayWords.push({ value: $scope.adverb[randomNum], style: decorate});
          $scope.previousForm = 4;
        }
        else {
          var randomNum = Math.floor(Math.random()* $scope.verb.length);
          $scope.displayWords.push({ value: $scope.verb[randomNum], style: decorate});
          $scope.previousForm = 2;
        }
      } else if ($scope.previousForm == 2) {
        var randomForm = Math.floor(Math.random()* 4);
        if (randomForm == 1) {
          var randomNum = Math.floor(Math.random()* $scope.noun.length);
          $scope.displayWords.push({ value: $scope.noun[randomNum], style: decorate});
          $scope.previousForm = 1;
        } else if (randomForm == 2 || randomForm == 3) {
          var randomNum = Math.floor(Math.random()* $scope.preposition.length);
          $scope.displayWords.push({ value: $scope.preposition[randomNum], style: decorate});
          $scope.previousForm = 5;
        } else {
          var randomNum = Math.floor(Math.random()* $scope.adjective.length);
          $scope.displayWords.push({ value: $scope.adjective[randomNum], style: decorate});
          $scope.previousForm = 3;
        }
      } else if ($scope.previousForm == 3) {
        var randomNum = Math.floor(Math.random()* $scope.noun.length);
        $scope.displayWords.push({ value: $scope.noun[randomNum], style: decorate});
        $scope.previousForm = 1;
      } else if ($scope.previousForm == 4) {
        var randomNum = Math.floor(Math.random()* $scope.verb.length);
        $scope.displayWords.push({ value: $scope.verb[randomNum], style: decorate});
        $scope.previousForm = 3;
      } else if ($scope.previousForm == 5){
        var randomNum = Math.floor(Math.random()* $scope.noun.length);
        $scope.displayWords.push({ value: $scope.noun[randomNum], style: decorate});
        $scope.previousForm = 1;
      }
    }

    if (type == "phrases") {
      var randomNum = Math.floor(Math.random()* $scope.phrasesArray.length);
      $scope.displayWords.push({ value: $scope.phrasesArray[randomNum], style: decorate });
    }

  };

  $scope.styles = function() {
    var randomNum = Math.floor(Math.random() * $scope.stylesArray.length);
    return { value: $scope.stylesArray[randomNum] };
  };

});
