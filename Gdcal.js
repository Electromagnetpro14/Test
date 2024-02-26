const mark = document.querySelector("#marks");

function result() {
    var n = document.querySelector("#result");
    
    if (mark.value >= 80 && mark<=100) {
        var n = document.querySelector("#result");
        n.innerText = 'GPA: 5.00 Grade: A+';
    } 
    else if (mark.value < 80 && mark.value >= 70) {
        var n = document.querySelector("#result");
        n.innerText = 'GPA: 4.00 Grade: A';
    } else if (mark.value < 70 && mark.value >= 60) {
        var n = document.querySelector("#result");
        n.innerText = 'GPA: 3.50 Grade: A-';
    } else if (mark.value <60 && mark.value >= 50) {
        var n = document.querySelector("#result");
        n.innerText = 'GPA: 3.00 Grade: B';
    } else if (mark.value <50 && mark.value >= 40) {
        var n = document.querySelector("#result");
        n.innerText = 'GPA: 2.00 Grade: C';
    } else if (mark.value <40 && mark.value >= 33) {
        var n = document.querySelector("#result");
        n.innerText = 'GPA: 1.00 Grade: D';
    } else if (mark.value <33 && mark.value >= 0){ 
        n.innerText = 'GPA: 0.00 Grade: F';
    }

    }
    
    console.log("Result displayed:", n.innerText); 

