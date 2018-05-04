var imageIndex = 1;
displayImages(imageIndex);

function nextImage(n) {
  displayImages(imageIndex += n);
}

function currentSlide(n) {
  displayImages(imageIndex = n);
}

function displayImages(n) {
  var i;
  var slides = document.getElementsByClassName('showImage');
  if (n > slides.length) { imageIndex = 1; }

  if (n < 1) { imageIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[imageIndex - 1].style.display = 'block';
}

var autoSlider;
function autoSliderfun() {
  autoSlider = setInterval(function () {
    nextImage(1);
  }, 2000);
}

autoSliderfun();

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  clearInterval(autoSlider);
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = 'none';
    autoSliderfun();
  };

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
      autoSliderfun();
    }
  };
