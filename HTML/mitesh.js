const right = document.getElementById('right');
const wrong = document.getElementById('wrong');
const wrong1 = document.getElementById('wrong1');
const rightLabel = document.querySelector("label[for='right']");
const wrongLabel = document.querySelector("label[for='wrong']");
const wrong1Label = document.querySelector("label[for='wrong1']");
const addBtn = document.querySelector('#button');
const messageEl = document.querySelector('.message')


right.addEventListener('change', event => {

   if(event.target.checked) {

    wrong.checked = false;
    wrong1.checked = false;
   
  } 
});

 wrong.addEventListener('change', event => {

     if(event.target.checked) {
     
    right.checked = false;
    wrong1.checked = false;
     }

 });

 wrong1.addEventListener('change', event => {

     if(event.target.checked) {
     
      right.checked = false;
      wrong.checked = false;
     }

 });


addBtn.addEventListener('click', function () {
    
    if(right.checked) {
        rightLabel.style.color = "green";
        messageEl.textContent = "Your answer was right";
        console.log('Right Answer');
    } 
    
    if(wrong.checked) {
        wrongLabel.style.color = "red";
        messageEl.textContent = "Better luck next time";
        console.log('Wrong Answer');
    }

    if(wrong1.checked) {
        wrong1Label.style.color = "red";
        messageEl.textContent = "Better luck next time";
        console.log('Wrong Answer');
    }
    
});
  
  
  
  //right.addEventListener('change', event => {
    //if(event.target.checked) {
    //console.log('You are right');
    //rightLabel.style.color = "green";
    //} else{
      //  rightLabel.style.color = "black";
    //}
