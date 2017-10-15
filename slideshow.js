var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide"); //3 elements
  var dots = document.getElementsByClassName("dot"); //3 elements
  if (n > slides.length) {slideIndex = 1;} //if @param is greater than slide length, we must've cycled back to 1
  if (n < 1) {slideIndex = slides.length;} //if @param is decremented to less than 1, we must've gone to the top'
  for (i = 0; i < slides.length; i++) { //for each slide in "slides", display with style "none" 
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) { //for each dot in "dots", replace the classname of dots with active or nothing
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active"; //what
}