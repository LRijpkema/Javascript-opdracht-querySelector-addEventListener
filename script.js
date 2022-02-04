console.log('main loaded');
//dit zorgt voor de button
const clickDiv = document.querySelector(".clickdiv");

if (clickDiv) {
clickDiv.addEventListener("click", showAlert, clickLog);
}
//dit zorgt er voor dat je een alert te zien krijgt
function showAlert(){
    alert('Dit is een alert');
    console.log("je hebt geklikt")
}
//dit stuur het bericht dat je hebt geklikt in de console
function clickLog(){
    console.log("Je hebt geklikt")
} 