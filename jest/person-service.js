class PersonService{
    constructor() {
        this.persons = [];
    }

    getByName(name) {
        return this.persons.find(person => person.name === name);
    }

    getAll() {
        return this.persons
    }

    deleteByName(name){
        return this.person.filter(person => person.name !== name);
    }

    save(person){
        this.persons.push(person)
    }

}

module.exports = PersonService;