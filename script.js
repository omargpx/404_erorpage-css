let character = document.getElementById("character");
var block = document.getElementById("block");

var counter = 0;

const htmlP = document.getElementById("html");
htmlP.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("hizo click");
  if (character.classList == "animate") {
    return;
  } else {
    character.classList.add("animate");
    setTimeout(function () {
      character.classList.remove("animate");
      character.style.left="1%";
    }, 900);
  }
});
