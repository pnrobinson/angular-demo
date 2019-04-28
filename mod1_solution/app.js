(function () {
'use strict';

angular.module('LunchApp', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope', '$filter'];
function LunchController($scope, $filter) {
  $scope.msg="";
  $scope.lunch_list=""

  $scope.checkLunchItems=function(){
    if (typeof $scope.lunch_list == 'undefined') {
      $scope.msg="Please enter data first";
      return;
    }
    var menu=$scope.lunch_list.split(",")
    if ($scope.lunch_list=="") {
      $scope.msg="Please enter data first";
    } else if (menu.length<=3) {
      $scope.msg="Enjoy!";
    } else {
      $scope.msg = "Too much!";
    }
  };
}

})();
