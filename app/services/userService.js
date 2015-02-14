'use strict';
app.factory('usersService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var usersServiceFactory = {};

    var _getusers = function () {

        return $http.get(serviceBase + 'api/users').then(function (results) {
            return results;
        });
    };

    usersServiceFactory.getusers = _getusers;

    return usersServiceFactory;

}]);