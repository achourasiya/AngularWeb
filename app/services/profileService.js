'use strict';
app.factory('profileService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var profileServiceFactory = {};

    var _getprofile = function () {

        return $http.get(serviceBase + 'api/profiles').then(function (results) {
            return results;
        });
    };

    profileServiceFactory.getprofile = _getprofile;

    return profileServiceFactory;

}]);