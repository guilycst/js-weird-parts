var _ = require('underscore');

var gui = {
    firstName: "Guilherme"
}

var castro = {
    lastName: "de Castro"
}

var fullName = {
    getFullName : function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

_.extend(gui,castro,fullName);

console.log(gui.getFullName());