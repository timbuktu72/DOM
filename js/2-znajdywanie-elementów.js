"use strict";

let parFirst = document.getElementById("parFirst");
console.log(parFirst);

let linkLink = document.getElementsByClassName("Link");
console.log("linkLink");

let wszystkieLinki = document.getElementsByTagName("a");
console.log(wszystkieLinki);

let pierwszyLinkSuperlink = document.querySelector(".superlink");
let wszystkieLinkiSuperlink = document.querySelectorAll(".superlink");
console.log(wszystkieLinkiSuperlink);

for (let element of wszystkieLinki) {
console.log(element);

}