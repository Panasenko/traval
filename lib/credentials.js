module.exports = {
    cookiesSecret: 'Секретный файл',
    mongo:{
        development:{
            connectionString: 'mongodb://localhost/test'
        },
        production: {
            connectionString: 'mongodb://localhost/production'
        }
    }
};