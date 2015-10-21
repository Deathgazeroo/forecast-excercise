(function() {
    'use strict';

    angular
        .module('app.forecast')
        .controller('ForecastController', ForecastController);

    ForecastController.$inject = ['$scope', 'forecastFactory'];

    /* @ngInject */
    function ForecastController($scope, forecastFactory) {
        var vm = this;

        vm.getForecast = function (city, lang) {
            var data = forecastFactory.forecast.get({city: city, lang: lang});

            data.$promise.then(function (result) {
                if (data.cod != "404") {
                    $scope.main = result.main;
                    $scope.weather = result.weather;
                    vm.dataExists = true;
                } else {
                    vm.dataExists = false;
                }

                console.log(result);
            });

        };
    }
})();
