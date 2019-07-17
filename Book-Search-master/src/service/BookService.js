/**
 * Created by Namita Malik on 02/04/15.
 */
(function (ng) {
    //Defining bookAppService module and requiring bookApp.config
    var bookAppService = ng.module('bookApp.service', ['bookApp.config']);
    bookAppService.service("BookService", ["$http", "UrlConfig", function ($http, UrlConfig) {
        //Providing getBookList api
        this.getBookList = function () {
            return $http.get(UrlConfig.bookResult);
        };
    }]);
})(angular);