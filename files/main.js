// Project data structure
const projectsData = [
  {
    title: "Halfway Coffee",
    url: "https://halfway.love",
    description:
      "A responsive website built for my favorite coffee shop in Hong Kong.",
    techStack: ["WordPress", "MySQL", "CSS", "HTML"],
  },
  {
    title: "Betterful",
    url: "https://betterful-backup.vercel.app/",
    description:
      "An eCommerce application integrated with headless CMS and Stripe.",
    techStack: ["React", "Strapi", "PostgreSQL", "SCSS"],
  },
  {
    title: "Food852",
    url: "https://recipe-app-copy.onrender.com/",
    description:
      "A meal recipe application that allows users to add and save recipes.",
    techStack: ["React", "Express", "MongoDB", "SCSS"],
  },
  {
    title: "r/CakeDay",
    url: "https://rcakeday.netlify.app/",
    description: "A real vanilla-ey minimalist countdown to Reddit Cake Day.",
    techStack: ["VanillaJS", "LESS", "CSS", "HTML"],
  },
  {
    title: "Sanity O'Clock!",
    url: "https://sanityoclock.netlify.app",
    description: "A CSS Animation to help with focused breathing exercises.",
    techStack: ["JavaScript", "CSS", "HTML"],
  },
  {
    title: "Central Perk",
    url: "https://centralperky.netlify.app/",
    description: "A React point-of-service application for coffee shops.",
    techStack: ["React", "CSS", "Bootstrap"],
  },
];

// Function to create a project card
function createProjectCard(project) {
  const projectDiv = document.createElement("div");
  projectDiv.className = "project col-sm";

  const highlight = document.createElement("div");
  highlight.className = "project-title-highlight";

  const title = document.createElement("h3");
  const link = document.createElement("a");
  link.href = project.url;
  link.alt = project.title;
  link.target = "_blank";
  link.className = "un";
  link.textContent = project.title;
  title.appendChild(link);

  const description = document.createElement("p");
  description.textContent = project.description;

  const techStack = document.createElement("p");
  techStack.className = "tech-stack";
  project.techStack.forEach((tech) => {
    const span = document.createElement("span");
    span.textContent = tech;
    techStack.appendChild(span);
  });

  projectDiv.appendChild(highlight);
  projectDiv.appendChild(title);
  projectDiv.appendChild(description);
  projectDiv.appendChild(techStack);

  return projectDiv;
}

// Function to render all projects
function renderProjects() {
  const projectsSection = document.getElementById("projects-container");
  if (!projectsSection) return;

  // Clear existing content
  projectsSection.innerHTML = "";

  // Create rows (3 projects per row)
  const projectsPerRow = 3;
  for (let i = 0; i < projectsData.length; i += projectsPerRow) {
    const row = document.createElement("div");
    row.className = "row";

    // Add 'reveal' class to second row for animation
    if (i >= projectsPerRow) {
      row.classList.add("reveal");
    } else {
      row.classList.add("project");
    }

    // Add projects to row
    for (let j = i; j < i + projectsPerRow && j < projectsData.length; j++) {
      const projectCard = createProjectCard(projectsData[j]);
      row.appendChild(projectCard);
    }

    projectsSection.appendChild(row);
  }
}

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

// Function to set up Intersection Observer for reveal animations
function setupRevealObserver() {
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
}

// Typewriter effect
const typewriterConfig = {
  elementId: "hello",
  phrases: [
    "Hey! I'm Lou.",
    "Salut, je m'appelle Lou.",
    "Hallo, ich bin Lou.",
    "Ciao, sono Lou.",
    "Hey! I'm Lou.",
  ],
  typeSpeed: 90,
  phraseDelay: 1000,
};

function initTypewriter({ elementId, phrases, typeSpeed, phraseDelay }) {
  const target = document.getElementById(elementId);
  if (!target || !Array.isArray(phrases) || phrases.length === 0) {
    return;
  }

  let phraseIndex = 0;
  let characterIndex = 0;

  function typeNextCharacter() {
    const phrase = phrases[phraseIndex];
    if (characterIndex < phrase.length) {
      target.textContent += phrase.charAt(characterIndex);
      characterIndex += 1;
      setTimeout(typeNextCharacter, typeSpeed);
    } else if (phraseIndex < phrases.length - 1) {
      setTimeout(() => {
        target.textContent = "";
        phraseIndex += 1;
        characterIndex = 0;
        typeNextCharacter();
      }, phraseDelay);
    }
  }

  target.textContent = "";
  typeNextCharacter();
}

// Start typewriter and set year when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  initTypewriter(typewriterConfig);
  renderProjects();
  setupRevealObserver(); // Set up observer after projects are rendered

  // Display current year in footer
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
