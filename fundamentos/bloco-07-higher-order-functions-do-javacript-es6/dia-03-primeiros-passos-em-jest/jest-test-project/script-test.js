const sum = require('./script');

test('Verifica se a soma de 1 e 2 são 3', () => {
    expect(sum(1, 2)).toBe(3);
})