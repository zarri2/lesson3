function temperature () {
    let tempindegree = parseFloat (document.getElementById("temp").value);
    let result = (tempindegree*9/ 5) + 32;
    
    document.getElementById("para1").innerHTML= `The temperature ${tempindegree} degree is equal to temperature ${result}F `;
}