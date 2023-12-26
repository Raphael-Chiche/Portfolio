var projetResume = document.getElementsByClassName("projetResume");
var projetDesc = document.getElementsByClassName("projetDesc");
var projetContent = document.getElementsByClassName("projetContent");
var projetname = document.getElementsByClassName("projetName");
// for (let i = 0; i < projetResume.length; i++) {
//     projetResume[i].addEventListener("mouseover", function () {
//         projetDesc[i].classList.add("show");
//     });

//     projetResume[i].addEventListener("mouseout", function () {
//         projetDesc[i].classList.remove("show");
//     });
// }

for (let i = 0; i < projetResume.length; i++) {
        projetResume[i].addEventListener("mouseover", function () {
            projetname[i].classList.add("projetNamehover");
            projetname[i].classList.add("underline-animationhover");
        });
    
        projetResume[i].addEventListener("mouseout", function () {
            projetname[i].classList.remove("projetNamehover");
            projetname[i].classList.remove("underline-animationhover");
        });
    }


// for (i = 0; i < projetResume.length; i++) {
//     projetResume[i].addEventListener("mouseover", function() {
//       this.classList.toggle("active");
//       var content = this.nextElementSibling;
//       if (content.style.display === "flex") {
//         content.style.display = "none";
//       } else {
//         content.style.display = "block";
//       }
//     });
//   }

// ---------------------------------------------

for (let i = 0; i < projetResume.length; i++) {
    projetResume[i].addEventListener("click", function () {
        if (projetDesc[i].classList.contains("show")) {
            projetDesc[i].classList.remove("show");
        } else {
            projetDesc[i].classList.add("show");
        }
    });
}

