
//Object Answer
//const answers = new Object();
//Set values
//answers.q1 = "C",
//answers.q2 = "A",
//answers.q3 = "B",
//answers.q4 = "B",
//answers.q5 = "A";

const answers = ["C","A","B","B","A"];

// function getSelectedValue(radios) {

//     let counter = 0; 
//     let index = 0;
//     let okAy = "";
//     let nokAy = "";
//     let value = "";
//     let pos = 0;

//     for (const radio of radios) {
//         counter += 1;  
//         value = "";  

//         for (let i = 0; i < radio.length; i++){
//             if (radio[i].checked) {
//                 yesQ = "Question " + `${counter}` + " you selected " + radio[i].value;
//                 noQ = "";
//                 alert(yesQ);
//                 value = radio[i].defaultValue;
//                 ;
//                 index = i;
//                 //break;   
//             } else {
//                 noQ = "Question " + `${counter}` + " no option selected. ";
//                 //alert(nokAy);            
//             }
//             if ( answers[pos] === value ) {
//                 //radios[counter].radio[index].style.color = "green";
//                 //const labelQ = document.querySelector(radio[pos].name);
//                 //const labelQ = document.getElementsByName(radio[pos].name);
//                 let name = radio[pos].name;
//                 let id = name + value; 
//                 //const labelQ = document.querySelector(id);
//                 //const labelQ = document.querySelector("label[for=" `${id}` + "]");
//                 alert("ANSWER OKAY!");
//                 };         
//         }
//         pos += 1;   

//         if ( noQ != "" ) {
//             alert(noQ);
//         }

//         pos += 1;
//     //return null; // No selection
//     }
// }

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

function getSelectedValue(radios) {

    const studentAnswers = []; // RFS INCLUDE CODE    
    let pos = 0; 

    for (const radioGroup of radios) {
        let selectedValue = ""; 
        let question = "";

        for (const radio of radioGroup) {
            if (radio.checked) {
                selectedValue = radio.value; // Get the selected radio button's value

                studentAnswers[pos] = selectedValue; // RFS INCLUDE CODE

                question = "Question " + (pos + 1) + " you selected " + selectedValue;
                alert(question);
                break; // Exits loop
                }
            }
        }

        if (selectedValue) {
            if (answers[pos] === selectedValue) {
                alert("ANSWER OKAY!");
                //Can style red/green here
            }
        } else {
            alert("Question " + (pos + 1) + " no option selected.Must be selected to save grade.");
        }
        pos++; // Move to the next question
    }
    return studentAnswers;
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
    const studentAnswers = [];
    studentAnswers = getSelectedValue(arrayRadios);                    

    //create object localdata
    const localdata = {
        id: document.getElementById('student-id').value = generateStudentId(),
        student: document.getElementById('student-name').value,
        school: document.getElementById('school-name').value,
        answers: studentAnswers,
        // grade: grade.value,
      };
    
    localStorage.setItem('studentData', JSON.stringify(localdata));

});

window.onload = function() {
    document.getElementById('student-name').value = "";
    document.getElementById('school-name').value = "";            
    // const localdata = JSON.parse(localStorage.getItem('studentData'));
    // if (localdata) {
    //     document.getElementById('student-name').value = localdata.student;
    //     document.getElementById('school-name').value = localdata.school;        
    // }
};
