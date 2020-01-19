(function() {
  "use strict";

  angular.module("LunchCheck", []).controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.itemString = "";
    $scope.nbOfItems = 0;
    $scope.resultString;
    $scope.resultOk = null;

    $scope.checkItems = function() {
      //If anything entered in textbox
      if($scope.itemString.length > 0) {
        var itemArray = $scope.itemString.split(",");

        $scope.resultString = checkItemCount(itemArray);
        $scope.resultOk = true;
      }
      else
      {
        $scope.resultString = "Please enter data first";
        $scope.resultOk = false;
      }
    };
  }

  function checkItemCount(items) {
    var itemCount = items.length;

    if(itemCount < 4)
      return "Enjoy!";
    else
      return "Too much!";
  }
})();
