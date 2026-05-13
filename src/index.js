import * as stack from './stack.js';

window.onload = function () {
    console.log("done");

    var pop = document.getElementById('pop');
    var push = document.getElementById('push');
    var peek = document.getElementById('peek');
    var display = document.getElementById('top_of_stack');
    var clear = document.getElementById('clear'); //La till en riktig knapp också så att den funkar "på riktigt" och inte bara som test

    pop.addEventListener("click", function() {
        var text = "Tog bort " + stack.pop();
        alert(text);
    });

    push.addEventListener("click", function() {
        var x = prompt("Vad ska vi lägga på stacken?");
        console.log(x);
        if(x === null || x === ""){ //Här är kontrollen som jag ville göra och som mitt test är gjort för.
            alert("Du kan inte pusha en tom sträng till stacken");
            return;
        }
        stack.push(x);
        display.innerHTML = x;
    });

    peek.addEventListener("click", function() {
        display.innerHTML = stack.peek();
    });

    clear.addEventListener("click",function(){ //Funktionalitet för när man trycker på min nya knapp 
        stack.clear(); 
    });
};