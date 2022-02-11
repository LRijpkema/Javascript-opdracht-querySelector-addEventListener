console.log('main loaded');
//dit zorgt voor de button
const clickDivs = document.querySelectorAll(".clickdivs");

console.log(clickDivs);

    let index = 0
    console.log(clickDivs[0]);


    //while(index < 4){
    //    const clickDiv = clickDivs[index];
    //    console.log(clickDiv);
    //    if (clickDiv) {
    //        clickDiv.addEventListener("click", showAlert);
    //    }
    //    index++
    //}
    
    for (let index = 0; index < clickDivs.length; index++) {
        const clickDiv = clickDivs[index];
        console.log(clickDiv);
        if (clickDiv) {
            clickDiv.addEventListener("click", showAlert);
        }
    }
    
    //dit zorgt er voor dat je een alert te zien krijgt
    function showAlert(){
        alert('Je hebt op mij geklikt');
        console.log("je hebt geklikt")
    }