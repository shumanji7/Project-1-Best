//Simplified roberto's js

//Object Answer
//const answers = new Object();
//Set values
//answers.q1 = "C",
//answers.q2 = "A",
//answers.q3 = "B",
//answers.q4 = "B",
//answers.q5 = "A";

/*const answers = ["C","A","B","B","A"];

function getSelectedValue(radios) {
    let pos = 0; 

    for (const radioGroup of radios) {
        let selectedValue = ""; 
        let question = "";

        for (const radio of radioGroup) {
            if (radio.checked) {
                selectedValue = radio.value; // Get the selected radio button's value
                question = "Question " + (pos + 1) + " you selected " + selectedValue;
                alert(question);
                break; // Exits loop
            }
        }

        if (selectedValue) {
            if (answers[pos] === selectedValue) {
                alert("ANSWER OKAY!");
                //Can style red/green here
            }
        } else {
            alert("Question " + (pos + 1) + " no option selected.");
        }
        pos++; // Move to the next question
    }
}

//DOM
document.getElementById('checkAnswer').addEventListener('click', function() {
    const arrayRadios = [];
    //set array[]
    arrayRadios.push(document.getElementsByName('q1'));
    arrayRadios.push(document.getElementsByName('q2'));
    arrayRadios.push(document.getElementsByName('q3'));
    arrayRadios.push(document.getElementsByName('q4'));
    arrayRadios.push(document.getElementsByName('q5'));  
    //get array[]                        
    getSelectedValue(arrayRadios);
});

//TIMER
let initial.timer=50000;
*/

