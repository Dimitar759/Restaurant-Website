
let bookATableB= document.getElementById("bookATableButton");
let yourName = document.getElementById("yourFirstName");
let yourLastName = document.getElementById("yourLastName");
let email = document.getElementById("yourEmail");
let number = document.getElementById("yourNumber");

let dateTime = document.getElementById("dateTime");
let nOfPeople = document.getElementById("nOfPeople");
let message = document.getElementById("yourMessage");

let reservingTableMessage = document.getElementById("reservingTableMessage");

bookATableB.addEventListener("click", () => {
    yourName.value = "";
    yourLastName.value = "";
    email.value = "";
    number.value = "";
    dateTime.value = "";
    nOfPeople.value = "";
    message.value = "";

    reservingTableMessage.classList.remove("notShow"); 

    setTimeout(() => {
        reservingTableMessage.classList.add("notShow"); 
    }, 3000);
});

