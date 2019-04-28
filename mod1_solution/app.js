(function () {
'use strict';

angular.module('LunchApp', [])
.controller('LunchController', DIController);

DIController.$inject = ['$scope', '$filter'];
function DIController($scope, $filter) {
  $scope.name = "Yaakov";
  $scope.lunchlen=42;

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };
   $scope.checkLunchItems=function(){
     if (typeof $scope.lunch_list == 'undefined') {
       $scope.msg="Please enter data first";
        return;
      }
    var menu=$scope.lunch_list.split(",")
    if (menu.length==0) {
      $scope.msg="Please enter data first";
    } else if (menu.length<=3) {
      $scope.msg="Enjoy!";
    } else {
      $scope.msg = "Too much!";
    }
  };
}

})();
