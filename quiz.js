function nascondi (){
    document.getElementById("cookie").style.display = "none";
}

function checkAnswer1() {
var X= document.getElementById("qAnswer1").value.toLowerCase();

if (X == "maskonur") {
  alert("poprawna odpowiedź");
  document.getElementById("test").style.backgroundColor="green";
}
else{
  alert("zła odpowiedź");   
  document.getElementById("test").style.backgroundColor="red";
}
}
function podpowiedz1 () {
document.getElementById("slowo1").innerHTML="Arktyczny braciszek. Kojarzy się z Islandią i je śledzie.";
document.getElementById("btn1").innerHTML="Kolejna podpowiedź?";
}

function checkAnswer2() {
var X= document.getElementById("qAnswer2").value.toLowerCase();

if (X == "paw") {
  alert("poprawna odpowiedź");
  document.getElementById("test").style.backgroundColor="green";
}
else{
  alert("zła odpowiedź");   
  document.getElementById("test").style.backgroundColor="red";
}
}
function podpowiedz2() {
document.getElementById("slowo2").innerHTML="Dorosły samiec ma pstrokaty ogon."
}

function checkAnswer3() {
var X= document.getElementById("qAnswer3").value.toLowerCase();

if (X == "perliczka") {
  alert("poprawna odpowiedź");
  document.getElementById("test").style.backgroundColor="green";
}
else{
  alert("zła odpowiedź");   
  document.getElementById("test").style.backgroundColor="red";
}
}
function podpowiedz3() {
document.getElementById("slowo3").innerHTML="Zobacz na te kropki,są jak perły."
}

function checkAnswer4() {
var X= document.getElementById("qAnswer4").value.toLowerCase();

if (X == "kondor") {
  alert("poprawna odpowiedź");
  document.getElementById("test").style.backgroundColor="green";
}
else{
  alert("zła odpowiedź");   
  document.getElementById("test").style.backgroundColor="red";
}
}
function podpowiedz4() {
document.getElementById("slowo4").innerHTML="Żyje w Andach.";
}