const PersoneService = require('./person-service');

let service = null;

beforeEach(() => {
    service = new PersoneService();
})

test('PersoneService should be created with empty array', () => {
    expect(service.getAll()).toStrictEqual([]);
})

test('PersoneService should be save person', () => {
    service.save({name: "Name"});
    expect(service.getAll().length).toBe(1);
})

test('PersoneService should be save person', () => {
    service.save({name: "Name"});
    expect(service.getAll().length).toBe(1);
})

test('PersoneService should be getByName', () => {
    service.save({name: "Name"});
    expect(service.getByName('Name')).not.toBeNull();
})