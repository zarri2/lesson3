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


