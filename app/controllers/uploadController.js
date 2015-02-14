'use strict';
app.controller('uploadController', ['$scope', '$upload', 'ngAuthSettings', function ($scope, $upload, ngAuthSettings) {

    $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });

    $scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                var serviceBase = ngAuthSettings.apiServiceBaseUri;
                var fileuploadurl = serviceBase + 'api/upload';
                $upload.upload({
                    url: fileuploadurl,
                    fields: {
                        'username': $scope.username
                    },
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progress: ' + progressPercentage + '% ' +
                                evt.config.file.name);
                }).success(function (data, status, headers, config) {
                    console.log('file ' + config.file.name + 'uploaded. Response: ' +
                                JSON.stringify(data));
                });
            }
        }
    };

}]);