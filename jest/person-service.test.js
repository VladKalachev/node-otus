const PersoneService = require('./person-service');

test('PersoneService should be created with empty array', () => {
    const result = new PersoneService();
    expect(result.getAll()).toStrictEqual([]);
})

test('PersoneService should be save person', () => {
    const result = new PersoneService();
    result.save({name: "Name"});
    expect(result.getAll().length).toBe(1);
})

test('PersoneService should be save person', () => {
    const result = new PersoneService();
    result.save({name: "Name"});
    expect(result.getAll().length).toBe(1);
})

test('PersoneService should be getByName', () => {
    const result = new PersoneService();
    result.save({name: "Name"});
    expect(result.getByName('Name')).not.toBeNull();
})