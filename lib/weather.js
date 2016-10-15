/**
 * Created by panas on 15.10.2016.
 */
exports.getWeatherData = function() {
    return {
        locations: [
            {
                name: 'Портленд',
                forecastUrl: 'google.com',
                iconUrl: 'http://s1.iconbird.com/ico/2013/11/504/w128h1281385326539cloud.png',
                weather: 'Облочно',
                temp: '12.8'
            },
            {
                name: 'львов',
                forecastUrl: 'google.com',
                iconUrl: 'http://s1.iconbird.com/ico/2013/11/504/w128h1281385326539cloud.png',
                weather: 'сонце ',
                temp: '10'
            },
            {
                name: 'киев',
                forecastUrl: 'google.com',
                iconUrl: 'http://s1.iconbird.com/ico/2013/11/504/w128h1281385326539cloud.png',
                weather: ' не Облочно',
                temp: '15'
            },
            {
                name: 'Днепр',
                forecastUrl: 'google.com',
                iconUrl: 'http://s1.iconbird.com/ico/2013/11/504/w128h1281385326539cloud.png',
                weather: 'Облочно очень',
                temp: '13'
            }]
    };
};