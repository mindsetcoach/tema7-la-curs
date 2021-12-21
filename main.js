let isNumberCorrect;
let userNumber;
let parentArray = [];

do {
    isNumberCorrect = true;
    let userInput = prompt("Enter your number between 1 and 9");
    if (userInput.length !== 1) {
        isNumberCorrect = false;
    } else {
        userNumber = parseInt(userInput);
        if (isNaN(userNumber)) {   
            isNumberCorrect = false;
        } else if (userNumber === 0) {
            isNumberCorrect = false;
        }
    } 
    if (isNumberCorrect === false) {
        alert("You didn't enter a number between 1 and 9");
    }
} while (!isNumberCorrect);

let mainDivElement = document.getElementById('mainDiv');

for ( let i=0 ; i<userNumber ; i= i+1 ) {
    let childArray = [];
    let lineDiv = document.createElement("div");
    mainDivElement.appendChild(lineDiv);
    for ( let j=0 ; j<userNumber ; j= j+1 ) {
        let theRandomNumber = Math.floor(Math.random() * 9) + 1;
        childArray.push(theRandomNumber);
        let childDiv = document.createElement("div");
        childDiv.classList.add("child");
        if ( theRandomNumber%2 !== 0) {
            childDiv.innerHTML = theRandomNumber;
        }
        else {
            childDiv.innerHTML = theRandomNumber;
            childDiv.style.color = "white";
        }
        lineDiv.appendChild(childDiv);
    }
    parentArray.push(childArray);
}
