document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  const closeMenuBtn = document.getElementById("closeMenuBtn");

  // Mobile menu open
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.remove("translate-x-full");
      navLinks.classList.remove("hidden");
    });
  }

  // Mobile menu close
  if (closeMenuBtn && navLinks) {
    closeMenuBtn.addEventListener("click", () => {
      navLinks.classList.add("translate-x-full");
      navLinks.classList.add("hidden");
    });
  }
});
