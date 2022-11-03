let createdNumbersArray = [];
let userArray = [];
let correctNumbersArray = [];





let timeToHideNumbers = 3000;

function startPlay(){

    let totalNumbers = document.getElementById("level").value;

    let maxOfNumberInterval = document.getElementById

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
            let userNumber = parseInt(prompt("inserisci numero"));
            document.getElementById("userNumbers").innerHTML += `${userNumber} `;
            userArray.push(userNumber)
    
            if(createdNumbersArray.includes(userNumber)){
                correctNumbersArray.push(userNumber)
            }
        }
        document.getElementById("numbersDisplayed").innerText = createdNumbersArray;
        console.log(userArray);
    
        document.getElementById("score").innerText = correctNumbersArray.length;
        document.getElementById("correctArray").innerText = correctNumbersArray;
    
        console.log(correctNumbersArray.length);
        console.log(correctNumbersArray);
    }
    
    setTimeout(hideNumbers, timeToHideNumbers);
    
    setTimeout(showPrompt, timeToHideNumbers + 1000);

}

function reset(){
    location.reload();
}





// let arrayUmano = [1,2,6,7,8]
// let arrayRandom = [1,2,3,4,5]
// let arrayNumGiusti = []

// for(i=0; i < arrayRandom.length; i++){
//     let ciclatoDiUmano = arrayUmano[i];

//     if(arrayRandom.includes(ciclatoDiUmano)){
//         arrayNumGiusti.push(arrayUmano[i])
//     }
//     else{}
// }

// console.log(arrayNumGiusti);
// console.log(arrayNumGiusti.length);



