let userInput = prompt("Enter your number!");

let parentArray = [];
let userNumber = parseInt(userInput);
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
            childDiv.innerHTML = "0";
            childDiv.style.color = "white";
        }
        lineDiv.appendChild(childDiv);
    }
    parentArray.push(childArray);
}
