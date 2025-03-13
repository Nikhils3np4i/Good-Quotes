
//nav buttons
let signInBtn = document.getElementById("signInBtn");
let signUpBtn = document.getElementById("signUpBtn");

signInBtn.addEventListener("click", () => {
    window.location.href="./signIn.html";
});

signUpBtn.addEventListener("click", () => {
    window.location.href="./signUp.html";
});


// making multiple cards

function getCard(cardImage, cardImageAlt, cardHeading, cardTitle){
    let html = `<div class="card1 cardInsider">
                        <img src="${cardImage}" alt="${cardImageAlt}">
                        <h3>${cardHeading}</h3>
                        <p>${cardTitle}</p>
                    </div>`
                
    document.querySelector(".cards").innerHTML = document.querySelector(".cards").innerHTML + html
}

getCard('./animeImg1.jpg', "Anime", "Anime", "Here is Your title");


// now i can take users input, make a function, take the input inside that function and according to that, i will a card

// making multiple cards end


// hamburger

let hiddenMenuBtn = document.getElementById("hiddenMenu");
let closeBtn = document.getElementById("closeBtn");

hiddenMenuBtn.addEventListener("click", () => {
    document.querySelector(".Hamburger").classList.add("active")
})

closeBtn.addEventListener("click", () => {
    document.querySelector(".Hamburger").classList.remove("active");
})