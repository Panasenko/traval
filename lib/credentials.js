module.exports = {
    cookiesSecret: 'Секретный файл',
    mongo:{
        development:{
            connectionString: 'mongodb://localhost/test'
        },
        production: {
            connectionString: 'mongodb://localhost/production'
        }
    },
    authProviders: {
        facebook: {
            development: {
                appId: '659848064175670',
                appSecret: 'e009b01cd03115480fc80f23caa736ae'
            }
        }
    }
};