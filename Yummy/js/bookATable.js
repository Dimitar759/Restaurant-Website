
let bookATableB = document.getElementById("bookATableButton");
let yourName = document.getElementById("yourFirstName");
let yourLastName = document.getElementById("yourLastName");
let email = document.getElementById("yourEmail");
let number = document.getElementById("yourNumber");
let dateTime = document.getElementById("dateTime");
let nOfPeople = document.getElementById("nOfPeople");
let message = document.getElementById("yourMessage");
let reservingTableMessage = document.getElementById("reservingTableMessage");

bookATableB.addEventListener("click", () => {
    if (yourName.value !== "" && yourLastName.value !== "" && email.value !== "" && number.value !== "" && dateTime.value !== "" && nOfPeople.value !== "" && message.value !== "") {
        reservingTableMessage.textContent = "Your table has been booked!";
        reservingTableMessage.classList.remove("notShow");
    } else {
        reservingTableMessage.textContent = "Please fill in all the fields!";
        reservingTableMessage.classList.remove("notShow");
    }

    setTimeout(() => {
        reservingTableMessage.classList.add("notShow");
    }, 3000);

    // Clear input fields
    yourName.value = "";
    yourLastName.value = "";
    email.value = "";
    number.value = "";
    dateTime.value = "";
    nOfPeople.value = "";
    message.value = "";
});