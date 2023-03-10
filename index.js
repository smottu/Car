const Fedein = document.getElementById("fadein");

window.addEventListener("scroll", () => {
  const FedeinTop= FedeinTop.getBoundingClientRect().top
  const WindowHeight = window.innerHeight;
  if (WindowHeight > (FedeinTop + 200)) {
    Fadein.classList.add("fadein-after");
  } else {
    Fadein.classList.remove("fadein-after");
  }
});