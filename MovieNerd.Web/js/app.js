angular.module('app', []);

angular.module('app').controller('indexController', function ($scope, $http) {
    $scope.searchTerm = '';
    $scope.searchBy = "all";

    $scope.changeSearch = function (x)
        {
        $scope.searchBy = x;
        console.log($scope.searchBy);
        }

    $scope.getMovies = function () {
        if ($scope.searchBy == "movie" || $scope.searchBy == "series") {
            $http.get('http://www.omdbapi.com/?s=' + $scope.searchTerm + '&type=' + $scope.searchBy)
            .success(function (data) {
                $scope.movies = data.Search;
                console.log(data);
            })
            .error(function (error) {
                alert(error);
            });
        }
        else {
            $http.get('http://www.omdbapi.com/?s=' + $scope.searchTerm )
            .success(function (data) {
                $scope.movies = data.Search;
                console.log(data);
            })
            .error(function (error) {
                alert(error);
            });
        }
    };

});
