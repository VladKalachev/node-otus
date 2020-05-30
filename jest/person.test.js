const Person = require('./person');

test('constructor Person ', () => {
    const result = new Person(30,'Name');
    expect(result.name).toBe('Name');
    expect(result.age).toBe(30);
})

test('birthDay Person ', () => {
    const result = new Person(30,'Name');
    result.birthDay()
    expect(result.age).toBe(31);
})