const _ = require('underscore');

let stack = [];


//Lägger ett element överst i stacken 
exports.push = function (x){
    stack.push(x);
};

//Returnerar det översta elementet i stacken och tar bort det
exports.pop = function () {
    return stack.pop();
}

//Returnerar det översta elementet i stacken
exports.peek = function(){
    return _.last(stack);   
}

//Poppar alla element på stacken aka tömmer hela
exports.clear = function(){ 
    while(stack.length >0){ 
        stack.pop();
    }
}