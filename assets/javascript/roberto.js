
//Object Answer
//const answers = new Object();
//Set values
//answers.q1 = "C",
//answers.q2 = "A",
//answers.q3 = "B",
//answers.q4 = "B",
//answers.q5 = "A";

const answers = ["C","A","B","B","A"];

function getSelectedValue(radios) {

    let counter = 0; 
    let index = 0;
    let okAy = "";
    let nokAy = "";
    let value = "";
    let pos = 0;

    for (const radio of radios) {
        counter += 1;  
        value = "";  

        for (let i = 0; i < radio.length; i++){
            if (radio[i].checked) {
                yesQ = "Question " + `${counter}` + " you selected " + radio[i].value;
                noQ = "";
                alert(yesQ);
                value = radio[i].defaultValue;
                ;
                index = i;
                //break;   
            } else {
                noQ = "Question " + `${counter}` + " no option selected. ";
                //alert(nokAy);            
            }
            if ( answers[pos] === value ) {
                //radios[counter].radio[index].style.color = "green";
                //const labelQ = document.querySelector(radio[pos].name);
                //const labelQ = document.getElementsByName(radio[pos].name);
                let name = radio[pos].name;
                let id = name + value; 
                //const labelQ = document.querySelector(id);
                //const labelQ = document.querySelector("label[for=" `${id}` + "]");
                alert("ANSWER OKAY!");
                };         
        }
        pos += 1;   

        if ( noQ != "" ) {
            alert(noQ);
        }

        pos += 1;
    //return null; // No selection
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
