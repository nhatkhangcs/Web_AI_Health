const prompt = require("prompt-sync")();

var name = prompt("What is your name?");
var num = prompt("What is your favorite number? ");

println("Hello " + name + "!");
println(num + "?! That's my favorite number too!");

println("Name is a " + typeof name);
println("Num is a " + typeof num);