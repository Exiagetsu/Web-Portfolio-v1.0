const header = document.getElementById("main-header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (!header) return; // Keamanan jika ID tidak ditemukan
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    header.classList.add("header-hidden");
  } else {
    header.classList.remove("header-hidden");
  }
  lastScrollY = currentScrollY;
});
window.addEventListener("scroll", () => {
  const header = document.querySelector(".main-header");
  if (window.scrollY > 50) {
    header.classList.add("nav-scrolled");
  } else {
    header.classList.remove("nav-scrolled");
  }
});
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

revealEls.forEach((el) => revealObserver.observe(el));
