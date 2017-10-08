var person = {
    firstName : "",
    lastName: "",
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}


var gui = {
    firstName: "Gui",
    lastName: "Castro"
}

gui.__proto__ = person; //Don't ever do this on real applications

console.log(gui.getFullName());

