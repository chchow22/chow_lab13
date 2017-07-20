var app = angular.module("sixModule");

app.config(function($routeProvider) {
  $routeProvider

  .when("/index", {
    controller: "routeCtrl",
    templateURL: "index.html"
  })

  .otherwise({
    controller: "routeCtrl",
    templateURL: "index.html"
  });
});
