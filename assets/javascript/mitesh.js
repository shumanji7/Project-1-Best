const right = document.getElementById('right');
const wrong = document.getElementById('wrong');
const wrong1 = document.getElementById('wrong1');
const rightLabel = document.querySelector("label[for='right']");
const wrongLabel = document.querySelector("label[for='wrong']");
const wrong1Label = document.querySelector("label[for='wrong1']");

right.addEventListener('change', event => {

    if(event.target.checked) {

    console.log('You are right');

    rightLabel.style.color = "green";
    
    } else{
        rightLabel.style.color = "black";
    }
});

wrong.addEventListener('change', event => {

    if(event.target.checked) {
    console.log('You are wrong');
    wrongLabel.style.color = "red";
    
    } else{
        wrongLabel.style.color = "black";
    }

});

wrong1.addEventListener('change', event => {

    if(event.target.checked) {
    console.log('You are wrong');
    wrong1Label.style.color = "red";
    
    } else{
        wrong1Label.style.color = "black";
    }

});
