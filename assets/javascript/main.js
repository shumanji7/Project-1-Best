
const btn = document.getElementById("checkAnswer");
const resultEl = document.getElementById("grades");

//INCLUDED ROBERTO - BEGIN
const arrayGrades = [];

function displayAverageScores() {

    const localData = JSON.parse(localStorage.getItem('studentData'));
    let index = 0;
    studentScoreArray = [];

    // Get the employee table
    const studentTable = document.querySelector("#assessments-table");    
    
    for (let key in localData){      
         studentScoreArray[index] = localData[key];
        index ++;   
    }

      for (let i = 0; i < studentScoreArray.length; i++){
        
            // Clear the employee table
            // studentTable.innerHTML = '';

            const newTableRow = document.createElement("tr");  

            const studentId = document.createElement("td");
            studentId.textContent = studentScoreArray[i].stdAssId;
            newTableRow.appendChild(studentId);

            const studentName = document.createElement("td");
            studentName.textContent = studentScoreArray[i].stdName;
            newTableRow.appendChild(studentName);      

            const studentSchool = document.createElement("td");
            studentSchool.textContent = studentScoreArray[i].stdSchool;
            newTableRow.appendChild(studentSchool);            
        
            const studentScore = document.createElement("td");
            studentScore.textContent = studentScoreArray[i].stdScore;
            newTableRow.appendChild(studentScore);           

            studentTable.appendChild(newTableRow);        
    }        
}    
//INCLUDED ROBERTO - END

//INCLUDED ROBERTO - BEGIN
function generateStudentId() {

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let studentId = '';
    const length = 10; // Specify the desired length of the ID

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
    
        let score = 0 + +select1.value + +select2.value + +select3.value + +select4.value + +select5.value;


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
        
            resultEl.textContent = `You got ${score} out of 5 right.`;            
        
        //INCLUDED ROBERTO - BEGIN
        const arrayRadios = [];
        let stdScore = ( score / 5 ) * 100;

        //set array[]
        arrayRadios.push(document.getElementsByName('q1'));
        arrayRadios.push(document.getElementsByName('q2'));
        arrayRadios.push(document.getElementsByName('q3'));
        arrayRadios.push(document.getElementsByName('q4'));
        arrayRadios.push(document.getElementsByName('q5')); 

        //create object localdata
        const localdata = {
            stdAssId: generateStudentId(),
            stdName: document.getElementById('student-name').value,
            stdSchool: document.getElementById('school-name').value,
            stdScore: stdScore,                            
        };
        arrayGrades.push(localdata);
        
        localStorage.setItem('studentData', JSON.stringify(arrayGrades));   
        // displayAverageScores();
        //INCLUDED ROBERTO - END   
        
    });


        function startTimer(duration, display) {
            let timer = duration, minutes, seconds;
            let timerStart = setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                display.textContent = minutes + ":" + seconds;
                timer--;
                if (timer < 0){
                    window.location.href = "/HTML/Time_Up.html";
                }
            }, 1000)
        document.getElementById("checkAnswer").addEventListener('click', function(){
            clearInterval(timerStart);
        });
        }

        window.onload = function () {
            let max = 60,
            display = document.querySelector('#time');
            startTimer(max, display);
         
        
        };

       


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