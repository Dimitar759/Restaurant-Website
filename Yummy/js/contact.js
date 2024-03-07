let contactMessage = document.getElementById("contactMessage");
let subjectContact = document.getElementById("subjectContact");
let emailContact = document.getElementById("emailContact");
let nameContact = document.getElementById("nameContact");

let contactButton = document.getElementById("contactButton");
let contactUsMessage = document.getElementById("contactUsMessage");

contactButton.addEventListener("click", () => {
    if (contactMessage.value !== "" && subjectContact.value !== "" && emailContact.value !== "" && nameContact.value !== "") {
        // All fields are filled
        contactUsMessage.textContent = "Your message has been sent successfully!";
        contactUsMessage.classList.remove("notShow");
    } else {
        // Some fields are empty
        contactUsMessage.textContent = "Please fill in all the fields!";
        contactUsMessage.classList.remove("notShow");
    }

    setTimeout(() => {
        contactUsMessage.classList.add("notShow");
    }, 3000);

    // Clear input fields
    contactMessage.value = "";
    subjectContact.value = "";
    emailContact.value = "";
    nameContact.value = "";
});