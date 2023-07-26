
var burger = document.querySelector('.hamburger')
var navUl = document.querySelector('.nav-list')

burger.addEventListener('click', function(){
    burger.classList.toggle("active");
    navUl.classList.toggle("active");
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Function to check if the element is in the viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to animate the progress line when in viewport
  function animateProgressLines() {
    var progressLines = document.querySelectorAll('.progress-line');
    progressLines.forEach(function (progressLine) {
      if (isInViewport(progressLine)) {
        var percentage = progressLine.parentElement.getAttribute('data-value');
        progressLine.style.width = '0%';
        progressLine.style.animation = 'none';
        setTimeout(function () {
          progressLine.style.animation = 'animate 1.5s cubic-bezier(1, 0.2, 0.2, 1) forwards';
          progressLine.style.width = 'calc(' + percentage + ' - 2px)';
        }, 0);
      }
    });
  }
  
  // Attach the animateProgressLines function to the scroll event
  window.addEventListener('scroll', animateProgressLines);
  
  // Initial animation when the element is in the viewport on page load
  document.addEventListener('DOMContentLoaded', animateProgressLines);
  