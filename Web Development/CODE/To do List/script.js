var myapp = angular.module("myList", []);
myapp.controller("myListController", function ($scope) {
    $scope.items = ["Work", "Sleep", "Eat"];
    $scope.newItem = "";
    $scope.pushItem = function () {
        if ($scope.newItem != "") {
            $scope.items.push($scope.newItem);
            $scope.newItem = "";
        }
    }
});