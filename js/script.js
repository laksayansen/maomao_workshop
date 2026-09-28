let images = [
    "images/kusuriya_4.jpg",
    "images/kusuriya_2.jpg",
    "images/kusuriya_3.jpg",
    "images/kusuriya_1.jpg"
];

let captions = [
    "Maomao, chewing a leaf she probably should not.",
    "Jinshi and Maomao crossing the palace courtyard.",
    "A white lily, and a hand stained with something purple.",
    "Maomao resting in the grass after a long case."
];

let currentImage = 0;

function showImage() {
    document.getElementById("galleryImage").src = images[currentImage];
    document.getElementById("galleryCaption").innerHTML = captions[currentImage];
}

function nextImage() {
    currentImage = currentImage + 1;
    if (currentImage >= images.length) {
        currentImage = 0;
    }
    showImage();
}

function previousImage() {
    currentImage = currentImage - 1;
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }
    showImage();
}

function tasteSoup() {
    let answer = confirm("Maomao is ready to taste the soup. Let her try it?");

    if (answer == true) {
        document.getElementById("poisonResult").innerHTML = "Poisoned! Maomao is delighted and asks for a second bowl.";
        document.getElementById("poisonResult").style.color = "#6b4c8a";
        document.getElementById("bowl").style.transform = "rotate(-20deg)";
    } else {
        document.getElementById("poisonResult").innerHTML = "The soup stays untouched. Maomao looks disappointed.";
        document.getElementById("poisonResult").style.color = "#1f2a24";
        document.getElementById("bowl").style.transform = "rotate(0deg)";
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key == "ArrowRight") {
        nextImage();
    } else if (event.key == "ArrowLeft") {
        previousImage();
    }
});


