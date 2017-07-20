var app = angular.module("sixModule");

app.controller("routeCtrl", function($scope) {
  $scope.displayWords = [];
  $scope.wordsArray = ["Hi", "Bye", "Cat", "Dog", "You", "She", "He", "Mom", "Dad", "Food",
  "Ice-Cream", "Water", "Phone", "Bathroom", "Run", "Poke", "Pinch", "Play", "Hit"];
  $scope.phrasesArray = [". How are you?", ". I hate you!", ". I don't want to go to sleep!",
  ". Haha, you're a loser!", ". I am six years old.", ". I want to be a police when I grow up.",
  ". No way!", ". This is mine!"];
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
      var randomNum = Math.floor(Math.random()* $scope.wordsArray.length);
      $scope.displayWords.push({ value: $scope.wordsArray[randomNum], style: decorate});
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
