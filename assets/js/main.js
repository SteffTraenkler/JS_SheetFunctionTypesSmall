let calc = (x) => {
    console.log(x * 28.35 + " gr");
}
calc(1);
calc(3);
calc(4);
calc(6);
calc(5);

// functionArten:
//1
//normale function

function kToGr1(kg) {
    console.log(kg + " kg ist: " + kg * 1000 + " gramm");
}
kToGr1(233);

//2
//variable
let kToGr2 = function (kg) {
    console.log(kg + " kg ist: " + kg * 1000 + " gramm");
}
kToGr2(4);


//3
//arrow function
let kToGr = (x) => {
    console.log(x + ' Kilogramm ist/sind ' + x * 1000 + " Gramm");
}
kToGr(2);


//return

let hi = () => {
    return 'hi';
}
let sayHi = hi();
console.log(sayHi);

//Besonderheit return:
//Backend wichtig!
//return beendet eine Funktion sofort
//return gibt immer etwas zurück, ob es definiert ist oder nicht


//this

function show() {
    console.log(this);
}
show()

//this = window object; gibt Informationen über das Fenster aus (Browser, Inhalt, Funktionen, Events, etc, etc)