// change theme color
var swatches = document.querySelectorAll(".swatches span");
var root = document.querySelector(":root");

// add event listener to swatches
swatches.forEach((swatch) => {
  swatch.addEventListener("click", (e) => {
    root.style.setProperty("--theme-color", e.target.style.background);
  });
});
