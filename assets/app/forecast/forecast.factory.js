(function() {
    'use strict';

    angular
        .module('app.forecast', ['ngResource'])
        .factory('forecastFactory', forecastFactory);

    forecastFactory.$inject = ['$resource'];

    function forecastFactory($resource) {

        return {
            forecast : $resource('http://api.openweathermap.org/data/2.5/weather?APPID=289f698d999989c863515bbe402912e6&lang=:lang&q=:city',
            { lang: '@_lang', city: '@_city' },
            {
            update: {
                method: 'GET'
            }
        })
        };

    }




})();
