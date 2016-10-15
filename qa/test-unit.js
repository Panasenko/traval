var fortune = require('../lib/fortune');
var expect = require('chai').expect;

suite('Тест печенек с предсказаниями', function () {
    test('getFortune() должна возвращать предсказания', function () {
        expect(typeof fortune.getFortune() === 'string');
    });
});