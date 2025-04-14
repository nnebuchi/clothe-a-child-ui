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
    menu.classList?.contains("animate-exit") ||
    menu.classList?.contains("hidden")
  ) {
    menu.classList?.remove("animate-exit");
    menu.classList?.toggle("hidden");
    menu.classList?.toggle("animate-entrance");
  } else {
    menu.classList?.toggle("hidden");
  }
});

// Add an event listener to the close button to toggle the menu's visibility
closeBtn.addEventListener("click", () => {
  if (menu.classList?.contains("animate-entrance")) {
    menu.classList?.remove("animate-entrance");
    menu.classList?.toggle("animate-exit");
    menu.classList?.toggle("hidden");
  } else {
    menu.classList?.toggle("hidden");
  }
});

// Tab functionality
document.addEventListener("DOMContentLoaded", () => {
  const tabList = document.querySelectorAll('[role="tab"]');

  tabList.forEach((tab) => {
    tab.addEventListener("click", () => {
      const parentUl = tab.closest("ul");
      const activeClasses =
        parentUl.dataset.tabsActiveClasses?.split(" ") || [];
      const inactiveClasses =
        parentUl.dataset.tabsInactiveClasses?.split(" ") || [];

      // Clear all tabs
      parentUl.querySelectorAll('[role="tab"]').forEach((t) => {
        t.setAttribute("aria-selected", "false");
        t.classList.remove(...activeClasses);
        t.classList.add(...inactiveClasses);
      });

      // Hide all tab panels
      const tabContentContainer = document.querySelector(
        parentUl.dataset.tabsToggle
      );
      tabContentContainer
        .querySelectorAll('[role="tabpanel"]')
        .forEach((panel) => {
          panel.classList.add("hidden");
        });

      // Activate clicked tab
      tab.setAttribute("aria-selected", "true");
      tab.classList.remove(...inactiveClasses);
      tab.classList.add(...activeClasses);

      // Show corresponding panel
      const targetPanel = document.querySelector(tab.dataset.tabsTarget);
      targetPanel.classList.remove("hidden");
    });
  });
});

// slider
const images = [
  {
    src: "../assets/images/support-christmat.png",
    alt: "Kids playing outdoors",
  },
  {
    src: "../assets/images/support-christmat.png",
    alt: "Kids smiling during play",
  },
  {
    src: "../assets/images/support-christmat.png",
    alt: "Girl at birthday party with hands up",
  },
  {
    src: "../assets/images/support-christmat.png",
    alt: "Child with raised hands enjoying a game",
  },
  {
    src: "../assets/images/support-christmat.png",
    alt: "Another happy moment",
  },
];
let currentIndex = 2; // Start from center slide
const carousel = document.getElementById("carousel");

function renderSlides() {
  carousel.innerHTML = ""; // Clear carousel

  for (let i = 0; i < images.length; i++) {
    let classNames =
      "transition-all duration-500 ease-in-out rounded-xl overflow-hidden object-cover flex-shrink-0 w-[60%] sm:w-[40%] md:w-[30%]";

    if (i === currentIndex) {
      classNames += " scale-105 z-30";
    } else if (i === currentIndex - 1 || i === currentIndex + 1) {
      classNames += " scale-95 opacity-70 z-20";
    } else {
      classNames += " hidden sm:block opacity-40 scale-90 z-10";
    }

    carousel.innerHTML += `
          <li class="${classNames}" role="group" aria-label="Slide ${
      i + 1
    } of ${images.length}">
            <img src="${images[i].src}" alt="${
      images[i].alt
    }" class="w-full h-full object-cover" />
          </li>
        `;
  }
}

function moveSlide(direction) {
  const total = images.length;
  currentIndex = (currentIndex + direction + total) % total;
  renderSlides();
}

document.getElementById("prev").addEventListener("click", () => moveSlide(-1));
document.getElementById("next").addEventListener("click", () => moveSlide(1));

// Optional: keyboard support
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") moveSlide(1);
  if (e.key === "ArrowLeft") moveSlide(-1);
});

renderSlides();
