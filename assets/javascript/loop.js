var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

document.addEventListener("DOMContentLoaded", (event) => {
  var petitProjets = document.getElementById("petitProjets");
  petitProjets.addEventListener("click", function () {
    window.location.href = "petitProjets.html";
  });
});
