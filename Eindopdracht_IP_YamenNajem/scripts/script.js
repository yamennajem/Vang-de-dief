// ----------- Constanten ---------------
// HTML componenten
const startButton = document.querySelector("#button");
const mensFoto = document.querySelector("#mensFoto");
const scoreConst = document.querySelector("#score");
const header = document.querySelector("header");
const main  = document.querySelector("main");
const footer = document.querySelector("footer");
const body = document.querySelector("body");

// Levels buttons
const beginnerButton = document.querySelector("#beginner");
const normaalButton = document.querySelector("#normaal");
const moeilijkButton = document.querySelector("#moeilijk");
const proButton = document.querySelector("#pro");

// ----------- Variabelen ---------------
let fotosArray = ['img/subject/thief.png', 'img/subject/policeman.png','img/subject/pilot.png','img/subject/old-woman.png','img/subject/nurse.png','img/subject/king.png','img/subject/fireman.png','img/subject/disability.png','img/subject/chef.png','img/subject/baby.png'];
let randomFoto;
let score = 0;
let aantalGevangen = document.querySelector("#score");
let intervalId;
let spelRunning = false;
let snelheid = 1000;

// ----------- Fuuncties ---------------
function startGame() {
    randomFoto = Math.floor(Math.random() * fotosArray.length);
    console.log("random mens nummer: " + randomFoto);
    mensFoto.src = fotosArray[randomFoto];
    resetBackgrounds();
}

function vangDief() {
    clearInterval(intervalId);
    spelRunning = false;
    console.log(intervalId);

    if (randomFoto === 0) {
        console.log("goed");
        header.classList.add("alsGoed");
        main.classList.add("alsGoed");
        footer.classList.add("alsGoed");
        body.classList.add("alsGoed");
        score++;
        aantalGevangen.textContent = score;
    } else {
        console.log("fout")
        header.classList.add("alsFout");
        main.classList.add("alsFout");
        footer.classList.add("alsFout");
        body.classList.add("alsFout");
    }
}

function resetBackgrounds() {
    header.classList.remove("alsGoed", "alsFout");
    main.classList.remove("alsGoed", "alsFout");
    footer.classList.remove("alsGoed", "alsFout");
    body.classList.remove("alsGoed", "alsFout");
}

function autoPlay() {
    console.log("interval running: "+ spelRunning);
    if (spelRunning) {
        clearInterval(intervalId)
    }

    intervalId = setInterval(startGame, snelheid);
    spelRunning = true;
    startGame();
}

function kiesLevel(level) {
    snelheid = level;
    console.log('level: ' + snelheid);
    clearInterval(intervalId);
    autoPlay();
}

// ----------- Event Listeners ---------------
startButton.addEventListener("click", function() {
    autoPlay();
});
mensFoto.addEventListener("click", vangDief);

beginnerButton.addEventListener("click", function() {
    kiesLevel(2000);
});
normaalButton.addEventListener("click", function() {
    kiesLevel(1000);
});
moeilijkButton.addEventListener("click", function() {
    kiesLevel(500);
});
proButton.addEventListener("click", function() {
    kiesLevel(250);
});
