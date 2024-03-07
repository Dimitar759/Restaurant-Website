let bookATableButton = document.getElementById("bookATable");
let reservationsTable = document.getElementById("reservationsTable");
let bookATableNav = document.getElementById("bookATableNav");


let aboutNavButton= document.getElementById("aboutNav");
let aboutUsPage = document.getElementById("aboutUsPage");

let learnMoreBtn = document.getElementById("learnMore");
let menuPage = document.getElementById("menu");
let menuBtn = document.getElementById("menuBtn");

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