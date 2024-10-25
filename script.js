let indexValue = 0;

function slideshow() {
  let x;
  const img = document.querySelectorAll("img");
  for (x = 0; x < img.length; x++) {
    img[x].style.display = "none"; // Hide all images
  }
  indexValue++;
  if (indexValue > img.length) {
    indexValue = 1; // Reset indexValue if it exceeds the number of images
  }
  img[indexValue - 1].style.display = "block"; // Display the current image
  setTimeout(slideshow, 2500); // Schedule the next slideshow iteration
}

// Start the slideshow
slideshow();

