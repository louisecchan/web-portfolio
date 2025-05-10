document.addEventListener("DOMContentLoaded", () => {
  const numberElement = document.querySelector(".number");
  const targetNumber = parseInt(numberElement.getAttribute("data-target"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        numberElement.style.animationName = "count";
        animateNumber(numberElement, targetNumber);
        observer.disconnect();
      }
    });
  });

  observer.observe(numberElement);

  function animateNumber(element, target) {
    let start = 28;
    const stepTime = Math.abs(Math.floor(1000 / (target - start)));

    const timer = setInterval(() => {
      start++;
      element.textContent = start;

      if (start === target) {
        clearInterval(timer);
      }
    }, stepTime);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 250;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }

  // Initial check
  reveal();

  // Check on scroll
  window.addEventListener("scroll", reveal);

  // Check after a short delay to ensure all elements are rendered
  setTimeout(reveal, 500);
});
