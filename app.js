(function(){
'use strict';

var app=angular.module('myFirstApp', []);

app.controller('MyFirstController', function($scope){
  $scope.name= "Aayush";
  $scope.sayHello = function() {
    return "Hello Everyone";
  };
});

app.controller('NameCalculator', function($scope){
    $scope.name="";
    $scope.totalval=0;

    $scope.calnum = function(){
      var tot=calnumforstring($scope.name);

      $scope.totalval=tot;
    };

    function calnumforstring(string){
      var totvalue=0;
      for(var i=0; i<string.length;i++){
        totvalue+=string.charCodeAt(i);
      }
      return totvalue;
    }
});

})();
