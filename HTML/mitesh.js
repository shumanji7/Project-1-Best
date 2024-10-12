const right = document.getElementById('right');
const wrong = document.getElementById('wrong');
const wrong1 = document.getElementById('wrong1');
const rightLabel = document.querySelector("label[for='right']");
const wrongLabel = document.querySelector("label[for='wrong']");
const wrong1Label = document.querySelector("label[for='wrong1']");
const addBtn = document.querySelector('#button');
const messageEl = document.querySelector('.message')
const gifContainer = document.getElementById('gif-container');


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
        messageEl.textContent = "Your answer is right";
        
        
        const gifImage = document.createElement('img');
        gifImage.src = 'https://media1.tenor.com/m/c_na_nplHM4AAAAC/the-office-dwight-schrute.gif';
        gifContainer.appendChild(gifImage);

        console.log('Right Answer');
    } 
    
    if(wrong.checked) {
        wrongLabel.style.color = "red";
        messageEl.textContent = "Better luck next time";

        const gifImage = document.createElement('img');
        gifImage.src = 'https://media1.tenor.com/m/YsGxWABzct4AAAAd/death-stare-black-snake-moan.gif';
        gifContainer.appendChild(gifImage);
        
        console.log('Wrong Answer');
    }

    if(wrong1.checked) {
        wrong1Label.style.color = "red";
        messageEl.textContent = "Better luck next time.";

        const gifImage = document.createElement('img');
        gifImage.src = 'https://media1.tenor.com/m/YsGxWABzct4AAAAd/death-stare-black-snake-moan.gif';
        gifContainer.appendChild(gifImage);

        console.log('Wrong Answer your score is `${score}`');
    }
    
});
  
  
