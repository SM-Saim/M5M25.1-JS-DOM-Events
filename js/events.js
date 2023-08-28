// Option1:Directly set on the html element. Eta use korbo na.

// Option:2 (Eta beshi use korbo)
//!!! Important !!! We will use this
// Kono ekta button er modde onclick er modde kono ekta function k call korbo,html theke.
function makeSteelBlue() {
  document.body.style.backgroundColor = "steelblue";
}

// Option:3 using onclick in js file,sorasori function er naam bosai dite pari, ba sorasori function ta bosai dite pari.
const makeItGreen = document.getElementById("makeGreen");
makeItGreen.onclick = valueBg;
function valueBg() {
  document.body.style.backgroundColor = "green";
}
//Option:3 another (Etao temon ekta use korbo na, Eta holo function call na kore direct likhe fela, baki sob same)
const makeItPurple = document.getElementById("makePurple");
makeItPurple.onclick = function purpleBg() {
  document.body.style.backgroundColor = "purple";
};

// Option:4 Adding event listener where 1st value is what type eventit is, 2ns value is what to listen
const makeItPink = document.getElementById("makePink");
makeItPink.addEventListener("click", pink);
function pink() {
  document.body.style.backgroundColor = "Pink";
}
// Option:4 another, (same as 4, just calling function directly)
const makeItGray = document.getElementById("makeGray");
makeItGray.addEventListener("click", function gray() {
  document.body.style.backgroundColor = "gray";
});

//Option:4 Final (Direct implement korbo, kono variable chara, )
//!!! Important !!! We will use this
document.getElementById("makeOrange").addEventListener("click", function () {
  document.body.style.backgroundColor = "orange";
});
