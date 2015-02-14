'use strict';
app.controller('customersController', ['$scope', 'customersService', function ($scope, customersService) {

    $scope.editableInPopup = '<button id="editBtn" type="button" class="btn-sm btn-primary" ng-click="edit(row)" >Edit</button> '
    $scope.edit = function edit(row) {
        console.log("Here I need to know which button was selected " + row.entity.name)
    }
    $scope.gridOptions1 = {
        paginationPageSizes: [25, 50, 75],
        paginationPageSize: 25,
        columnDefs: [
          { name: 'name' },
          { name: 'discription' },
          { name: 'createdDate' },
           { name: 'Pop up', cellTemplate: $scope.editableInPopup }
        ],
        enableFiltering: true,
        enableGridMenu: true,
        enableSelectAll: true,
        exporterCsvFilename: 'myFile.csv',
        exporterPdfDefaultStyle: { fontSize: 9 },
        exporterPdfTableStyle: { margin: [30, 30, 30, 30] },
        exporterPdfTableHeaderStyle: { fontSize: 10, bold: true, italics: true, color: 'red' },
        exporterPdfHeader: { text: "My Header", style: 'headerStyle' },
        exporterPdfFooter: function (currentPage, pageCount) {
            return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
        },
        exporterPdfCustomFormatter: function (docDefinition) {
            docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
            docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
            return docDefinition;
        },
        exporterPdfOrientation: 'portrait',
        exporterPdfPageSize: 'LETTER',
        exporterPdfMaxGridWidth: 500,
        exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
        onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
        }
    };
    $scope.customers = [];

    customersService.getcustomers().then(function (results) {

        $scope.customers = results.data;
        $scope.gridOptions1.data = $scope.customers;
    }, function (error) {
        //alert(error.data.message);
    });

}]);