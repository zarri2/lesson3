// Question1
function temperature () {
    let tempindegree = parseFloat (document.getElementById("temp").value);
    let result = (tempindegree*9/ 5) + 32;
    
    document.getElementById("para1").innerHTML= `The temperature ${tempindegree} degree is equal to temperature ${result}F `;
}

// Question2
let worldCupYears= " ";

for (let i=2022; i<=2050; i+=4){
    worldCupYears+=`<li>${i}</li>`;
    
}

document.getElementById("worldCup").innerHTML = `${worldCupYears}`;


// Question3

function Calculate_result() {
    let grade1 = parseFloat(document.getElementById("bar1").value);
    let grade2 = parseFloat(document.getElementById("bar2").value);
    let absences = parseInt(document.getElementById("bar3").value);

      //const
      const totalClasses = 20;
      const minimumPresence = 0.7;
      const minimumAverage = 6.5;

      // Calculations
      let averageGrade = (grade1 + grade2) / 2;
      let presenceRate = (totalClasses - absences) / totalClasses;

      // Determine result
      let result;
      if (presenceRate < minimumPresence && averageGrade < minimumAverage) {
          result = "Failed due to both absences and insufficient grade.";
      } else if (presenceRate < minimumPresence) {
          result = "Failed due to absences.";
      } else if (averageGrade < minimumAverage) {
          result = "Failed due to insufficient grade.";
      } else {
          result = "Approved.";
      }
      document.getElementById('resulthere').textContent = result;

}
