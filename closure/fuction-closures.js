function getFunctions(){
    var fArray = [];
    for(var i = 0; i < 3; i++){
        //let j = i; // I could use a blocking-scope variable scope to keep the value in i 
        fArray.push((function(j) { // Or I could use the closure generated by an IIFE to keep the value in i
            return function() {
                console.log(j);   
            }
        }(i)));
    }
    return fArray;
}

getFunctions().forEach(f => f());
//RSA test