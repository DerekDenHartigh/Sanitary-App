"use strict";

angular.module("SanitaryApp")
.config(["$routeProvider", ($routeProvider) => {
    $routeProvider
    .when("/home", {
        template: "<search></search><movie-list></movie-list>"
    })
    .when("/watchList", {
        template: "<watch-list></watch-list>"
    })
    .when("/moreInfo", {
        template: "<more-info></more-info>"
    })
    .otherwise({
        redirectTo: "/home"
    })
}]);

// need to write in the proper routes