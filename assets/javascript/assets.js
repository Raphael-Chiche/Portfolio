document.addEventListener("DOMContentLoaded", (event) => {
  var circle = document.querySelector(".progress__value");
  var radius = circle.r.baseVal.value;
  var circumference = radius * 2 * Math.PI;
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

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
  });
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
