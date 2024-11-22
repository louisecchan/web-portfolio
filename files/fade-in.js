window.addEventListener("scroll", function () {
  var elements = document.querySelectorAll(".fade-in");
  var windowHeight = window.innerHeight;

  elements.forEach(function (element) {
    var positionFromTop = element.getBoundingClientRect().top;

    if (positionFromTop - windowHeight <= 0) {
      element.classList.add("fade-in-active");
    }
  });
});
