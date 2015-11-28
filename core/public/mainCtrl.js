angular.module('toDoApp').controller('mainCtrl', function ($scope, mainService) {

    $scope.getItems = function () {
        mainService.getItems().then(function (response) {
            $scope.items = response;
        });
    };
    
//    $scope.addItem = function() {
//        mainService.addNewItem($scope.newItem).then(function (response) {
//            $scope.getItems();
//        });
//        $scope.newItem = {};
//    };
    
    $scope.addNewItem = function() {
        mainService.addNewItem($scope.newItem).then(function(response) {
            $scope.getItems();
        });
        $scope.newItem = {};
    };
    
    $scope.getItems();

})