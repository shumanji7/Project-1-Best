const btn = document.getElementById("checkAnswer");
const resultEl = document.getElementById("grades");
const timeEl = document.querySelector('#timer');
const stuName = document.getElementById('studentName');

let secondsLeft = 60;
let timerInterval;

  function setTime() {
      timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = secondsLeft + ' seconds remaining';

      if (secondsLeft === 0) {
        clearInterval(timerInterval);
          window.location.href = "./Time_Up.html";
      }      
    }, 1000);
  };

  setTime();



  // When button is clicked, student info. is grabbed from local storage, radio buttons gets queried by the name,
  // green or red color is applied to the label by using parentElement based on checked element with a value of 0 or 1, 
  // timer stops and we record the no. of right answers, percentage score and time.
  //Finally we take the student name and school from local storage, the recorded info from the test and add the info.
  //in local storage to be used on the sign in page in order to show previous results.
  btn.addEventListener("click", () => {

    const studentN = localStorage.getItem('student');
    const studentData = JSON.parse(studentN);

    const select1 = document.querySelector("input[name='q1']:checked");
    const select2 = document.querySelector("input[name='q2']:checked");
    const select3 = document.querySelector("input[name='q3']:checked");
    const select4 = document.querySelector("input[name='q4']:checked");
    const select5 = document.querySelector("input[name='q5']:checked");    
            
    let score = +select1.value + +select2.value + +select3.value + +select4.value + +select5.value;
    let percentage = score/5*100;
    let timeLeft = 60-secondsLeft;

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

      clearInterval(timerInterval);
        
      resultEl.textContent = `${studentData.studentName} got ${score} out of 5 right. Your score is ${percentage}%. You finished the test in ${timeLeft} seconds.`;
      
      const studentGrades = {
          studentName: studentData.studentName,
          studentSchool: studentData.studentSchool,
          studentScore: score,
          studentPercent: percentage,
          studentTime: timeLeft
      }  
  
       localStorage.setItem('studentGrades', JSON.stringify(studentGrades));
    
    
    });

    
    
     
