angular.module('toDoApp').service('mainService', function ($http) {

    this.getItems = function () {
        return $http.get('/api/lists').then(function (response) {
            return response.data;
        });
    };
    
    this.addNewItem = function (item) {
        return $http.post('/api/lists', item).then(function (response) {
            return response;
        });
    };

    this.updateItem = function (item) {
        var endpoint = '/api/lists/' + item._id;
        return $http.put(endpoint, item);
    };
    
    this.deleteItem = function (item) {
        var endpoint = '/api/lists/' + item._id;
        return $http.delete(endpoint);
    };

});