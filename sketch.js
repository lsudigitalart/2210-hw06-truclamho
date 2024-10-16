// let originalSentence = "Beware; for I am fearless, and therefore powerful.";
let randomizeSentence = "";
let fontChoice = ["Luxurious Script", "Playwrite England SemiJoined", "Creepster", "Butcherman", "Londrina Sketch", "Cute Font"];
let backgroundImageNames = ["Books.png","ocean.png", "forest.png", "Library.png", "Picture.png", "ship.png", "Journal.gif", "Statue.png", "white.png", "Skull.png", "painting.png", "Typewriter.png"];
let mainImageNames = ["butterfly.png", "flower.png", "chess.png", "light.png", "moon.png", "violin.png"];
let backgroundImages = [];
let mainImages = [];

// random sentences
let sentences = [
    "Beware; for I am fearless, and therefore powerful.",
    "It is during our darkest moments that we must focus to see the light.",
    "And may the odds be ever in your favor.",
    "There are three things all wise men fear: the sea in a storm, a night with no moon, and the anger of a gentle man.",
    "So it goes…",
    "It does not do to dwell on dreams and forget to live",
    "There are some things you learn best in calm, and some in storm."
];

let positions = [
    { image: "moon.png", x: 350, y: 250 },
    { image: "butterfly.png", x: 0, y: 250 },
    { image: "flower.png", x: 300, y: 0 },
    { image: "violin.png", x: 0, y: 0 },
    { image: "chess.png", x: 0, y: 0 },
    { image: "light.png", x: 0, y: 0 }
];

let selectedBackgroundImage;
let selectedMainImages = [];
let randomizedSentence; 

function preload() {
    // background
    for (let i = 0; i < backgroundImageNames.length; i++) {
        backgroundImages[i] = loadImage('assets/' + backgroundImageNames[i],
            () => console.log("Background image loaded: " + backgroundImageNames[i]),
            () => console.error("Failed to load: " + backgroundImageNames[i])
        );
    }

   // main
    for (let i = 0; i < mainImageNames.length; i++) {
        mainImages[i] = loadImage('assets/' + mainImageNames[i],
            () => console.log("Main image loaded: " + mainImageNames[i]),
            () => console.error("Failed to load: " + mainImageNames[i])
        );
    }
}

function setup() {
    createCanvas(600, 600);
    background(0);

    // random background
    selectedBackgroundImage = random(backgroundImages);
    image(selectedBackgroundImage, 0, 0, width, height); 

    // random main
    selectedMainImages = getRandomImages(mainImageNames, 4);

    for (let i = 0; i < selectedMainImages.length; i++) {
        let imgIndex = mainImageNames.indexOf(selectedMainImages[i]);
        if (imgIndex !== -1) {
            //size
            let randomSize = random(200, 500); 
            image(mainImages[imgIndex], positions[i].x, positions[i].y, randomSize, randomSize);
        }
    }

    randomizedSentence = random(sentences);

    textSize(60);
    let colors = [[255, 255, 255], [255, 0, 0]]; // white or red
    let randomColor = random(colors);
    fill(randomColor);

    let randomFont = random(fontChoice);
    textFont(randomFont);
    text(randomizedSentence, 20, 20, 500, 600);
}

// random images
function getRandomImages(array, count) {
    let shuffled = shuffleArray(array.slice()); 
    return shuffled.slice(0, count); 
}

// array for random sentence
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function draw() {
}
