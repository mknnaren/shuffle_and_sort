//  Sort function to sort the numbered cards from 1 to 9
let sortFunc = evt => {
    let counter
    let cardParentDiv = document.getElementsByClassName("cardParentDiv");  // get the parent dom element of the numbered card 
    // -------------
    for (let i = 0; i < cardParentDiv.length; i++) { // Simple 1-9 sort for loop
        counter = i + 1;
        cardParentDiv[i].innerHTML = `<div class="card card-${ counter }">${ counter }</div >`;  // Insert card element manually
    }
}

document.getElementById("sort-btn").addEventListener("click", sortFunc);  // Add click event listener to the sort button to execute the sort function