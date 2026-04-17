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
