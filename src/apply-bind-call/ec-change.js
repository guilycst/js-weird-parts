/*
.bind(executionContext) - Creates a new function and binds it to the execution context passed as paramenter
.call(executionContext, ... args) - Immediatly executes the function using the execution context passed as parameter
.apply(executionContext,  args[]) - Same as call but the function arguments must be enclosed in an array
*/

//Function borrowing example

var personA = {
    name: "Guilherme de Castro",
    logName:function () {console.log(this.name)}
}

var personB = {
    name: "Iraci Silva de Castro"
}

personA.logName();
personA.logName.call(personB);