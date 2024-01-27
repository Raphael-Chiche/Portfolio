document.addEventListener("DOMContentLoaded", (event) => {
  var circle = document.querySelector(".progress__value");
  var radius = circle.r.baseVal.value;
  var circumference = radius * 2 * Math.PI;
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;
  var projets = document.querySelectorAll(".projetContent");

  // Loop through each "projetContent" element
  projets.forEach(function(projet) {
    // Add an event listener for the mouseover event
    projet.addEventListener('mouseover', function() {
      // Change the shape of the circles
      circles.forEach(function(circle) {
        // circle.style.borderRadius = '0'; // Change '0' to the shape you want
        circle.style.display = "none";
      });
    });

    // Add an event listener for the mouseout event
    projet.addEventListener('mouseout', function() {
      // Change the shape of the circles back
      circles.forEach(function(circle) {
        // circle.style.borderRadius = '50%'; // Change '50%' to the original shape
        circle.style.display = "block";
      });
    });
  });
  function setProgress(percent) {
    var offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
  }

  window.addEventListener("scroll", function () {
    var max = document.body.scrollHeight - window.innerHeight;
    var percent = (window.pageYOffset / max) * 100;
    setProgress(percent);

    var arrowUp = document.querySelector("#arrowUp");
    if (window.scrollY > 150) {
      arrowUp.style.opacity = "1";
      arrowUp.style.transform = "translateY(0)";
    } else {
      arrowUp.style.opacity = "0";
      arrowUp.style.transform = "translateY(20px)";
    }

    var round = document.querySelector(".progress-container");
    if (window.scrollY > 150) {
      round.style.opacity = "1";
      round.style.transform = "translateY(0)";
    } else {
      round.style.opacity = "0";
      round.style.transform = "translateY(20px)";
    }
  });
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// cursor

// function moveCircle(event) {
//   var circle = document.getElementsByClassName("curseurcercle")[0];
//   circle.style.left = event.clientX + "px"; 
//   circle.style.top = event.clientY + "px"; 
// }

// document.body.addEventListener("mousemove", moveCircle);

// document.body.addEventListener("click", function (event) {
//   var circle = document.getElementsByClassName("curseurcercle")[0];
//   circle.classList.add("grow");
//       setTimeout(function () {
//           circle.classList.remove("grow");
//       }, 500);
// });

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");


circles.forEach(function (circle) {
  circle.x = 0;
  circle.y = 0;
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
