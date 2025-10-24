// Copy email to clipboard function
function copyToClipboard(element) {
  navigator.clipboard
    .writeText("hello@louc.dev")
    .then(() => {
      document.getElementById(element).innerHTML = "Email Copied!";
      setTimeout(function () {
        document.getElementById(element).innerHTML = "Get in touch";
      }, 5000);
    })
    .catch(() => {
      alert("something went wrong");
    });
}

// Intersection Observer for reveal animations
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -250px 0px",
    }
  );

  // Observe all elements with the reveal class
  document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
  });
});

// Typewriter effect
const phrases = [
  "Hey! I'm Lou.",
  "Salut, je m'appelle Lou.",
  "Hallo, ich bin Lou.",
  "Ciao, sono Lou.",
  "Hey! I'm Lou.",
];
let currentPhraseIndex = 0;
let i = 0;
let speed = 90;

function typeWriter() {
  const phrase = phrases[currentPhraseIndex];
  if (i < phrase.length) {
    document.getElementById("hello").innerHTML += phrase.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else if (currentPhraseIndex < phrases.length - 1) {
    setTimeout(changePhrase, 1000);
  }
}

function changePhrase() {
  document.getElementById("hello").innerHTML = "";
  i = 0;
  currentPhraseIndex++;
  typeWriter();
}

// Start typewriter and set year when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  typeWriter();

  // Display current year in footer
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
