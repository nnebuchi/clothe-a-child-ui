document.addEventListener("DOMContentLoaded", function () {
  const hero = document.getElementById("hero");
  const heroLeft = document.getElementById("heroLeft");
  const heroRight = document.getElementById("heroRight");
  const navLinks = document.querySelectorAll(".nav-link");

  function updateNavColor() {
    const heroMidpoint = hero.offsetWidth / 2;

    navLinks.forEach((link) => {
      const linkRect = link.getBoundingClientRect();
      const linkCenter = linkRect.left + linkRect.width / 2;
      const isOnBlueSide = linkCenter > heroMidpoint;

      if (isOnBlueSide) {
        // Right side (Blue background)
        link.style.color = "white"; // Default white
        link.onmouseenter = () => (link.style.color = "black"); // Hover/Active black
        link.onmouseleave = () => (link.style.color = "white");
        link.onfocus = () => (link.style.color = "black"); // Keyboard navigation support
      } else {
        // Left side (White background)
        link.style.color = "var(--color-text)"; // Default black
        link.onmouseenter = () => (link.style.color = "var(--color-blue)"); // Hover/Active blue
        link.onmouseleave = () => (link.style.color = "var(--color-text)");
        link.onfocus = () => (link.style.color = "var(--color-blue)");
      }
    });
  }

  updateNavColor();

  window.addEventListener("resize", updateNavColor);
});

// window.addEventListener("scroll", function () {
//   const header = document.querySelector("header");
//   const offset = window.pageYOffset;
//   const blurAmount = Math.min(8, offset / 20);
//   header.style.background = `linear-gradient(to right, white 50%, var(--color-blue) 50%)`;
//   header.style.backdropFilter = `blur(${blurAmount}px)`;
// });

// mobilemenu
// Get the menu button and the menu itself
const menuBtn = document.getElementById("menuBtn");
const menu = document.querySelector("menu");
const closeBtn = document.getElementById("closeBtn");

// Add an event listener to the menu button to toggle the menu's visibility
menuBtn.addEventListener("click", () => {
  if (
    menu.classList.contains("animate-exit") ||
    menu.classList.contains("hidden")
  ) {
    menu.classList.remove("animate-exit");
    menu.classList.toggle("hidden");
    menu.classList.toggle("animate-entrance");
  } else {
    menu.classList.toggle("hidden");
  }
});

// Add an event listener to the close button to toggle the menu's visibility
closeBtn.addEventListener("click", () => {
  if (menu.classList.contains("animate-entrance")) {
    menu.classList.remove("animate-entrance");
    menu.classList.toggle("animate-exit");
    menu.classList.toggle("hidden");
  } else {
    menu.classList.toggle("hidden");
  }
});
