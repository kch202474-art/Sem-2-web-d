
function calculateResult(event) {

   event.preventDefault();

   let n = document.getElementById("subjects").value;
   let total = 0;

    for (let i = 1; i <= n; i++) {
        let marks = parseFloat(prompt("Enter marks for subject " + i + ":"));
        total = total + marks;
    }

    let average = total / n;

    let grade;
    let result;

    if(average>=90){
        grade = "A";
        result="pass";
    }
    else if(average>=80){
        grade = "B";
        result="pass";
    }
    else if(average>=70){
        grade = "C";
        result="pass";
    }
    else if(average>=60){
        grade = "D";
        result="pass";
    }
    else if(average>=50){
        grade = "E";
        result="pass";

    }
    else if(average>=40){
        grade = "F";
        result="pass";
    }
    else{
        result="fail";
    }

   document.getElementById("result").innerHTML = 
   "<b>Total Marks:</b> " + total + " <br> " +
   "<b>Average Marks:</b> " + average + " <br> " +
   "<b>Grade:</b> " + grade + " <br> " +
   "<b>Result:</b> " + result;

}
