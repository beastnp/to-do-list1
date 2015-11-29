angular.module('toDoApp').controller('mainCtrl', function ($scope, mainService) {

    $scope.getItems = function () {
        mainService.getItems().then(function (response) {
            $scope.items = response;
        });
    };
    
    $scope.addNewItem = function() {
        mainService.addNewItem($scope.newItem).then(function(response) {
            $scope.getItems();
        });
        $scope.newItem = {};
    };
    
    $scope.updateItem = function(item) {
        mainService.updateItem(item).then(function (response) {
            $scope.getItems();
        });
    };
    
    $scope.deleteItem = function(item) {
        mainService.deleteItem(item).then(function (response) {
            $scope.getItems();
        });
    };
    
    $scope.getItems();
    
//    $scope.showForm = false;
    
//    $scope.showUpdate = function() {
//        $scope.showForm = !$scope.showForm;
//    };

})