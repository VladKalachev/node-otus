const sayHello = require('./sample');

test('sayHello should be say hello', () => {
    const resault = sayHello('Word');
    expect(resault).toBe('Hello Word!');
});