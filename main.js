let createdNumbersArray = [];
let userArray = [];

let totalNumbers = 5; // da sostituire con input di "difficoltà"

let maxOfNumberInterval = 100

let timeToHideNumbers = 3000;


while(createdNumbersArray.length < totalNumbers){
    let randomNumber = Math.round(Math.random()*(maxOfNumberInterval - 1)) + 1; //le bombe vengono create in un range tra 1 e il numero dei quadratini generati in base al level selezionato
    if(createdNumbersArray.includes(randomNumber)){
    }
    else{
        createdNumbersArray.push(randomNumber)
        document.getElementById("numbersDisplayed").innerHTML += `${randomNumber} `
    }
}

console.log(createdNumbersArray);

// funzione per far scomparire i numeri 

function hideNumbers(){
    document.getElementById("numbersDisplayed").innerText = " ";
}

function showPrompt(){
    for(i = 0; i < totalNumbers; i++){
        let userNumber = prompt("inserisci numero")
        document.getElementById("userNumbers").innerHTML += `${userNumber} `;
        userArray.push(userNumber)
    }
    document.getElementById("numbersDisplayed").innerText = createdNumbersArray;
    console.log(userArray);
}

setTimeout(hideNumbers, timeToHideNumbers);

setTimeout(showPrompt, timeToHideNumbers + 1000);

for(i=0; i<5; i++){
    
}





