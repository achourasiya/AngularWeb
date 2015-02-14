'use strict';
app.factory('customersService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var customersServiceFactory = {};

    var _getcustomers = function () {

        return $http.get(serviceBase + 'api/customers').then(function (results) {
            return results;
        });
    };

    customersServiceFactory.getcustomers = _getcustomers;

    return customersServiceFactory;

}]);