var imageIndex = 1;
showImage(imageIndex);

//Next and previous Buttons
function plusImages(i) {
  showSlides(slideIndex += i);
}

function showImage(i) {
  var i;
  var images = document.getElementsByClassName("section")
  var bubbles = document.getElementsByClassName("bubble")
  if (i>images.length) {imageIndex = 1}
  if (i < 1) {imageIndex = images.length}
  for (var i = 0; i < images.length; i++) {
   images[i].style.display = "none";
  }

  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].className = bubbles[i].className.replace(" active", "")
  }

  images[imageIndex-1].style.display = "block";
  bubbles[imageIndex-1].className += "active";
}
