let lastscrollY = window.scrollY;
const navbar = document.querySelector("main-header");
window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    navbar.classList.add("header-hidden");
  } else {
    navbar.classList.remove("header-hidden");
  }
  lastScrollY = currentScrollY;
});
