const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.id = "bg";

bgImage.src = `img/${chosenImages}`;

document.body.appendChild(bgImage);
