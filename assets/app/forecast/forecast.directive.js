// unused

(function() {
    'use strict';

    angular
        .module('app.forecast')
        .directive('forecast', forecast);

    /* @ngInject */
    function forecast() {
        // Usage:
        //	<div data-forecast city="munich" language="en"></div>
        // Creates:
        //  Data forecast directive
        var directive = {
            bindToController: true,
            controller: 'ForecastController',
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {
                city: '=city',
                language: '=language'
            }, // it requires to be enabled (in controller, parameters from form should be replaced)
            templateUrl: 'assets/app/templates/forecast.html'
        };
        return directive;
    }

})();

