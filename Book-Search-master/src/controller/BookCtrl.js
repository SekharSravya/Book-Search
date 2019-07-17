/**
 * Created by Namita Malik on 02/04/15.
 */
(function (ng) {
    //Defining bookApp module and requiring bookApp.service
    var bookApp = ng.module('bookApp', ['bookApp.service']);
    bookApp.controller('BookCtrl', ["$scope", "BookService", function ($scope, BookService) {
        //Getting book list from the server
        BookService.getBookList()
            .success(function (response) {
                $scope.book = response.books;
                angular.forEach($scope.book, function (value) {
                    switch (value.librarysupported) {
                        case 1:
                            value.librarysupported = "Yes";
                            break;
                        case 0:
                            value.librarysupported = "No";
                            break;
                        default:
                            value.librarysupported = "NA";
                    }
                });
            })
            .error(function (status) {
                console.log(status);
            });
        //Sorting the books
        $scope.sortObject = {
            sortBy: 'globalbookid',
            globalbookid: false
        };
        $scope.sortBy = function (field) {
            if (!$scope.sortObject[field]) {
                $scope.sortObject = {
                    sortBy: field
                };
                $scope.sortObject[field] = true;
            }
            else {
                $scope.sortObject[field] = false;
            }
        };
    }]);
})(angular);