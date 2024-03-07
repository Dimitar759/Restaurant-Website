let bookATableButton = document.getElementById("bookATable");
let reservationsTable = document.getElementById("reservationsTable");
let bookATableNav = document.getElementById("bookATableNav");


// let aboutNavButton= document.getElementById("aboutNav");
// let aboutUsPage = document.getElementById("aboutUsPage");

bookATableButton.addEventListener("click", function(){
    reservationsTable.scrollIntoView({ behavior: 'smooth' });
});

bookATableNav.addEventListener("click", function(){
    reservationsTable.scrollIntoView({ behavior: 'smooth' });
});

// aboutNavButton.addEventListener("click", function(){
//     aboutUsPage.scrollIntoView({ behavior: 'smooth' });
// });

