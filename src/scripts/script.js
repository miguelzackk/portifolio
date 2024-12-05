function toggleMenu() {
  const sideMenu = document.getElementById("sideMenu");
  const hamburger = document.querySelector(".hamburger");

  sideMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
}

document.querySelectorAll(".menu-links a").forEach((link) => {
  link.addEventListener("click", () => {
    const sideMenu = document.getElementById("sideMenu");
    const hamburger = document.querySelector(".hamburger");

    sideMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => {
    section.classList.add("section-hidden");
    observer.observe(section);
  });
});
