'use strict';
app.factory('projectsService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var projectsServiceFactory = {};

    var _getprojects = function () {

        return $http.get(serviceBase + 'api/projects').then(function (results) {
            return results;
        });
    };

    projectsServiceFactory.getprojects = _getprojects;

    return projectsServiceFactory;

}]);