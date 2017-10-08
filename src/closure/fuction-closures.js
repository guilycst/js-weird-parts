function getFunctions(){
    var fArray = [];
    for(var i = 0; i < 3; i++){
        //let j = i; // I could use a blocking-scope variable to keep the i value
        fArray.push((function(j) { // Or I could use the closure generated by an IIFE to keep the value in i
            return function() {
                console.log(j);   
            }
        }(i)));
    }
    return fArray;
}

getFunctions().forEach(f => f());