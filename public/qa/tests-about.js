/**
 * Created by panas on 15.10.2016.
 */
suite('Тест страницы о компании', function () {
    test('Страница должна содержать ссылку на страницу контактов', function () {
        assert($('a[href="/contact"]').length);
    });
});