/**
 * Created by Namita Malik on 02/04/15.
 */
(function (ng) {
    //Defining bookAppConfig module
    var bookAppConfig = ng.module("bookApp.config", []);
    bookAppConfig.factory("UrlConfig", function () {
        //Defining all the api urls
        return {
            bookResult: "books/searchbook.json"
        }
    });
})(angular);