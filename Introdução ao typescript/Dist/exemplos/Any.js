"use strict";
let valorAny;
valorAny = 3;
valorAny = "olá";
valorAny = true;
let valorString = "teste";
valorString = valorAny;
let valorString2 = "testao";
valorString2 = valorAny;
function SomarString(string1, string2) {
    console.log(string1);
}
SomarString(valorString, valorString2);
