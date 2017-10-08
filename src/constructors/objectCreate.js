Object.create = null; // Forces polyfill to be used
if(!Object.create){
    Object.create = function(o){
        if(arguments.length > 1)
            throw new Error('Object.create only accepts one parameter')
        
        function F () {};
        F.prototype = o;
        return new F();
    }
}

//Pure prototypal inheritance
var person = {
    firstName: '~empty~',
    lastName: '',
    greet: function () {
        return 'Hi ' + this.firstName;
    }
}

var gui = Object.create(person); //Polyfill in case you js engine doesn't have this feature

console.log(gui)
console.log(gui.greet())

gui.firstName = "Guilherme"
gui.lastName = "de Castro";

console.log(gui.greet());

