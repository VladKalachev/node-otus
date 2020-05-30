const factorial = require('./factorial');

test('1! === 1', () => {
    expect(factorial(1)).toBe(1);
});


test('2! === 2', () => {
    expect(factorial(2)).toBe(2);
});

test('0! === 1', () => {
    expect(factorial(0)).toBe(1);
});