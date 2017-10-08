function Person(firstName, lastName){ //Function constructor is just sintax sugar :/
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function() { //function.prototype is not the __proto__ object and it is safe to use
    return `${this.firstName} ${this.lastName}`;
}

var gui = new Person("Guilherme", "de Castro");

console.log(gui.getFullName());

var dimi = new Person("Dimitrius", "Gabriel de Paiva");

console.log(dimi.getFullName());