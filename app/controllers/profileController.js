'use strict';
app.controller('profileController', ['$scope', "$http", "$routeParams", "$location", "$filter", function ($scope, $http, $routeParams, $location, $filter) {

    //$scope.profile = [];

    //profileService.getprofile().then(function (results) {

    //    $scope.profile = results.data;

    //}, function (error) {
    //    //alert(error.data.message);
    //});

    $scope.selectroletype = [
   { label: 'Translator', value: 11 },
   { label: 'Moderator', value: 12 },
   { label: 'Transcriber', value: 13 },
   { label: 'Content_Tagger', value: 14 },
   { label: 'Agency', value: 15 },
   { label: 'Consumer', value: 16 }
    ];
    $scope.selectsex = [
       { label: 'Male', value: 1 },
       { label: 'Female', value: 2 }

    ];
    $scope.selecteducation = [
       { label: 'Less than high school', value: 1 },
       { label: 'High school graduate', value: 2 },
       { label: 'Some college or university', value: 3 },
       { label: 'College graduate with a 2 year degree', value: 4 },
       { label: 'College graduate with a 4 year degree', value: 5 }
    ];
    $scope.selecthouseholdincome = [
      { label: '19,999 or less', value: 1 },
      { label: '40,000-49,999', value: 2 },
      { label: '70,000-79,999', value: 3 },
      { label: '150,000 or more', value: 4 },
      { label: 'Prefer not to answer', value: 5 }
    ];
    $scope.selectrelationstatus = [
     { label: 'Never married', value: 1 },
     { label: 'Married', value: 2 },
     { label: 'Divorced', value: 3 },
     { label: 'Widowed', value: 4 },
     { label: 'Separated', value: 5 }
    ];


    $scope.selectEthnicity = [
    { label: 'Caucasian', value: 1 },
    { label: 'African American', value: 2 },
    { label: 'Asian (non Pacific Islander)', value: 3 },
    { label: 'Central Asian', value: 4 },
    { label: 'Chinese', value: 5 },
    { label: 'Middle Eastern/North African', value: 6 },
    { label: 'Native American, Eskimo, Aleutian', value: 7 }

    ];
    $scope.selectlanguage = [
             { label: 'Arebic', value: 1 },
             { label: 'Bengali', value: 2 },
             { label: 'English', value: 3 },
             { label: 'French', value: 4 },
             { label: 'Indonesian', value: 5 },
             { label: 'Spanish', value: 6 },
             { label: 'Portuguese', value: 7 }
    ];
    $scope.selectoccupation = [
           { label: 'Government Employee', value: 1 },
           { label: 'Business', value: 2 },
           { label: 'Student', value: 3 },
           { label: 'Others', value: 4 }
    ];
    $scope.selectwork = [
                   { label: 'Travel', value: 1 },
                   { label: 'Duration', value: 2 },
                   { label: 'Holidays', value: 3 },
                   { label: 'Location', value: 4 }
    ];
    $scope.selectexperience = [
                           { label: 'Simple Moderation', value: 1 },
                           { label: 'Depth Interviews', value: 2 },
                           { label: 'Ethnography', value: 3 },
                           { label: 'Others', value: 4 }
    ];


    $scope.selectCountry = [
   { label: 'USA', value: 1 },
   { label: 'RUSSIA', value: 2 },
   { label: 'UK', value: 3 },
   { label: 'INDIA', value: 4 },
   { label: 'CANADA', value: 5 },
   { label: 'FRANCE', value: 6 },
   { label: 'GERMANY', value: 7 }

    ];

    $scope.selectShowDiv = function (option) {
        console.log("call metod  for selecting the option");
        console.log(option);
        if (option == 11) {

            $scope.showTranslator = true;
            $scope.showModerator = false;
            $scope.showTranscriber = false;
            $scope.showContent_Tagger = false;
            $scope.showAgency = false;
            $scope.showConsumer = false;
        }

        if (option == 12) {
            $scope.showTranslator = false;
            $scope.showModerator = true;
            $scope.showTranscriber = false;
            $scope.showContent_Tagger = false;
            $scope.showAgency = false;
            $scope.showConsumer = false;
        }
        if (option == 13) {
            $scope.showTranslator = false;
            $scope.showModerator = false;
            $scope.showTranscriber = true;
            $scope.showContent_Tagger = false;
            $scope.showAgency = false;
            $scope.showConsumer = false;
        }
        if (option == 14) {
            $scope.showTranslator = false;
            $scope.showModerator = false;
            $scope.showTranscriber = false;
            $scope.showContent_Tagger = true;
            $scope.showAgency = false;
            $scope.showConsumer = false;
        }
        if (option == 15) {
            $scope.showTranslator = false;
            $scope.showModerator = false;
            $scope.showTranscriber = false;
            $scope.showContent_Tagger = false;
            $scope.showAgency = true;
            $scope.showConsumer = false;
        }
        if (option == 16) {
            $scope.showTranslator = false;
            $scope.showModerator = false;
            $scope.showTranscriber = false;
            $scope.showContent_Tagger = false;
            $scope.showAgency = false;
            $scope.showConsumer = true;
        }
        if (option == 0) {
            $scope.showTranslator = false;
            $scope.showModerator = false;
            $scope.showTranscriber = false;
            $scope.showContent_Tagger = false;
            $scope.showAgency = false;
            $scope.showConsumer = false;
        }

    }


}])

.controller('DatepickerDemoCtrl', function ($scope) {
    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function (date, mode) {
        return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
    };

    $scope.toggleMin = function () {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
});












