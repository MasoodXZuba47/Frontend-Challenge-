// Select element by ID
let title = document.getElementById("mainTitle");

// Select elements by Class
let paragraphs = document.getElementsByClassName("text");

// Select button by ID
let button = document.getElementById("changeBtn");

// Add click event
button.addEventListener("click", function() {

    // Change title color
    title.style.color = "blue";

    // Loop through class elements and change color
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = "red";
    }

});