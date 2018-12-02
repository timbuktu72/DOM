"use strict";

/* function paniJoasiaAlarmuje() {
console.log('Pani Joasia Alarmuje!!');

}
let parSecond = document.getElementById('parSecond');
// parSecond.onclick = paniJoasiaAlarmuje();

parSecond.addEventListener('click', paniJoasiaAlarmuje);
parSecond.removeEventListener('click', paniJoasiaAlarmuje);




let pierwszyLinkZKlasaLink = document.querySelector('.link');

console.log(pierwszyLinkZKlasaLink);

pierwszyLinkZKlasaLink.addEventListener('click', (e) => {
e.preventDefault();
// console.log(e.target);
console.log("znacznik, który wywołał klika:");
console.log(e.target);
});
 */
/* let header = document.getElementById('header'); 
let mainHeaderText = document.getElementById('main-header-text');
// console.log(mainHeaderText);
header.addEventListener('click', (e) => {
console.log("Kliknięto <h1>");

}); */
let divRow = document.getElementsByClassName('row');
console.log(divRow);
for (let element of divRow) {
    element.addEventListener('click', () => {
        console.log('Wyświetla się ToolTip pokazujący info o wierszu');

    });
}
let buttonEdit = document.getElementsByClassName('edit');
for (let element of buttonEdit) {
    element.addEventListener('click', (e) => {
        console.log('Wyświetla się edycja danych tego wiersza');
        e.stopPropagation();
    });
}