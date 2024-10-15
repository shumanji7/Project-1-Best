
const btn = document.getElementById("checkAnswer");
const resultEl = document.getElementById("grades");

//INCLUDED ROBERTO - BEGIN
function generateStudentId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let studentId = '';
    const length = 8; // Specify the desired length of the ID

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        studentId += characters.charAt(randomIndex);
    }
    return studentId.toUpperCase();
}    
//INCLUDED ROBERTO - END

    btn.addEventListener("click", () => {


        const select1 = document.querySelector("input[name='q1']:checked");
        const select2 = document.querySelector("input[name='q2']:checked");
        const select3 = document.querySelector("input[name='q3']:checked");
        const select4 = document.querySelector("input[name='q4']:checked");
        const select5 = document.querySelector("input[name='q5']:checked");
    
            
        let score = +select1.value + +select2.value + +select3.value + +select4.value + +select5.value;


            if (select1.value === "1") {
                select1.parentElement.style.color = "#0add08"; 
            } else {select1.parentElement.style.color = "#ff2400";   
            }; 
        
            if (select2.value === "1") {
                select2.parentElement.style.color = "#0add08"; 
            } else {select2.parentElement.style.color = "#ff2400";   
            };

            if (select3.value === "1") {
                select3.parentElement.style.color = "#0add08"; 
            } else {select3.parentElement.style.color = "#ff2400";   
            };

            if (select4.value === "1") {
                select4.parentElement.style.color = "#0add08"; 
            } else {select4.parentElement.style.color = "#ff2400";   
            }; 
        
            if (select5.value === "1") {
                select5.parentElement.style.color = "#0add08"; 
            } else {select5.parentElement.style.color = "#ff2400";   
            };
        
        resultEl.textContent = `You got ${score} out of 5 right`;

        //INCLUDED ROBERTO - BEGIN
        //set array[]
        arrayRadios.push(document.getElementsByName('q1'));
        arrayRadios.push(document.getElementsByName('q2'));
        arrayRadios.push(document.getElementsByName('q3'));
        arrayRadios.push(document.getElementsByName('q4'));
        arrayRadios.push(document.getElementsByName('q5'));  
        let studentScore = getSelectedValue(arrayRadios);

        //create object localdata
        const localdata = {
            stdAssId: generateStudentId(),
            stdName: document.getElementById('student-name').value,
            stdSchool: document.getElementById('school-name').value,
            stdScore: studentScore,                            
        };
        
        localStorage.setItem('studentData', JSON.stringify(localdata));        
        //INCLUDED ROBERTO - END        
    });










// //Simplified roberto's js

// //Object Answer
// //const answers = new Object();
// //Set values
// //answers.q1 = "C",
// //answers.q2 = "A",
// //answers.q3 = "B",
// //answers.q4 = "B",
// //answers.q5 = "A";

// const answers = ["C","A","B","B","A"];

// function getSelectedValue(radios) {
//     let pos = 0; 

//     for (const radioGroup of radios) {
//         let selectedValue = ""; 
//         let question = "";

//         for (const radio of radioGroup) {
//             if (radio.checked) {
//                 selectedValue = radio.value; // Get the selected radio button's value
//                 question = "Question " + (pos + 1) + " you selected " + selectedValue;
//                 alert(question);
//                 break; // Exits loop
//             }
//         }

//         if (selectedValue) {
//             if (answers[pos] === selectedValue) {
//                 alert("ANSWER OKAY!");
//                 //Can style red/green here
//             }
//         } else {
//             alert("Question " + (pos + 1) + " no option selected.");
//         }
//         pos++; // Move to the next question
//     }
// }

// //DOM
// document.getElementById('checkAnswer').addEventListener('click', function() {
//     const arrayRadios = [];
//     //set array[]
//     arrayRadios.push(document.getElementsByName('q1'));
//     arrayRadios.push(document.getElementsByName('q2'));
//     arrayRadios.push(document.getElementsByName('q3'));
//     arrayRadios.push(document.getElementsByName('q4'));
//     arrayRadios.push(document.getElementsByName('q5'));  
//     //get array[]                        
//     getSelectedValue(arrayRadios);
// });