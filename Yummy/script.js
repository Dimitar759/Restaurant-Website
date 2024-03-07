let bookATableButton = document.getElementById("bookATable");
let reservationsTable = document.getElementById("reservationsTable");
let bookATableNav = document.getElementById("bookATableNav");


let aboutNavButton= document.getElementById("aboutNav");
let aboutUsPage = document.getElementById("aboutUsPage");

let learnMoreBtn = document.getElementById("learnMore");
let menuPage = document.getElementById("menu");
let menuBtn = document.getElementById("menuBtn");

let eventsBtn = document.getElementById("eventsBtn");
let eventsPage = document.getElementById("events");

let chefsBtn = document.getElementById("chefsBtn");
let chefsPage = document.getElementById("chefs");

let bookATableBtn = document.getElementById("bookATableBtn");
let bookATablePage = document.getElementById("table");

let contactBtn = document.getElementById("contactBtn");
let contactPage = document.getElementById("contact");

bookATableButton.addEventListener("click", function(){
    reservationsTable.scrollIntoView({ behavior: 'smooth' });
});

bookATableNav.addEventListener("click", function(){
    reservationsTable.scrollIntoView({ behavior: 'smooth' });
});

aboutNavButton.addEventListener("click", function(){
    aboutUsPage.scrollIntoView({ behavior: 'smooth' });
});

learnMoreBtn.addEventListener("click", function(){
    aboutUsPage.scrollIntoView({ behavior: 'smooth' });
});

menuBtn.addEventListener("click", function(){
    menuPage.scrollIntoView({ behavior: 'smooth' });
});

eventsBtn.addEventListener("click", function(){
    eventsPage.scrollIntoView({ behavior: 'smooth' });
});

chefsBtn.addEventListener("click", function(){
    chefsPage.scrollIntoView({ behavior: 'smooth' });
});

bookATableBtn.addEventListener("click", function(){
    bookATablePage.scrollIntoView({ behavior: 'smooth' });
});

contactBtn.addEventListener("click", function(){
    contactPage.scrollIntoView({ behavior: 'smooth' });
});