let userInput = prompt("Enter your number!");

let parentArray = [];
let userNumber = parseInt(userInput);

for ( let i=0 ; i<userNumber ; i= i+1 ) {
    let childArray = [];


    for ( let j=0 ; j<userNumber ; j= j+1 ) {
        let theRandomNumber = Math.floor(Math.random() * 9) + 1;
        childArray.push(theRandomNumber);
        let childDiv = document.createElement("div");
        childDiv.innerHTML = theRandomNumber;
        let mainDivElement = document.getElementById('mainDiv');
        mainDivElement.appendChild(childDiv);
    }
    parentArray.push(childArray);
}
