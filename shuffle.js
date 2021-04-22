//  Shuffle function to shuffle the numbered cards from 1 to 9
let shuffleFunc = evt => {
    let shuffleCountArray = [];  // An array to keep the counter of numbers inserted into card elements
    let counter;
    let cardParentDiv = document.getElementsByClassName("cardParentDiv");  // get the parent dom element of the numbered card 
    // -------------
    for (let i = 0; i < cardParentDiv.length; i++) {   // simple for loop to iterate through number 1 to 9 and shuffle them
        counter = Math.floor(Math.random() * 10 + 1);  // generate random number from 1 to 10
        while (shuffleCountArray.indexOf(counter) > -1 || counter > 9) {  // check if the random number is already used or not more than 9
            counter = Math.floor(Math.random() * 10 + 1);
        }
        shuffleCountArray.push(counter);   
        cardParentDiv[i].innerHTML = `<div class="card card-${counter}">${counter}</div >`; // Insert card element manually
    }
}

document.getElementById("shuffle-btn").addEventListener("click", shuffleFunc); // Add click event listener to the shuffle button to execute the shuffle function